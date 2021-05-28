import React from 'react'

const Alert = ({error, onClose}) => (
    <div className="alert alert-danger alert-dismissible" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClose}><span aria-hidden="true">&times;</span></button>
        😓 {error} 😒
    </div>
)

export default Alert