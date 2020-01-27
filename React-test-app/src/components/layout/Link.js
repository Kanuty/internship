import React from 'react';

const Link = () => {
    let attr = {
        href: 'http://example.org',
        target: '_blank',
        className: 'isEnabled',
    };

    return (
        <a {...attr}>Witaj</a>
    );
};

export default Link