import React, {useState} from 'react';
import Button from './Button';
import Link from './Link';
import classNames from 'classnames';

const Navbar = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const changeClass = () => setIsEnabled(!isEnabled);

    let classValue = classNames({
        'isActive': isEnabled,
        'isEnabled': !isEnabled,
    });

    return (
        <nav>
            <div className={classValue}/>
            <Button handleClick={changeClass}/>
            <Link/>
        </nav>
    );
};

export default Navbar;