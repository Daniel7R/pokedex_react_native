import React from 'react'

import { useAuthentication } from '../utils/hooks/useAuthentication';
import { FavoritesNavigation } from './FavoritesNavigation';
import AuthStack from '../Stacks/AuthStack';


const FavoritesAuthNavigation = () => {
    const { user } = useAuthentication();
    return user ? <FavoritesNavigation /> : <AuthStack />
}
export { FavoritesAuthNavigation }