import {useState} from 'react'
import './App.css'
function App() {
let [todos,setTodos] = useState([])
const [todo,setTodo] = useState("")
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
     
    </div>
    <div className="input">
      {/*here using usestate in input feald for getting the value in input feald rather than using dom for access the value, This is not a form so we cant normaly get the value rather than using dom so that's why here using usestate*/}
      <input  value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="  Add new task..." />
      <i onClick={()=>{setTodos([...todos,{id:Date.now(),text:todo,status:false}]);setTodo("")}} className="fas fa-plus"></i>
    </div>

    <div className="todos">
      
     { 
     todos.map((obj)=>{
      

    return( <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked);
            console.log(obj)

  
            setTodos(todos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status = e.target.checked
              }
              return obj2
            }))
          }} value={obj.status} type="checkbox" name="" id="" />
          <p> {obj.text}</p>
        </div>
        <div className="right">
          <i onClick={(event)=>{
          setTodos( todos.filter((item) => !(item.id ===obj.id)))
       
            
          }} className="fas fa-times"></i>
        </div>
      </div>)
           })
      }


      {todos.map((obj)=>{
        if(obj.status){
          return(<h1>{obj.text}</h1>)
        }
        return null
      })}
    </div>
  </div>
  );
}

export default App;
