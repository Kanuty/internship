import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {
        handleClick,
    } = props;

    return (
        <button onClick={handleClick}>
            do it
        </button>
    );
};

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default Button;