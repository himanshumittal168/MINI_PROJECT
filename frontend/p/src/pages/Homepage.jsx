// useeffect ,API-> BACKEND


//    NON NULL.

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage=()=>
  {

    const [empdata,setempdata]=useState();

           // BASE URL                      END POINT
      let url="http://localhost:4000/api/v1/getallUsers"
      const getalldata=async()=>
      {
        try
        {
          
          const getpeople=await fetch(url,
            {
              method:"GET",
              header:{
                "Content-Type":"application/json"
              }
            }
          );
          console.log("DATA IS HERE",getpeople);
          const res=await getpeople.json();
          console.log(res);
          setempdata(res);
        }
        catch(err)
        {
          console.log(err);
        }
      }

      useEffect(()=>
      {
        getalldata();
        console.log("HELLO");
      },[]);
      if(!empdata)
      {
        <p>loading</p>
      }
      return(
        <>
        <h2>Employees</h2>
        <p>This is a list of all employees. You can add new employees, edit or delete existing ones.</p>
        <Link to={"/addemployee"}><button>Add Employee</button></Link>
        <table>
          <thead>
            <tr>
              <th> 
                <span>Employee</span>
              </th>
              <th>
                Title
              </th>
              <th>
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {empdata?.data.map((person)=>(
              <tr>
                <td>
                  <img src={person.image}></img>
                  <div>
                    {person.name}
                  </div>
                  <div>
                    {person.email}
                  </div>
                </td>
                <td>
                 <div> 
                    {person.title}
                  </div>
                  <div>
                    {person.department}
                  </div>
                </td>
                <td>
                  {person.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
      )
  }


export default HomePage;