



function Button({count, setCount}) {

    function toggle(){
        setCount(!count);
    }

    return (

        <>

        <button onClick={toggle}>Theme change</button>

        
        
        </>
    )


    
}

export default Button;