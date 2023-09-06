import React from "react";

function MyButtom() {
    return(
    <button>
        I am a button
    </button>
    );
}

export default function MyApp(){
    return(
        <div>
            <h1>Welcome to my app</h1>
            <MyButtom/>
        </div>
    )
}