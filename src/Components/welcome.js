import React from "react";
import image from "./yo.png";
export default class  Welcome extends React.Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return <h1 className="colores">Hola {this.props.name} desde mi componente <p>{< img src ={image} id="foto"  width="200px" height="300px"/>}</p></h1>
    }
}
