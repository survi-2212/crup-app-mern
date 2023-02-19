import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate()

    const [inpval,setInp] = useState({
        name:'',
        email:'',
        age:'',
        mobile:'',
        work:'',
        address:'',
        desc:''
    
    })

    const setData = (e) =>{
        // console.log(e.target.value);
        const {name,value}=e.target
        setInp((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })

        
    }



    const addinpdata =async(e)=>{
      e.preventDefault()

      const {name,email,age,mobile,work,address,desc} = inpval
      const res = await fetch("/register",{
        method:'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          name,email,work,mobile,address,desc,age
        })
      })

      const data = await res.json()
      // console.log(data);


      if(res.status === 404 || !data)
      {
        alert("error")
        // console.log("error");
      }
      else{
        alert("data added")
        navigate("/")
        // console.log("data added");
      }
    }

  return (
    <div className="container">
      <form className="row">
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
          onChange={setData}
          value={inpval.name }
          name="name"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
          onChange={setData}
          value={inpval.email }
          name="email"
            type="mail"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
          onChange={setData}
          value={inpval.age }
          name="age"
            type="number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">
            Mobile
          </label>
          <input
          onChange={setData}
          value={inpval.mobile }
          name="mobile"
            type="number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">
            Work
          </label>
          <input
          onChange={setData}
          value={ inpval.work}
          name="work"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
          onChange={setData}
          value={inpval.address }
          name="address"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 col-lg-12 col-md-12 col-12">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea onChange={setData} value={ inpval.desc} name="desc" id="" cols="30" rows="5" className="form-control"></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={addinpdata}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
