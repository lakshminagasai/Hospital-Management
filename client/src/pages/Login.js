import React from "react";
import {Form,Input,message } from "antd";
import "../styles/RegisterStyles.css"
import {useDispatch} from "react-redux"
import { showLoading,hideLoading } from "../redux/features/alertSlice";
import {Link,useNavigate} from  "react-router-dom";
import axios from "axios"
const Login = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const onFinishHandler = async (values) => {
      try {
        dispatch(showLoading());
        const res = await axios.post("/api/v1/user/login", values);
        window.location.reload();
        dispatch(hideLoading());
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          message.success("Login Successfully");
          navigate("/");
        } else {
          message.error(res.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
        message.error("something went wrong");
      }
    };
    

    return(
    
            <div className="form-container">
            <Form layout="vertical" onFinish ={onFinishHandler} className="register-form p-3">
                <h2 className="text-center">Login Form</h2>
             <Form.Item label="EMAIL" name="email">
                <Input type="email" placeholder="" required/>
             </Form.Item>
             <Form.Item label="PASSWORD" name="password">
                <Input type="password" placeholder="" required/>
             </Form.Item>
             <Link to="/register" className="mx-4">New User register here</Link>
             <button className="btn btn-primary" type="submit">Login</button>
            </Form>
        </div>
        
    )
};
export default Login;
