import React from 'react';
import { View, NativeBaseProvider } from 'native-base';

import { Routes } from './navigations';

export const MyApp = () => {
    return (
        <NativeBaseProvider>
            <View flex={1}>
                <Routes />
            </View>
        </NativeBaseProvider>
    )
}
