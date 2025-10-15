import Button from "../components/button";
import Card from "../components/card";
import './Maincontent.css';

function Maincontent({count}) {

    return (

        <>

        <div class ="main-div">

                    <Card count = {count}/>


        </div>

        
        </>
    )


    
}

export default Maincontent;