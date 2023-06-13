import React from 'react';
import { StatusBar } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { Job } from '../screens/Job';
import { Post } from '../screens/Post';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { NetWork } from '../screens/NetWork';
import { Notification } from '../screens/Notification';

import { CustomIcon } from '../components/CustomIcon';
import { HeaderOptions } from '../components/HeaderOptions';

import { colors } from '../utils/colors';
import { screens } from '../utils/screens';


const Tab = createBottomTabNavigator();
const JobStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const PostStack = createNativeStackNavigator();
const NetworkStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();

const HomeScreen = () => (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name={screens.HOME} component={Home} />
        <HomeStack.Screen name={screens.PROFILE} component={Profile} />
    </HomeStack.Navigator>
);

const JobScreen = () => (
    <JobStack.Navigator screenOptions={{ headerShown: false }}>
        <JobStack.Screen name={screens.JOB} component={Job} />
    </JobStack.Navigator>
);

const PostScreen = () => (
    <PostStack.Navigator screenOptions={{ headerShown: false }}>
        <PostStack.Screen name={screens.POST} component={Post} />
    </PostStack.Navigator>
);

const NetworkScreen = () => (
    <NetworkStack.Navigator screenOptions={{ headerShown: false }}>
        <NetworkStack.Screen name={screens.NETWORK} component={NetWork} />
    </NetworkStack.Navigator>
);

const NotificationScreen = () => (
    <NotificationStack.Navigator screenOptions={{ headerShown: false }}>
        <NotificationStack.Screen
            name={screens.NOTIFICATION}
            component={Notification}
        />
    </NotificationStack.Navigator>
);

const showTabBar = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    return routeName == screens.PROFILE ? 'none' : 'flex';
};

const header = (
    navigation: any,
    route: any,
    icon: any,
    title: string,
    iconLeft = '',
    isPostScreen = false,
    isNotificationScreen = false,
) => ({
    title: title,
    tabBarStyle: { display: showTabBar(route) },
    tabBarBadge: isNotificationScreen ? 5 : null,
    tabBarIcon: ({ focused }: any) => (
        <CustomIcon
            name={icon}
            size={28}
            color={focused ? colors.BLACK : colors.GRAY}
        />
    ),
    header: () => (
        <HeaderOptions
            iconLeft={iconLeft}
            navigation={navigation}
            isPostScreen={isPostScreen}
        />
    ),
});

export const Navigations = () => {
    return (
        <>
            <StatusBar backgroundColor={colors.WHITE} barStyle="dark-content" />
            <Tab.Navigator
                screenOptions={
                    {
                        tabBarActiveTintColor: colors.BLACK,
                        tabBarInactiveTintColor: colors.GRAY,
                        tabBarLabelStyle: { fontWeight: 'bold' },
                        headerStyle: { elevation: 10 },
                    }
                }>
                <Tab.Screen
                    name={screens.HOME_STACK}
                    component={HomeScreen}
                    options={({ navigation, route }) =>
                        header(navigation, route, 'home', 'Home')
                    }
                />
                < Tab.Screen
                    name={screens.NETWORK_STACK}
                    component={NetworkScreen}
                    options={({ navigation, route }) =>
                        header(navigation, route, 'people', 'Network')
                    }
                />
                < Tab.Screen
                    name={screens.POST_STACK}
                    component={PostScreen}
                    options={({ navigation, route }) =>
                        header(navigation, route, 'add-circle', 'Post', 'close', true)
                    }
                />
                < Tab.Screen
                    name={screens.NOTIFICATION_STACK}
                    component={NotificationScreen}
                    options={({ navigation, route }) =>
                        header(
                            navigation,
                            route,
                            'notifications',
                            'Notifications',
                            '',
                            false,
                            true,
                        )
                    }
                />
                < Tab.Screen
                    name={screens.JOB_STACK}
                    component={JobScreen}
                    options={({ navigation, route }) =>
                        header(navigation, route, 'briefcase', 'Jobs')
                    }
                />
            </Tab.Navigator>
        </>
    );
}
