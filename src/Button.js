import React from "react"; 
const Button = ({id,symbol,onClick}) => {
    return (
    <div id={id}>
        {symbol}
    </div>
    )
}

export default Button;