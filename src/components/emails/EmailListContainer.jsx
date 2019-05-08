import { connect } from 'react-redux';
import { getEmailAddresses } from '../../store/email/selector';
import EmailList from './EmailList';

const mapStateToProps = state => ({
    addresses: getEmailAddresses(state),
});

const mapDispatchToProps = dispatch => ({
    // function
});

const EmailListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EmailList);

export default EmailListContainer;
