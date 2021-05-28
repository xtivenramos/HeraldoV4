import React from 'react';

const FormLogin = ({datos, onChange, onSubmit}) => (
    <form onSubmit={onSubmit}>
        <div className="form-group row">
            <label htmlFor="usuario" className="col-md-4 col-form-label text-md-right">UserName</label>

            <div className="col-md-6">
                <input 
                id="usuario" 
                type="text" 
                className="form-control" 
                name="usuario" 
                value={datos.username} 
                onChange={onChange}
                required 
                autoComplete="usuario" 
                autoFocus/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Contraseña</label>

            <div className="col-md-6">
                <input 
                id="password" 
                type="password" 
                className="form-control" 
                name="password" 
                required 
                autoComplete="current-password"
                value={datos.password} 
                onChange={onChange}
                />
            </div>
        </div>

        <div className="col">
            <div className="form-group row mb-0">
                <div className="col-md-8 offset-md-4">
                    <button type="submit" className="btn btn-primary">
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    </form>
)

export default FormLogin