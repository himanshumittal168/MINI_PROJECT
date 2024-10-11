import { useState } from "react";

import { useNavigate } from "react-router-dom";


const EmployeeForm=()=>{
  const [formdata,setformdata]=useState({
    name:"",
    email:"",
    title:"",
    department:"",
    role:"",
  });
  let url="http://localhost:4000/api/v1/createUser";
  const navigate=useNavigate();
  const handlesubmit=async(e)=>
  {
    e.preventDefault();
    try
    {
      const response=await fetch(url,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formdata),
      })

      navigate("/");
    }
    catch(err)
    {
      console.log(err);
    }
  }
  const handlechange=(e)=>
  {
    const {name,value}=e.target;
    setformdata(prevstate =>({
      ...prevstate,
      [name]:value
    }))
  }
  return(
    <>
    <form onSubmit={handlesubmit}>
      <label htmlFor="name">Employee Name</label>
      <input 
        type="text" 
        name="name"

        placeholder="Enter Your Name"
        value={formdata.name}
        onChange={handlechange}
      ></input>



      <label htmlFor="email">Employee Email Id</label>
      <input 
        type="email" 
        name="email"
      
        placeholder="Enter Your Email"
        value={formdata.email}
        onChange={handlechange}
      ></input>



      <label htmlFor="title">Employee Title</label>
      <input 
        type="text" 
        name="title"
      
        placeholder="Enter Your Title"
        value={formdata.title}
        onChange={handlechange}
      ></input>



      <label htmlFor="department">Employee Department</label>
      <input 
        type="text" 
        name="department"
      
        placeholder="Enter Your Department"
        value={formdata.department}
        onChange={handlechange}
      ></input>


      <label htmlFor="role">Employee Role</label>
      <input 
        type="text" 
        name="role"
      
        placeholder="Enter Your Role"
        value={formdata.role}
        onChange={handlechange}
      ></input>

      <button type="submit">create Employee</button>

    </form>
    </>
  )
}


export default EmployeeForm;