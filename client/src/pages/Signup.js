import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [confirmpassword,setConfirmPassword] = useState("")
    const onChangePassword = (event) =>{
         setPassword(event.target.value);
         console.log(password);
    }
    const onChangeUsername = (event) =>{
        setUsername(event.target.value);
        console.log(username);
    }
    const onChangeConfirmPassword = (event) =>{
      setConfirmPassword(event.target.value);
      console.log(confirmpassword);
    }
    const onSubmit = async(event) =>{
        event.preventDefault();
        try{
            if(password===confirmpassword){
              await axios.post("http://localhost:3001/auth/signup", 
              {username,password});
              alert("Sign up completed, login to continue !")
              navigate('/auth/login')
            } 
            else{
              alert('Passwords not matching !')
              window.location.reload()
            }  
        }
        catch(err){
            console.log(err); 
        }

    }
    return (
      <>
      <h1 style={{justifyContent:"center",display: "flex"}} >Signup</h1>
      <br></br>
      <div style={{justifyContent:"center",display: "flex"}} >
      <Form  onSubmit = {onSubmit} style={{ display: "flex", flexDirection: "column"}} method="POST">
          <div style={{marginRight:"30px",marginBottom:"20px"}}>
            <Form.Label>User name</Form.Label>
            <Form.Control  type="text" placeholder="Enter user name" name="username" onChange = {onChangeUsername}/>
          </div>
          <div style={{marginRight:"30px",marginBottom:"20px"}}>
          <Form.Label>Password</Form.Label>
          <Form.Control  type="password" placeholder="Enter password" name="password"  onChange = {onChangePassword }/>
          </div>
          <div style={{marginRight:"30px",marginBottom:"20px"}}>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control  type="password" placeholder="Re-enter password" name="password"  onChange = {onChangeConfirmPassword }/>
          </div>
        <div style={{marginRight:"30px"}}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>

      </div>
      
    </>
    );
  }