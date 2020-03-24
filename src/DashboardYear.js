
import React from 'react';

const  DashboardYear = (props) => 
{
	const clientlist = props.clientsData.map((client)=> 
	{
		return(
          <>
            <tr>
              <td>{client.client}</td>
              <td>{ ( client.data['01'].paid_out !== undefined ) ? client.data['01'].paid_out : 0 }</td>
              <td>{ ( client.data['02'].paid_out !== undefined ) ? client.data['02'].paid_out : 0 }</td>
              <td>{ ( client.data['03'].paid_out !== undefined ) ? client.data['03'].paid_out : 0 }</td>
              <td>{ ( client.data['04'].paid_out !== undefined ) ? client.data['04'].paid_out : 0 }</td>
              <td>{ ( client.data['05'].paid_out !== undefined ) ? client.data['05'].paid_out : 0 }</td>
              <td>{ ( client.data['06'].paid_out !== undefined ) ? client.data['06'].paid_out : 0 }</td>
              <td>{ ( client.data['07'].paid_out !== undefined ) ? client.data['07'].paid_out : 0 }</td>
              <td>{ ( client.data['08'].paid_out !== undefined ) ? client.data['08'].paid_out : 0 }</td>
              <td>{ ( client.data['09'].paid_out !== undefined ) ? client.data['09'].paid_out : 0 }</td>
              <td>{ ( client.data['10'].paid_out !== undefined ) ? client.data['10'].paid_out : 0 }</td>
              <td>{ ( client.data['11'].paid_out !== undefined ) ? client.data['11'].paid_out : 0 }</td>
              <td>{ ( client.data['12'].paid_out !== undefined ) ? client.data['12'].paid_out : 0 }</td>
            </tr>
          </>
	    )
	} );
	  
	return( 
		<> 
			<table className="mt-2 table table-striped table-bordered table-hover table-sm">
				<thead className="bg-secondary text-white">
					<th className="text-left">Clients</th>
					<th>Jan</th>
					<th>Feb</th>
					<th>Mar</th>
					<th>Apr</th>
					<th>May</th>
					<th>Jun</th>
					<th>Jui</th>
					<th>Aug</th>
					<th>Sep</th>
					<th>Oct</th>
					<th>Nov</th>
					<th>Dec</th>
				</thead>
				<tbody>
					{ clientlist}
				</tbody>
			</table>
		</>
	)
	
}
export default DashboardYear;




