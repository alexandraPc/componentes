import React from "react";
export default class  Finish extends React.Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return <h1 className="colores">Lenguajes de programación: {this.props.info}</h1>
    }
}