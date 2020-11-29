import * as React from 'react';
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather'

import Home from './pages/Home/index'
import Discover from './pages/Discover/index'
import Live from './pages/Live/index'

const Tab = createBottomTabNavigator();

export const Routes = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator 
                initialRouteName={"Home"}
                    
                    tabBarOptions={{
                        inactiveTintColor: "#fff",
                        activeBackgroundColor: "#03045e",
                        activeTintColor: "#0096c7",
                        tabStyle: {
                            alignItems: "flex-start",
                            justifyContent: "flex-start"
                        },
                        labelStyle: {
                            fontSize: 19,
                            alignItems: "center",
                            fontFamily: "PlayfairDisplay_900Black",
                            letterSpacing: -1,
                            paddingHorizontal: 10,
                        },
                        style: {
                            backgroundColor: "#002855",
                        }
                    }}
                >
                    <Tab.Screen 
                        name="Home" 
                        component={Home} 
                    />
                    <Tab.Screen 
                        name="Discover"
                        component={Discover} 
                    />
                    <Tab.Screen 
                        name="Live" 
                        component={Live} 
                    />
                    <Tab.Screen 
                        name="Button" 
                        options={{ tabBarButton: () => (
                            <ButtonModalNav>
                                <Icon name="menu" size={33}/>
                            </ButtonModalNav>
                        )}} 
                        component={Discover} 
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}

const ButtonModalNav = styled.TouchableOpacity`
    right: 20px;
    bottom: 20px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background: #ffd500;
`