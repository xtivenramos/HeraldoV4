import React from 'react';

const FormRegistro = ({registro, onChange}) => (
        <form>
            <div className="form-group row">
                <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Nombre Completo</label>
                
                <div className="col-md-6">
                    <input 
                    className="form-control" 
                    id="nombre" 
                    type="text" 
                    name="nombre" 
                    value={registro.nombre} 
                    onChange={onChange} 
                    />

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


