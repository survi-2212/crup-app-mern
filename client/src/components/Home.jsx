import React, { useEffect, useState } from "react";
import { NavLink,Link } from "react-router-dom";

const Home = () => {


  const[getuserdata,setUserData] = useState([])
  console.log(getuserdata)

  const getdata =async(e)=>{
    
    const res = await fetch("/getdata",{
      method:'GET',
      headers:{
        "Content-Type": "application/json"
      }
    })

    const data = await res.json()
    console.log(data);


    if(res.status === 404 || !data)
    {
      console.log("error");
    }
    else{
      setUserData(data)
      console.log("get data ");
    }
  }


  useEffect(()=>{
    getdata()
  },[])


  const deleteUser =async(id) =>{
    const res2 = await fetch(`/deleteuser/${id}`,{
      method:"DELETE",
      headers: {
        "Content-type":"application/json"
      },
    })


    const deletedata = res2.json()
    console.log(deletedata);

    if(res2.status ===404 || !deletedata)
    {
      alert("error");
    }
    else{
      alert(("user deleted"));
      getdata()
    }
  }


  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <Link to="/register" style={{width:19,height:15,padding:10,textDecoration:"none",backgroundColor:"blue",color:"white"}}>Add Data</Link>
        </div>

        <table className="table mt-3">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
             
            </tr>
          </thead>
          <tbody>
          {
            getuserdata.map((user,id)=>{
              return(
                <>
                <tr>
                <th scope="row">{id+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.work}</td>
                <td>{user.mobile}</td>
                <td className="d-flex justify-content-between">
                <NavLink to={`details/${user._id}`}><button className="btn btn-success"><i class="fa-solid fa-eye"></i></button></NavLink>
                <NavLink to={`edit/${user._id}`}><button className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></NavLink>
                  <button className="btn btn-danger" onClick={()=>deleteUser(user._id)}><i class="fa-sharp fa-solid fa-trash"></i></button>
                </td>
              </tr>
                </>
              )
            })
          }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
