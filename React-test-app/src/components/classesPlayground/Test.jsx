import React from 'react';
import ElementClass from './ElementClass';

class Test extends React.Component {
    constructor(props) {
        super(props);
        console.log('tested:','constructos');
    }

    render() {
        return <li>{this.props.text}</li>
    }
}

const List = (props) => {
    const {
        values,
    } = props;
    return (
            <ul>
                {values.map((value, index) => <ElementClass key={index} value={value}/>)}
            </ul>    
        )
};

export default Test;
