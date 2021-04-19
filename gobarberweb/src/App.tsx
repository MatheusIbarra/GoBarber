import React from 'react';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';


// import { Container } from './styles';

const App: React.FC = () => {

    const signIn = () => {

    }

    return (
        <>
           <AuthProvider>
                <SignIn/>
           </AuthProvider>

            <GlobalStyle/>
        </>

    );
}

export default App;