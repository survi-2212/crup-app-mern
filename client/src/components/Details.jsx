import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Details = () => {

  const[getuserdata,setUserData] = useState([])
  console.log(getuserdata)
  const {id} = useParams("")
  // console.log(id);

  const navigate = useNavigate()


  const getdata =async()=>{
    
    const res = await fetch(`/getuser/${id}`,{
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
      navigate("/")
    }
  }


  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome {getuserdata.name}</h1>
      <div className="card mt-3" style={{ maxWidth:800 }}>
        <div className="card-body">
        <div className="add-btn detail_btn">
        <NavLink to={`/edit/${id}`}>
                <button className="btn btn-primary mx-2">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
        </NavLink>
                <button className="btn btn-danger" onClick={()=>deleteUser(getuserdata._id)}>
                  <i class="fa-sharp fa-solid fa-trash"></i>
                </button>
              </div>
          <div className="row">
              <div className="left  col-lg-6 col-md-6 col-12">
              <img
                src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
                style={{ minWidth: 50, width: 60 }}
              />
              <h3 className="mt-3">
                Name: <span>{getuserdata.name}</span>
              </h3>
              <h3 className="mt-3">
                Age: <span>{getuserdata.age}</span>
              </h3>
              <p className="mt-3">
                <i className="fa-solid fa-envelope"></i> Email:
                <span>{getuserdata.email}</span>{" "}
              </p>
              <p className="mt-3">
                <i className="fa-solid fa-briefcase"></i> Occupation:
                <span>{getuserdata.work}</span>
              </p>
            </div>
            <div className="right  col-lg-6 col-md-6 col-12">
              
              <p className="mt-5">
                <i class="fa-solid fa-mobile-screen"></i> Mobile:
                <span>{getuserdata.mobile}</span>
              </p>
              <p className="mt-3">
                <i class="fa-solid fa-location-dot"></i> Location:
                <span>{getuserdata.address}</span>
              </p>
              <p>
                Description:
                <span>
                  {getuserdata.desc}
                </span>
              </p>
            </div>
              
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
