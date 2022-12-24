import React from 'react'
import "./style.css"


import {useAuth0} from "@auth0/auth0-react"
const Buttons = () => {
  const { loginWithRedirect ,isAuthenticated } = useAuth0();
  return ( 
    !isAuthenticated&&(
<div>
     
     <button class="button2" onClick={() => loginWithRedirect()}>
         <span></span>
          LOG IN
        </button>
     </div>
    )
   
  )
} 

export default Buttons
