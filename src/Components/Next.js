import React from "react";
export default class  Next extends React.Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return <h1 className="colores">Carrera: {this.props.carrera}</h1>
    }
}