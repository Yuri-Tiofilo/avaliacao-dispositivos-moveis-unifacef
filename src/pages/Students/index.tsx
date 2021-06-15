import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { List } from 'react-native-paper';

// import { Container } from './styles';

const Students: React.FC = () => {
  const [studentsData, setstudentsData] = useState<any>([]);

  const listTeachers = async (): Promise<void> => {
    const response = await fetch(
      'https://sistemaagely.com.br:8345/Unifacef/Aluno',
    ).then((re) => re.json());
    setstudentsData(response);
  };

  useEffect(() => {
    listTeachers();
  }, []);

  return (
    <ScrollView>
      {studentsData.length !== 0 ? (
        <List.Section>
          {studentsData.map((element) => (
            <View key={element.codigo}>
              <List.Item
                title={element.nome}
                description={element.curso}
                style={{ borderBottomWidth: 0.5 }}
                right={() => <List.Icon icon="account-circle" />}
              />
            </View>
          ))}
        </List.Section>
      ) : (
        <ActivityIndicator />
      )}
    </ScrollView>
  );
};

export default Students;
