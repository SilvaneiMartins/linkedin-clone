import { StyleSheet } from 'react-native';

import { colors } from './colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
        marginBottom: 10,
        padding: 10,
        paddingBottom: 0,
    },
    flexCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
