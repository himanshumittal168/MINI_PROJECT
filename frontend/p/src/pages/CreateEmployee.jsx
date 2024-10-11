import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
const CreateEmployee=()=>
{
  return(
    <>
    <section>
      <img src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      <h3>
        Empower your business with our employee creation!
      </h3>
      <h2> Create Employee</h2>
      <Link to={"/"}>
      <FaBackward />Back To Employee List
      </Link>
      <EmployeeForm></EmployeeForm>
    </section>
    </>
  )
}


export default CreateEmployee