import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/Feather";
import Home from './Home';
import Services from './Services';
import Settings from './Settings';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon: ({focused, size, color}) =>{
            let iconName;
            if(route.name === "Home"){
                iconName = "home";
                size = focused ? 27 :22
            }
            else if(route.name === "Services"){
                iconName = "git-pull-request";
                size = focused ? 27 :22
            }
            else if(route.name === "Settings"){
                iconName = "tool";
                size = focused ? 27 :22
            }
            else if(route.name === "Profile"){
                iconName = "user";
                size = focused ? 27 :22
            }
            else{}
            return(
                <Icons 
                    name = {iconName}
                    size = {size}
                    color= {color}
                />
            )
        }
        })}
        tabBarOptions = {{
            activeTintColor : "#f4be3f",
            inactiveTintColor: "#222222",
            labelStyle: {
                fontSize: 13,
                fontFamily: "PTSans-Regular",
            },
            tabBarStyle: [
                {display: "flex"},null
            ]
        }}
        >
            
        <Tab.Screen 
         options={{header: () => null}}
         name="Home"
         component={Home}
        />
        <Tab.Screen 
         options={{header: () => null}}
         name="Services"
         component={Services}
        />
        <Tab.Screen 
         options={{header: () => null}}
         name="Settings"
         component={Settings}
        />
        <Tab.Screen 
         options={{header: () => null}}
         name="Profile"
         component={Profile}
        />
    </Tab.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});
