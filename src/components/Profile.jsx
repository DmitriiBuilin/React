import { React, useCallback, useState } from "react";
// import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from "react-redux";
import { changeName } from "../store/actions/actions";
// import { TOGGLESHOWNAME, DECREASE, INCREASE, CHECKED, CHANGENAME} from "../store/actions/actions";

export const Profile = () => {
    // const count = useSelector(state => state.count)
    const dispatch = useDispatch();
    // const { name } = useSelector(state => state.profile);
    const [value, setValue] = useState('');   
    // const setShowName = useCallback(() => {
    //     dispatch(TOGGLESHOWNAME);
    // }, [dispatch]);
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    const setName = useCallback(() => {
        dispatch(changeName(value))
        }, [dispatch, value]);

    return (
        <div>
            <div>
                <h1>Profile</h1>
            </div>
            <div>
                <input type="text" value={value} onChange={handleChange} />
            </div>
            <div>
                <button onClick={setName}>Change Name</button>
            </div>
        </div>
        
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