import React from "react";

import Modal from "../../UI/Modal/Modal";
import Aux from '../Auxilary/Auxilary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null
        };

        errorConfirmHandler = () => {
            this.setState({error: null});
        };

        componentWillMount() {
            this.resInterceptor = axios.interceptors.response.use(null, err => {
                this.setState({error: err})
            });
        }

        componentWillUnmount() {
            axios.interceptors.response.eject(this.resInterceptor);
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                           clicked={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorHandler;
