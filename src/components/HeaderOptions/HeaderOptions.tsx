import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React from 'react';

import { CustomIcon } from '../CustomIcon';
import { colors } from '../../utils/colors';
import { styles } from '../../utils/styles';
import { screens } from '../../utils/screens';
import { images } from '../../utils/images';

interface HeaderOptionsProps {
    navigation: any;
    iconLeft: string;
    isPostScreen: boolean;
};

export const HeaderOptions = ({ navigation, iconLeft, isPostScreen }: HeaderOptionsProps) => (
    <View
        style={[
            styles.flexCenter,
            {
                alignItems: 'center',
                backgroundColor: colors.WHITE,
                elevation: 4,
                paddingVertical: 7,
            },
        ]}>
        <View style={{ paddingLeft: 10 }}>
            {isPostScreen ? (
                <TouchableOpacity onPress={() => navigation.navigate(screens.HOME)}>
                    <CustomIcon name={iconLeft} size={34} color={colors.BLACK} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => navigation.navigate(screens.PROFILE)}>
                    <Image
                        source={images.PROFILE_PICTURE}
                        style={{ borderRadius: 50, height: 35, width: 35 }}
                    />
                </TouchableOpacity>
            )}
        </View>

        {isPostScreen ? (
            <Text
                style={{
                    width: 240,
                    marginHorizontal: 16,
                    fontSize: 19,
                    color: colors.BLACK,
                    fontWeight: 'bold',
                }}>
                Share Post
            </Text>
        ) : (
            <TextInput
                placeholder="Search"
                placeholderTextColor={colors.BLACK}
                style={{
                    marginHorizontal: 20,
                    width: 240,
                    height: 34,
                    backgroundColor: colors.BLUE1,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    color: colors.BLACK,
                }}
            />
        )}

        <TouchableOpacity style={{ marginRight: 19 }}>
            {isPostScreen ? (
                <Text style={{ color: colors.GRAY, fontSize: 16, fontWeight: 'bold' }}>
                    Post
                </Text>
            ) : (
                <CustomIcon
                    size={28}
                    color={colors.GRAY}
                    name="chatbubble-ellipses-outline"
                />
            )}
        </TouchableOpacity>
    </View>
);
