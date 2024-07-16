import React from "react";
import {Form,Input,message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from "../redux/features/alertSlice";
import "../styles/RegisterStyles.css"
import {Link,useNavigate} from  "react-router-dom";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    // Form Handler
    const onFinishHandler= async (values) => {
    try{
        dispatch(showLoading())
        const res= await axios.post("/api/v1/user/register",values)
        dispatch(hideLoading())
        if(res.data.success){
            message.success("Register Successfully")
            navigate("/login")
        }else{
            message.error(res.data.message)
        }
    }catch(error){
        dispatch(hideLoading())
        console.log(error)
        message.error("Something went wrong")
    }
};
    return(
        <>
        <div className="form-container">
            <Form layout="vertical" onFinish ={onFinishHandler} className="register-form p-3">
                <h2 className="text-center">Register Form</h2>
             <Form.Item label="NAME" name="name">
                <Input type="text" placeholder="" required/>
             </Form.Item>
             <Form.Item label="EMAIL" name="email">
                <Input type="email" placeholder="" required/>
             </Form.Item>
             <Form.Item label="PASSWORD" name="password">
                <Input type="password" placeholder="" required/>
             </Form.Item>
             <Link to="/login" className="mx-4">Already you're a user login here</Link>
             <button className="btn btn-primary" type="submit">Register</button>
            </Form>
        </div>
        </>
    )
}
export default Register;