import react, { useEffect, useState } from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Router, { useRouter } from "next/router";

const Login = () => {
    const data = {
        email : '',
        password: ''
    }

    const router = useRouter()

    const [logindata, setLogindata] = useState(data)

    const handelChange = (e) => {
        const { name, value } = e.target
        setLogindata({
            ...logindata,
            [name]: value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        // router.push('./user/11')
        try {
            const response = await axios.post('http://localhost:4000/login', logindata);

            if (response.status === 200) {
                router.push('./user/11')
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error:', error);
            alert("invalid cradential")
        }
    };

    const userSingup = () => {
        router.push('./singup')
    }

    return (
        <>
            <div className="container-fluid p-0 overflow-hidden ">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="form_div">
                            <h2 className="text-center">login form</h2>
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    {/* <input type="email" value={logindata.email } className="form-control" name="email " onChange={handelChange} /> */}
                                    <input type="email" value={logindata.email} name="email" onChange={handelChange} className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" value={logindata.password} className="form-control" name="password" onChange={handelChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">SingIn</button>
                                <a className="float-end text-decoration-none mt-2" onClick={userSingup} style={{ cursor: 'pointer', color: 'white' }} >Create account</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login