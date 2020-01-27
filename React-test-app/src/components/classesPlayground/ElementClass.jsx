import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ElementClass extends Component {
    // https://pl.reactjs.org/docs/react-component.html
    constructor(props) {
        super(props);
        console.log(`${this.props.value} constructor (*)`);

        this.state = {
            dot: true,
        };

        this.handleClickChangeShowDot = this.handleClickChangeShowDot.bind(this);
    }

    componentDidMount() {
        console.log(`${this.props.value} componentDidMount (*)`);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`${this.props.value} componentDidUpdate: `, prevProps, prevState, snapshot);
    }

    componentWillUnmount() {
        console.log(`${this.props.value} componentWillUnmount (*)`);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`${this.props.value} shouldComponentUpdate (*): `, nextProps, nextState);
        return true;
        // tutaj warto też poczytać o PureComponent
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`${props.value} getDerivedStateFromProps: `, props, state);
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`${this.props.value} getSnapshotBeforeUpdate: `, prevProps, prevState);
        return null;
    }

    static getDerivedStateFromError(error) {
        console.log(`${this.props.value} getDerivedStateFromError: `, error);
    }

    componentDidCatch(error, info) {
        console.log(`${this.props.value} componentDidCatch: `, error, info);
    }

    // https://typeofweb.com/nowe-metody-cyklu-zycia-getderivedstatefromprops-i-getsnapshotbeforeupdate/
    UNSAFE_componentWillMount() {
        console.log(`${this.props.value} UNSAFE_componentWillMount`);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(`${this.props.value} UNSAFE_componentWillReceiveProps: `, nextProps);
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log(`${this.props.value} UNSAFE_componentWillUpdate: `, nextProps, nextState);
    }

    handleClickChangeShowDot = () => {
        this.setState({
            dot: !this.state.dot,
        })
    };

    render() {
        console.log(`${this.props.value} render (*)`);

        const {
            value,
        } = this.props;

        const {
            dot,
        } = this.state;

        return (
            <li onClick={this.handleClickChangeShowDot}>{value}{dot && '.'}</li>
        )
    }
}

ElementClass.propTypes = {
    value: PropTypes.number.isRequired,
};

export default ElementClass;