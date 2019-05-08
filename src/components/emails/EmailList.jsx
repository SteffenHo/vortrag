/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

const EmailList = (props) => {
    const { addresses } = props;
    return (
        <div>
            { addresses.map(item => <div>{item}</div>) }
        </div>
    );
};
EmailList.propTypes = {
    addresses: PropTypes.instanceOf(List),
};

EmailList.defaultProps = {
    addresses: [],
};
export default EmailList;
