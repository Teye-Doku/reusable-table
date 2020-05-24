import React from 'react';
import PropTypes, { shape } from 'prop-types';

const Table = ({columns,data}) =>{

  return (
       <div className="content-table">
            <table>
               <thead>
                 
                     <tr>
                        {
                          columns.map(item => <th>{item}</th>)
                        }
                     </tr>
                 
               </thead>
               <tbody>
                   <MultipleRowData columns={columns} data={data}/>
               </tbody>
            </table>
       </div>
  );
}
 const MultipleRowData = ({columns,data}) => {
     return(
         <>
           {
             data.map((row,index) => {
                  return <tr key={index}> <RenderSingleRow keys={columns} data ={row}/>  </tr>
             })
           }
         </>
     );
 }
const RenderSingleRow =({keys,data}) => {
    return keys.map((key,index)=>{
    return <td key={index}>{data[key]}</td>
    })
}

Table.propTypes = {
     columns:PropTypes.array,
     data:PropTypes.arrayOf(shape)
}

export default Table;