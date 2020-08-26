import React, { Component } from 'react'


class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
            email : "",
            password : ""
        }
    }
    render(){
        return(
            <div>
            <form>
            <input type="email" id= "email" placeholder="email"
            onChange={this.handleChange} value={this.state.email}/>

            <input type="password" id= "password" placeholder="password"
            onChange={this.handleChange} value={this.state.email}/>
            <button onClick={this.Login}>Login</button>
            <button onClick={this.signup}>signup</button>
            </form>
            </div>
        )
    }
} 

export default Login