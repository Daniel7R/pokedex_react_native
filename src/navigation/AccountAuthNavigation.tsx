import React from 'react'

import { useAuthentication } from '../utils/hooks/useAuthentication';
import AccountNavigation from './AccountNavigation';
import AuthStack from '../Stacks/AuthStack';

const AccountAuthNavigation = () => {

    const { user } = useAuthentication();
    return user ? <AccountNavigation /> : <AuthStack />
}

export { AccountAuthNavigation }