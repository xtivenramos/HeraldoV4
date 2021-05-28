import React, { Component } from 'react'

export default class Index extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            noticias: [],
            message: ''
        }
    }

    render(){
        return (
            <h1>Hola</h1>
        )
    }
}
