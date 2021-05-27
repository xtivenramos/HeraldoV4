import React from 'react';
import ReactDOM from 'react-dom';

export default function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                        <div className="card-body">
                            <button type="button" onClick={() => {console.log("prueba")}} className="btn">Oprimir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
