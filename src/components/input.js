import React from "react";

import '../styles/_input.scss';

const Input = ({ handleResearch }) =>{
    return (
        <input 
            className="research"
            placeholder="Pesquisar contato"
            onChange={(e)=>{
                console.log(e.target.value)
                handleResearch(e.target.value)
            }}
        />
    )
}

export default Input;