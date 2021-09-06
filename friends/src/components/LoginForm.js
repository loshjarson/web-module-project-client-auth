import React, { useState } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom"
import './LoginForm.css'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({
        data: {
            errored: false,
            error: ""
        }
    })
    const history = useHistory();

    const handleChange = e => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
        console.log(formData)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formData)
        login()
    }

    const login = () => {
        setError({...error, data: {errored: false, error: ""}})
        setIsLoading(true)
        axios.post('http://localhost:5000/api/login', formData)
          .then(res => {
            localStorage.setItem('token', res.data.payload);
            setIsLoading(false)
            history.push('/friendsList');
            
          })
          .catch(e => {
              setIsLoading(false)             
              setError({...error, data: {errored: true, error: e}})
              
          })
      }

    return(
        <div className="login-container">
            <h2>Welcome to Friends</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
                <button type="submit"> Login</button>
            </form>
            {error.data.errored ? (<div className="error">{error.data.error.toString()}</div>) : (console.log("hi"))}
            {isLoading ? <div> logging in... </div> : console.log("hi")}
        </div>
    )
}

export default LoginForm;