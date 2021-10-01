import './App.css';
import React ,{useState} from 'react';
import Task1 from './components/Task1';

function App() {
  const [a,b]=useState(['Exercise','Yoga'])
  const [c,d]=useState('')
  function addvalue(){
    if(c.length>0){
    b(
      function(arr){
        const temp = [...arr]
        temp.push(c)
        return temp
      }
    )
    }
    d('')
  }
  function addtext(e){
    d(e.target.value)
  }
  function deletetaskbyindex(index){
    b(
      function(arr){
        const temparr=[...arr]
        temparr.splice(index,1)
        return temparr
      }
    )
  }
  function deletealltask(){
    b([])
  }
  return (
    <div className="App">
    <h1>THINGS TO DO...</h1>
    <div style={{display:'flex',flexDirection:'column',alignItems:'start'}}>
    {
      a.map(function(task,index){
        return(
          <Task1 task={task} key={index} index={index} deletetask={deletetaskbyindex} />
        )
      })
    }
    </div>
    <div>
      <button onClick= {deletealltask} style={{marginRight:'7px'}} >Delete All</button>
      <input type="text" value={c} onChange={addtext} style={{marginRight:'7px'}}/>
      <button onClick= {addvalue} >Add</button>
    </div> 
    </div> 
  );
}

export default App;
