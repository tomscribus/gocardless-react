import React, { Component } from 'react';
import axios from 'axios'
import DashboardYear from './DashboardYear';
import Header from './Header';
import Spinner from './Spinner.js';
import './App.css';
class App extends Component 
{
  constructor(props){

    super(props);

    this.state = 
    {
      activeYear  : (new Date()).getFullYear(),
      activePaymentType : 1,
      activeClientsType : 1,
      clientsData : []
    }

  }

  componentDidMount()
  { 

    var activeYear = this.props.match.params.year;
    axios.get('http://console.fixweb.com/gocardless/api/action-dashboard-year.php?y='+activeYear)
    .then((response) =>
    {
      this.setState({ clientsData: response.data});
    })
    .catch((error) =>
    {
      console.log(error);
      alert(error);
    })
  }


  render() 
  {
    return (
      <div className="container mt-3">
      <Header activeYear={this.props.match.params.year} />
      {this.state.clientsData[0]? 
        <DashboardYear activeYear={this.props.match.params.year} clientsData={this.state.clientsData} /> : 
        <Spinner />
      }
      </div>
  )
}

}
       
export default App;
