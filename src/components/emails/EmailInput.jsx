/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';

class EmailInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };
    }

    setEmail = (event) => { this.setState({ email: event.target.value }); }

    render() {
        const { email } = this.state;
        return (
            <div>
                <input onChange={this.setEmail}/>
                <button type="button">Save</button>
                <p>{ `Do you want to save this E-Mail address: ${email} ?`}</p>
            </div>
        );
    }
}

export default EmailInput;
