import React from 'react'
function task1(props){
    const{task,index,deletetask}=props
    function status(){
        deletetask(index)
        }
    return(<div >
        <div style={{display:'flex',alignItems:'center'}}>
        <p style={{marginRight:'7px'}}>{`${index+1}.${props.task}`}</p>
        <button onClick={status}>Remove </button>
        </div>
        </div>

    )
}
export default task1 
