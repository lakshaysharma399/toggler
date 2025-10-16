import { useContext } from "react";
import { Context } from "./Context";




function Button() {

  const {toggle} =  useContext(Context);

  

    return (

        <>

        <button onClick={toggle}>Theme change</button>

        
        
        </>
    )


    
}

export default Button;