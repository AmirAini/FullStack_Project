import React from "react";

function TableRow({data}){

    console.log(data);
    

    return(
        
        <tr>
            <td>{data.task}</td>
            <td>{data.category ==1 ? "Important" : "Casual"}</td>
            <td>{data.description}</td>
            
        </tr>
       
    )
}

export default TableRow;