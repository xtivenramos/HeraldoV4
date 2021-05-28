import React from 'react';

const FormRegistro = ({registro, OnChange, onSubmit}) => (
        <form onSubmit={onSubmit}>
            <div className="form-group row">
                <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Nombre Completo</label>
                
                <div className="col-md-6">
                    <input 
                    className="form-control" 
                    id="nombre" 
                    type="text" 
                    name="nombre" 
                    value={registro.nombre} 
                    onChange={OnChange} 
                    />

                </div>
            </div>

            
            <div className="form-group row">
                <label htmlFor="email" className="col-md-4 col-form-label text-md-right">Correo</label>

                <div className="col-md-6">
                    <input 
                    id="email" 
                    type="email" 
                    className="form-control" 
                    name="correo" 
                    value={registro.correo}
                    onChange={OnChange}
                    required />

                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="telefono" className="col-md-4 col-form-label text-md-right">Telefono</label>

                <div className="col-md-6">
                    <input 
                    id="telefono" 
                    type="number" 
                    className="form-control" 
                    name="telefono" 
                    value={registro.telefono} 
                    onChange={OnChange}
                    required/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="direccion" className="col-md-4 col-form-label text-md-right">Direccion</label>

                <div className="col-md-6">
                    <input 
                    id="direccion" 
                    type="text" 
                    className="form-control" 
                    name="direccion" 
                    value={registro.direccion} 
                    onChange={OnChange}
                    required/>
                </div>
            </div>

            <hr />
            <div className="form-group row">
                <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Usuario</label>
                
                <div className="col-md-6">
                    <input 
                    className="form-control" 
                    id="usuario" 
                    type="text" 
                    name="usuario" 
                    value={registro.usuario} 
                    onChange={OnChange} 
                    />

                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Contraseña</label>

                <div className="col-md-6">
                    <input 
                    id="password" 
                    type="password" 
                    className="form-control" 
                    name="contraseña" 
                    value={registro.contraseña}
                    onChange={OnChange}
                    required/>

                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-right">Repetir Contraseña</label>

                <div className="col-md-6">
                    <input 
                    id="password-confirm" 
                    type="password" 
                    className="form-control" 
                    name="confirm_contraseña" 
                    defaultValue={registro.confirm_contraseña} 
                    onChange={OnChange}
                    required/>
                </div>
            </div>

            <div className="form-group row mb-0">
                <div className="col-md-6 offset-md-4">
                    <button type="submit" className="btn btn-primary">
                        Registrarse
                    </button>
                </div>
            </div>
        </form>
    
);

export default FormRegistro;


