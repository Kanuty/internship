import React from 'react';
import PropTypes from 'prop-types';
import ElementClass from './ElementClass';

const List = (props) => {
    const {
        values,
    } = props;
    // Dlaczego przy const values = props wyskakuje error? Dlaczego akurat taki zapis jest konieczny?

    return (
        <ul>
            {/*values.map(value => <ElementClass value={value}/>)*/}
            {/*values.map(value => <ElementClass key={value} value={value}/>)*/}
            {values.map((value, index) => <ElementClass key={index} value={value}/>)}
        </ul>
    );
};

List.propTypes = {
    values: PropTypes.array.isRequired,
};

export default List;