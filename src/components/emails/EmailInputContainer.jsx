import { connect } from 'react-redux';
import { addAddress } from '../../store/email/action';
import EmailInput from './EmailInput';

const mapStateToProps = state => ({
    // Data
});

const mapDispatchToProps = dispatch => ({
    add: email => dispatch(addAddress(email)),
});

const EmailInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EmailInput);

export default EmailInputContainer;
