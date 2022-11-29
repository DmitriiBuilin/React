import { React } from "react";
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";

export const Profile = () => {
    const checkboxState = useSelector(state => state.type)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Profile</h1>
            <button onClick={() => dispatch(checkboxState)}></button>
            <Checkbox />
        </div>
    )
}