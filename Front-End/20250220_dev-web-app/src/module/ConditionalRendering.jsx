import React from 'react'

function ConditionalRendering(){
    const isLoggedIn=false;
    return (
        <div>
            <h1>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</h1>
        </div>
    );
}
export default ConditionalRendering