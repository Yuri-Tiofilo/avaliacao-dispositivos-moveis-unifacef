import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import Courses from '../pages/Courses';
import Teachers from '../pages/Teachers';
import Students from '../pages/Students';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator screenOptions={{}} initialRouteName="SignIn">
    <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{ headerTitle: 'Home' }}
    />
    <Auth.Screen
      name="Courses"
      options={{ headerTitle: 'Cursos' }}
      component={Courses}
    />
    <Auth.Screen
      name="Teachers"
      options={{ headerTitle: 'Professores' }}
      component={Teachers}
    />
    <Auth.Screen
      name="Students"
      options={{ headerTitle: 'Alunos' }}
      component={Students}
    />
  </Auth.Navigator>
);
export default AuthRoutes;
