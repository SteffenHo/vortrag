import React from 'react';

import './App.css';
import EmailListContainer from './components/emails/EmailListContainer';
import EmailInputContainer from './components/emails/EmailInputContainer';

const App = () => (
    <div className="App">
        <h1>E-Mails</h1>
        <EmailInputContainer />
        <EmailListContainer />
    </div>
);

export default App;
