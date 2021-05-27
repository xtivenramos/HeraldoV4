import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import FormRegistro from './FormRegistro'

export default function Index() {

    const registro = useState([
        nombre => 'Holaaa',
        correo => '',
        telefono => '',
        direccion => '',
        contraseña => '',
        confirm_contraseña => '',
    ])

    const handleChange = (e) => {
        registro
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Registro</div>
                        <div className="card-body">
                            <FormRegistro registro={registro} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
