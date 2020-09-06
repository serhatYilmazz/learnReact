import React from "react";
import Aux from '../../hoc/Auxilary/Auxilary';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';

class Modal extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('Will Update Modal');
    }

    render() {
        const showStyle = {
            'transform': this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            'opacity': this.props.show ? '1' : '0'
        };
        return (
            <Aux>
                <div style={showStyle} className={classes.Modal}>
                    {this.props.children}
                </div>
                <Backdrop clicked={this.props.clicked} show={this.props.show}/>
            </Aux>
        );
    }
}

export default Modal;
