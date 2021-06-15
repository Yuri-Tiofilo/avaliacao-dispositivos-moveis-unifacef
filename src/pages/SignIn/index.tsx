import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const SignIn: React.FC = () => {
  const navigate = useNavigation();
  return (
    <View style={{ padding: 10 }}>
      <View style={{ paddingTop: 10 }}>
        <Button mode="contained" onPress={() => navigate.navigate('Teachers')}>
          Professores
        </Button>
      </View>
      <View style={{ paddingTop: 10 }}>
        <Button mode="contained" onPress={() => navigate.navigate('Students')}>
          Alunos
        </Button>
      </View>
      <View style={{ paddingTop: 10 }}>
        <Button mode="contained" onPress={() => navigate.navigate('Courses')}>
          Cursos
        </Button>
      </View>
    </View>
  );
};

export default SignIn;
