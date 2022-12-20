import Button from "@mui/material/Button";
import { React, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/actions/actions";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpyDwMoVVFcfBdjqUkoJY2hQtYxrwO84A",
  authDomain: "gb-react-2022.firebaseapp.com",
  projectId: "gb-react-2022",
  storageBucket: "gb-react-2022.appspot.com",
  messagingSenderId: "254277553021",
  appId: "1:254277553021:web:ccf47e68f29958abe19a14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const Profile = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');   
    const name = useSelector((store) => store.profile.name)
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    const setName = useCallback(() => {
        dispatch(changeName(value));
        setValue('')
        }, [dispatch, value]);

    return (
        <>
            <div>
                <h1>Profile</h1>
            </div>
            <h3>Name: {name}</h3>
            <div>
                <input type="text" value={value} onChange={handleChange} />
            </div>
            <div style={{marginTop: '10px'}}>
                <Button style={{backgroundColor: 'grey', color: 'white'}} onClick={setName}>Change Name</Button>
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