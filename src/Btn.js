import React from "react";
function Handleclick()
{
}
function Btn(props)
{
    return(<button onClick={Handleclick}>{props.name}</button>);
}
export default Btn;