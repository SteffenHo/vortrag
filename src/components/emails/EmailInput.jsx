/* eslint-disable react/prefer-stateless-function,object-shorthand */
import * as React from 'react';
import EmailList from "./EmailList";

class EmailInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', addresses: [] };
    }

    setEmail = (event) => { this.setState({ email: event.target.value }); };

    addEmail = () => {
        const { email, addresses } = this.state;
        addresses.push(email);
        this.setState({ addresses: addresses, email: '' });
    };

    render() {
        const { email, addresses } = this.state;
        return (
            <div>
                <input onChange={this.setEmail} />
                <button type="button" onClick={this.addEmail}>Save</button>
                <p>{ `Do you want to save this E-Mail address: ${email} ?`}</p>
                <EmailList addresses={addresses} />
            </div>
        );
    }
}

export default EmailInput;
