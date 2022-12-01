import { React } from "react";
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";
import { DECREASE, INCREASE, CHECKED } from "../store/actions/actions";

export const Profile = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();    

    return (
        <div>
            <h1>Profile</h1>
            <button onClick={() => {dispatch(INCREASE)}}>Up</button>   
            <p>{count}</p>
            <button onClick={() => {dispatch(DECREASE)}}>Down</button>
            <br />
            <Checkbox onClick={() => {dispatch(CHECKED)}}/>
        </div>
    )
}