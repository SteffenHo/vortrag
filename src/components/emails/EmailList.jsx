/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import PropTypes from 'prop-types';

class EmailList extends React.Component {
    render() {
        const { addresses } = this.props;
        return (
            <div>
                { addresses.map(item => <div>{item}</div>) }
            </div>
        );
    }
}
EmailList.propTypes = {
    addresses: PropTypes.array,
};

EmailList.defaultProps = {
    addresses: [],
};
export default EmailList;
