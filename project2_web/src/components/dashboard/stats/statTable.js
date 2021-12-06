import React from "react";

function StatTable({data}){
    return(
        <tr>
        <td>{data.task}</td>
        <td>{data.category ==1 ? "Important" : "Casual"}</td>
        </tr>
    )
}

export default StatTable;