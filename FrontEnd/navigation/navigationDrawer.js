// import React from 'react';
// import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {DrawerContent} from '../Components/DrawerContent';
// import TopHeadingBar from '../Components/TopHeadingBar';

// import {
//   HomeScreen,
//   HelpScreen,
//   SettingsScreen,
//   QuestionAnswerScreen,
//   AboutUsScreen,
// } from '../screens';

// const Drawer = createDrawerNavigator();

// const Drawers = () => {
//   return (
//     <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
//       <Drawer.Screen name="TopHeadingBar" component={TopHeadingBar} />
//       <Drawer.Screen name="HomeScreen" component={HomeScreen} />
//       <Drawer.Screen name="HelpScreen" component={HelpScreen} />
//       <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
//       <Drawer.Screen name="AboutUsScreen" component={AboutUsScreen} />
//       <Drawer.Screen
//         name="QuestionAnswerScreen"
//         component={QuestionAnswerScreen}
//       />
//       <Drawer.Screen name="Homescreen" component={HomeScreen} />
//     </Drawer.Navigator>
//   );
// };

// export default Drawers;

import React from 'react';
import {
  HomeScreen,
  HelpScreen,
  SettingsScreen,
  QuestionAnswerScreen,
  AboutUsScreen,
  Privacypolicy,
  TermsScreen
} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import {color} from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';

const root = ({navigation}) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'HomeScreen'}>
      <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Help',
          headerTitleStyle: {
            color: '#264CAD',
          },
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5}}>
              <Icon
                name="arrow-back"
                size={36}
                color="#264CAD"
                backgroundColor="#fff"
                onPress={() => navigation.goBack()}>
              </Icon>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#fff', //Set Header color
          },
          headerTintColor: '#264CAD', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerTitleAlign: 'center',
          title: 'Home',
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5}}>
              <Icon
                name="arrow-back"
                size={36}
                color="#264CAD"
                backgroundColor="#fff"
                onPress={() => navigation.goBack()}>
              </Icon>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Settings',
          headerTitleStyle: {
            color: '#264CAD',
          },
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5}}>
              <Icon
                name="arrow-back"
                size={36}
                color="#264CAD"
                backgroundColor="#fff"
                onPress={() => navigation.goBack()}>
              </Icon>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="QuestionAnswerScreen"
        component={QuestionAnswerScreen}
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          title: "UAsk",
          headerBackTitleVisible: 'false',
          headerTitleStyle: {
            color: '#264CAD',
          },
          headerRight: () => (
            <Icon style={{marginRight: 10}} name="md-eye" size={30} color="#264CAD" />
          ),
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5}}>
              <Icon
                name="arrow-back"
                size={36}
                color="#264CAD"
                backgroundColor="#fff"
                onPress={() => navigation.goBack()}>
              </Icon>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'About Us',
          headerTitleStyle: {
            color: '#264CAD',
          },
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5}}>
              <Icon
                name="arrow-back"
                size={36}
                color="#264CAD"
                backgroundColor="#fff"
                onPress={() => navigation.goBack()}>
              </Icon>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Privacypolicy"
        component={Privacypolicy}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'PrivacyPolicy',
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5}}>
              <Icon
                name="arrow-back"
                size={36}
                color="#264CAD"
                backgroundColor="#fff"
                onPress={() => navigation.goBack()}>
              </Icon>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="TermsScreen"
        component={TermsScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Terms',
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5}}>
              <Icon
                name="arrow-back"
                size={36}
                color="#264CAD"
                backgroundColor="#fff"
                onPress={() => navigation.goBack()}>
              </Icon>
            </TouchableOpacity>
          ),
        }}
      />

    </Stack.Navigator>
  );
};
export default root;
