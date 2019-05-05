/* eslint-disable react/prefer-stateless-function,object-shorthand */
import * as React from 'react';
import PropTypes from 'prop-types';

class EmailInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: ''};
    }

    setEmail = (event) => { this.setState({ email: event.target.value }); };

    addEmail = () => {
        const { add } = this.props;
        const { email } = this.state;

        add(email);
        this.setState({ email: '' });
    };

    render() {
        const { email } = this.state;
        return (
            <div>
                <input onChange={this.setEmail} />
                <button type="button" onClick={this.addEmail}>Save</button>
                <p>{ `Do you want to save this E-Mail address: ${email} ?`}</p>
            </div>
        );
    }
}

EmailInput.propTypes = {
    add: PropTypes.func.isRequired,
};

export default EmailInput;
