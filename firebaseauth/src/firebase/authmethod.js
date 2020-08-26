

import fire from './firebaseIndex'

export const authMethods = {
  // firebase helper methods .... 

  signup: (email, password, setErrors,setToken ) => {
   
    fire.auth().createUserWithEmailAndPassword(email,password) 
      //make res asynchonous so that we can make grab the token before saving it.
      .then( async res => {
        const token = await Object.entries(res.user)[5][1].b
        //set token to localStorage 
        await localStorage.setItem('token', token)
        setToken(token)
        //grab token from local storage and set to state. 
          console.log(res)
        })
        .catch(err => {
        setErrors(prev => ([...prev, err.message]))
      })
    },

  signin: (email, password, setErrors, setToken) => {
    //change from create users to...
    fire.auth().signInWithEmailAndPassword(email, password) 
      //everything is almost exactly the same as the function above
      .then( async res => {
        const token = await Object.entries(res.user)[5][1].b
          //set token to localStorage 
          await localStorage.setItem('token', token)
          
          
          setToken(window.localStorage.token)
        })
        .catch(err => {
          setErrors(prev => ([...prev, err.message]))
        })
      },
      
      //no need for email and password
      signout: (setErrors, setToken) => {
      // signOut is a no argument function
    fire.auth().signOut().then( res => {
      //remove the token
      localStorage.removeItem('token')
        //set the token back to original state
        setToken(null)
    })
    
    .catch(err => {

      setErrors(prev => ([...prev, err.message]))
   
        localStorage.removeItem('token')
          setToken(null)
            console.error(err.message)
    })
    },
  }