import Button from "../components/button";
import Card from "../components/card";
import './Navbar.css';


function Navbar({count, setCount}) {


    return (
        <>

        <div class="navbardiv">
                     <Button count = {count} setCount={setCount}/>


        </div>

        
        </>
    )


    
}

export default Navbar;