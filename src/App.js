import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Login from './Login';
import Portal from "./Components/Portal";
import Dashboard from "./Components/Dashboard";
import { UserProvider } from "./UserContext";
import { useState } from "react";
import AddStudent from "./Components/AddStudent";
import View from "./Components/View";
import Edit from "./Components/Edit";

function App() {
  const [Student,setStudent]=useState([
    {
      id:'1',
      name:"Priya",
      gender:"Female",
      dob:"2000/03/12",
      average:"1",
      father:"Aadi",
      mother:"Damini",
      num:"9786783392",
      job:"Artist",
    },
    {
      id:'2',
      name:"Sowmiya",
      gender:"Female",
     dob:"1999/04/18",
      average:"2",
      father:"Aditya",
      mother:"Gayatri",
      num:"9756789342",
      job:"Business Analyst"

    },
    {
      id:'3',
      name:"Aakash",
      gender:"Male",
      dob:"2000/01/10",
      average:"2",
      father:"Dhruv",
      mother:"Riya",
      num:"7555421896",
      job:"Designer"
    },
    {
      id:'4',
      name:"Kumar",
      gender:"Male",
       dob:"2001/03/22",
      average:"3",
      father:"Ronith",
      mother:"Alka",
      num:'7555218287',
      job:"Freelancer"
    },
    {
      id:'5',
      name:"Shanmathi",
      gender:"Female",
      dob:"2001/05/19",
      average:"1",
      father:"Neel",
      mother:"Anjana",
      num:"8555424945",
      job:"Construction Worker",
    },
    
      ])
  
  return (
    <div className="App">
      <BrowserRouter>
      <UserProvider>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/portal' element={<Portal/>}>
    
<Route path='dashboard' element={<Dashboard  Student={Student} setStudent={setStudent}/>}/>
<Route path='add' element={<AddStudent  Student={Student} setStudent={setStudent}/> }/>
<Route path="view/:id" element={<View Student={Student}/>}/>
<Route path="edit/:id" element={<Edit   Student={Student} />}/>
</Route>
      </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
