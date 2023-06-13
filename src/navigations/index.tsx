import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Navigations } from './navigations';

export const Routes = () => {
    return (
        <NavigationContainer>
            <Navigations />
        </NavigationContainer>
    );
}
