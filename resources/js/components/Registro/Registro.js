import React,  { Component } from 'react'
import ReactDOM from 'react-dom';
import Alert from '../Alert';
import FormRegistro from './FormRegistro';

export default class Registro extends Component {

	constructor(props){
		super(props);

		this.state = {
			registro: {
				nombre: '',
				usuario: '',
				correo: '',
				telefono: '',
				direccion: '',
				contraseña: '',
				confirm_contraseña: '',
			},
            error: '',
		};

		this.handleChanges = this.handleChange.bind(this);
		this.handleSubmits = this.handleSubmit.bind(this);
        this.handleDeleteAlert = this.deleteAlert.bind(this)
		
	}

	handleChange(e)
	{
        // console.log(e.target.value)
		this.setState([
            this.state.registro = {
                ...this.state.registro,
                [e.target.name]: e.target.value
            },
        ]);
	}

    async handleSubmit(e){
        e.preventDefault()
        console.log("sending...")
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.registro)
            }
            
            let res = await fetch('/api/register', config)
            let data = await res.json();

            switch (data.code) {
                case 200:
                    window.location = '/login'
                    break;
                case 400:
                    this.setState([
                        this.state.error = data.message
                    ])
                    break;
                case 500:
                    this.setState([
                        this.state.error = data.message
                    ])
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log("ERROR")
            console.log(error)
        }
    }

    componentDidMount() {
        
    }

    deleteAlert(){
        this.setState([
            this.state.error = ''
        ])
    }

    msgError()
    {
        if (this.state.error != '')
        {
            return (
                <Alert error={this.state.error} onClose={this.handleDeleteAlert}/>
            )
        }
    }

	render(){
		return (
			<div className="container">
                {this.msgError()}
			    <div className="row justify-content-center">
			        <div className="col-md-8">
			            <div className="card">
			                <div className="card-header">Registro</div>
			                <div className="card-body">
			                    <FormRegistro 
                                registro={this.state.registro} 
                                OnChange={this.handleChanges}
                                onSubmit={this.handleSubmits}
                                />
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}

if(document.getElementById('registro'))
{
    ReactDOM.render(
        <Registro />,
        document.getElementById('registro')
    );
}