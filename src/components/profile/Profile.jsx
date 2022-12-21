import { Link } from "react-router-dom";
import { React } from "react";


export const Profile = () => {
    

    return (
        <>
            <div>
                <h1>Login</h1>
            </div>
            <div style={{marginTop: '10px'}}>                
                <Link style={{backgroundColor: 'blue', color: 'white', width: '85px', height: '30px'}} to='/profile/signin'>Sign in                    
                </Link>                    
            </div>
            <div style={{marginTop: '10px'}}>
                <Link style={{backgroundColor: 'red', color: 'white', width: '85px', height: '30px'}} to='/profile/signup'>Sign up                    
                </Link>  
            </div>
        </>
        
        // <div>
        //     <h1>Profile</h1>
        //     <button onClick={() => {dispatch(INCREASE)}}>Up</button>   
        //     <p>{count}</p>
        //     <button onClick={() => {dispatch(DECREASE)}}>Down</button>
        //     <br />
        //     <Checkbox onClick={() => {dispatch(CHECKED)}}/>
        // </div>
    )
}

export default Profile;