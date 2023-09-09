
import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
function App() {
  const [name, setName]= useState("")
  const [role, setRole]= useState("Dev")

  const [employee,setEmplooye]=useState([
    {
      id:1,
      name:"kay",
      role:"Developer",
      img:"http://surl.li/kvmco"
    },
    {
      id:2,
      name:"angeline",
      role:"Developer",
      img:"http://surl.li/kvmpz"
    },{
      id:3,
      name:"Ruby",
      role:"Developer",
      img:"http://surl.li/kvmmf"
    },{
      id:4,
      name:"klock",
      role:"Developer",
      img:"http://surl.li/kvmml"
    },{
      id:5,
      name:"Pep",
      role:"Developer",
      img:"http://surl.li/kvmmv"
    },{
      id:6,
      name:"Joshua",
      role:"Developer",
      img:"http://surl.li/kvmni"
    },
  ])

  function updateEmplooye(id, newName, newRole){
    const updateEmplooye=employee.map((employee)=>{
      if(id===employee.id){
        return{...employee, name:newName, role:newRole}
      }

      return employee
    })   
    setEmplooye(updateEmplooye)
  }


  return (
    <div className="App">
          <div className="flex flex-wrap justify-center">
            {employee.map(item=>{
              return(
              <Employee
               key={item.id}
               id={item.id}
                name={item.name}
                role={item.role}
                img={item.img}
                updateEmplooye={updateEmplooye}
                 />
              )        
            })}
          </div>
    </div>
  );
}

export default App;
