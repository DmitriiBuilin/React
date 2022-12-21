import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import "./api.css"

const API_URL_PUBLIC ="https://api.github.com/gists/public";

export const Api = () => {
    const [gists, setGists] = useState([]); 
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const renderGist = useCallback( 
        // gist.description может быть пустой строкой 
        (gist) => <li key={gist.id}>{gist.description || 'No description'}</li>, [] 
        
    );
    const requestGists = () => {
        setLoading(true);
        setError(false);
        fetch(API_URL_PUBLIC) 
            .then((response) => {
                if(!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`); 
                }
                return response.json()
            })             
            .then((result) => setGists(result))
            .catch((err) => {
                setError(true);
                console.log(err);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => { 
        requestGists();
        }, []
    );

    if(loading) { 
        return (
            <>
                <h1>API</h1>
                <CircularProgress/>
            </>
        ); 
    }

    if (error) { 
        return ( 
        <> 
            <h3>Error</h3> 
            <button onClick={requestGists}>Retry</button> 
        </> 
        ); 
    }

    return (
        <>
            <h1>API</h1>
            <ul className="apiList">{gists.map(renderGist)}</ul>
        </>  
    )
}