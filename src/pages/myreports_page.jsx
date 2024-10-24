import React from 'react';
import LoginSignup from '../components/loginsignup';


export const MyReportsPage = ({isLoged, setisLoged}) =>{
    return (
        <>
            {isLoged ?
            <div></div>
            :
            <LoginSignup isLoged={isLoged} setisLoged={setisLoged}/>}
        </>
    );
};

export default MyReportsPage;