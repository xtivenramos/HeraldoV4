import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Logged from './Logged'
import UnLogged from './UnLogged'
class Header extends Component{

    constructor(props){
        super(props)
        console.log('prrrrroooooops')
        console.log(props)
        this.state = {
            isLogged: false,
            nombre: ''
        }

        this.handleLogout = this.handleLogout.bind(this)
    }

    async componentDidMount()
    {
        if(localStorage.getItem('token') != null){
            try {
                let config = {
                    method: 'POST',
                    headers: {
                        'Authorization': "Bearer "+localStorage.getItem('token'),
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
                
                let res = await fetch('/api/validateLogin', config)
                let data = await res.json();
                switch (data.code) {
                    case 200:
                        this.setState([
                            this.state.isLogged = true,
                            this.state.nombre = data.data
                            
                        ])
                        break;
                    default:
                        this.setState([
                            this.state.isLogged = false,
                            this.state.nombre = ''
                        ])
                        console.log(data)
                        console.log(data.message)
                        break;
                }
            } catch (error) {
                console.log("ERROR}}}}")
                console.log(error)
            }
        }
    }

    handleLogout(){
        if(localStorage.getItem('token') != null)
        {
            localStorage.removeItem('token')
            this.setState([
                this.state.isLogged = false,
                this.state.nombre = ''
            ])
        }
    }

    showLogin(){
        if (this.state.isLogged)
        {
            return (<Logged nombre={this.state.nombre} onLogout={this.handleLogout}/>)
        }else{
            return (<UnLogged/>)
        }
    }


    render(){
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Heraldo
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
    
                        </ul>
                        {this.showLogin()}
                    </div>
                </div>
            </nav>
        )
    }
};

export default Header;

if(document.getElementById('header'))
{
    ReactDOM.render(
        <Header />,
        document.getElementById('header')
    );
}