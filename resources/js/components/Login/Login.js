import React, { Component } from 'react';
import FormLogin from './FormLogin'
import ReactDOM from 'react-dom';
import Alert from '../Alert';

export default class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            login: {
                usuario: '',
                password: ''
            },
            error: ''
        }

        this.handleChanges = this.handleChange.bind(this)
        this.handleSubmits = this.handleSubmit.bind(this)
        this.handleDeleteAlert = this.deleteAlert.bind(this)
    }

    handleChange(e)
    {
        this.setState([
            this.state.login = {
                ...this.state.login,
                [e.target.name]: e.target.value
            }
        ])
    }

    async handleSubmit(e){
        e.preventDefault();

        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.login)
            }
            
            let res = await fetch('/api/login', config);
            let data = await res.json();
            switch (data.code) {
                case 200:
                    if (localStorage.getItem('token') == null)
                    {
                        localStorage.setItem('token', data.data);
                    }
                    
                    window.location = '/'
                    break;
                default:
                    this.setState([
                        this.state.error = data.message
                    ])
                    console.log(data.message)
                    break;
            }
        } catch (error) {
            //
            console.log(error)
        }
    }

    componentDidMount(){

    }

    showAlert()
    {
        if (this.state.error != '')
        {
            return (<Alert error={this.state.error} onClose={this.handleDeleteAlert}/>)
        }
    }

    deleteAlert()
    {
        this.setState([
            this.state.error = ''
        ])
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Logeo</div>
                            <br/>
                                {this.showAlert()}
                            <br/>
                            <div className="card-body">
                                <FormLogin datos={this.state.login} onChange={this.handleChanges} onSubmit={this.handleSubmits}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

if(document.getElementById('login'))
{
    ReactDOM.render(
        <Login />,
        document.getElementById('login')
    );
}