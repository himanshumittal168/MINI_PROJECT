const { useEffect, useState } = require("react")
//
const HomePage=()=>
{
    const [data,setdata]=useState();
    function getdata()
    {
        // get data from API

    }
    useEffect(()=>
    {
        getdata();
    },[]);
    return(
        <>
        <h2>Employee</h2>
        <p>This is a list of all employees. You can add new employees, edit or delete existing ones.</p>
        <Link to={"/addemployee"}><button>Add Employee</button></Link>
        <div>
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
                    //API
                </tbody>
            </table>
        </div>
        </>
    )
}