import React from "react";

const DisplayComponent = ({id,content}) => {
    return (
        <div id={id}>
        {content}
        </div>
    )
}

export default DisplayComponent;