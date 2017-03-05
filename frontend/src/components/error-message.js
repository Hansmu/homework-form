import React from 'react';

const ErrorMessage = ({message}) => {
    const errors = document.getElementsByClassName("errorMessage");
    if (errors.length > 0) {
        errors[0].scrollIntoView();
    }

    return (
        <span className="errorMessage" style={{color: 'red'}}>
            {message}
        </span>
    );
};

export default ErrorMessage;
