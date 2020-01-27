import React, {useState, Fragment} from 'react';
import List from './List';
import Button from '../layout/Button';
import Test from './Test';

const ChangeProps = () => {
    const [values, changeValues] = useState([1,2,3]);

    const handleClickChangeProps = () => changeValues([1,4,5,6]);
    // const handleClickChangeProps = () => changeValues([4, 3]);
   
    return (
        <Fragment>
            <h3>Class Playground</h3>
            <Button handleClick={handleClickChangeProps}/>
            <Test values={values}/>
            <List values={values}/>
        </Fragment>
    );
};

export default ChangeProps;