import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


const FApp = ()=>{
    return(
        <div>
        <App/>
        </div>
    )
}


ReactDOM.render(<FApp/>, document.querySelector("#root"))