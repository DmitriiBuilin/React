import { React, useCallback } from "react";
import Checkbox from '@mui/material/Checkbox';
import { Provider } from 'react-redux';
import { checkedInput } from "../store/actions/checkboxAction";
import { store } from "../store/store";
import { useDispatch, useSelector } from 'react-redux';


export const Profile = () => {
    // const{ showName, name } = useSelector((state) =>state); 
    // const dispatch = useDispatch();

    // const setShowName = useCallback (() => { 
    //     dispatch(checkedInput); 
    // }, [dispatch])

    return (
        <div>
            <h1>Profile</h1>
            <Provider store={store}>
                <Checkbox />
            </Provider>
        </div>
    )
}