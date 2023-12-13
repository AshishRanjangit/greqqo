import react,{useState} from "react"
import axios from 'axios';
import Router, { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';

const Singup = () => {

    const router = useRouter();

const data = {
    company:"",
    email:"",
    password:"",
    userName:"",
    phone:""
}

const[singupdata,setSingupdata] = useState(data)

const handelChange =(e)=>{
    const { name, value } = e.target;
    setSingupdata({
        ...singupdata,
        [name]: value
      });
}

const handleSubmit = async(e) => {
    e.preventDefault();
  
    setSingupdata(data)
    console.log(singupdata);



    if (singupdata.email.endsWith('@gmail.com')) {
        alert('Invalid email. Please enter a company mail address.');
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/api/hello', singupdata);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      } 
      const otp = 1111
      
    //   router.push(`./verify/${otp}`)

  }

    return (
        <>
            <h1 className="text-center">Singup form</h1>
            <form onSubmit={handleSubmit} className="container">
            <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" value={singupdata.email} name="email" onChange={handelChange}  className="form-control"  aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Company</label>
                    <select className="form-select" aria-label="Default select example" name="company" value={singupdata.company} onChange={handelChange}>
                        <option >Open this select menu</option>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                    </select> 
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" value={singupdata.password} name="password" onChange={handelChange} className="form-control"  />
                </div>
                <div className="mb-3">
                    <label  className="form-label">username</label>
                    <input type="text" value={singupdata.userName} name="userName" onChange={handelChange} className="form-control"  />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Phone No</label>
                    <input type="number" value={singupdata.phone} name="phone" onChange={handelChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Singup