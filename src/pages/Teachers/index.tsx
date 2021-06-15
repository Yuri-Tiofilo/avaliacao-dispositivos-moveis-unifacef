import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { List } from 'react-native-paper';

// import { Container } from './styles';

const Teachers: React.FC = () => {
  const [teachersData, setTeachersData] = useState<any>([]);

  const listTeachers = async (): Promise<void> => {
    const response = await fetch(
      'https://sistemaagely.com.br:8345/Unifacef/Professor',
    ).then((re) => re.json());
    setTeachersData(response);
  };

  useEffect(() => {
    listTeachers();
  }, []);

  return (
    <ScrollView>
      {teachersData.length !== 0 ? (
        <List.Section>
          {teachersData.map((element, index) => (
            <View key={index}>
              <List.Item
                title={element}
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

export default Teachers;
