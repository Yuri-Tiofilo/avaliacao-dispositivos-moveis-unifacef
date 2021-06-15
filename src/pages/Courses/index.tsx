import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { List } from 'react-native-paper';

// import { Container } from './styles';

const Courses: React.FC = () => {
  const [coursesData, setCoursesData] = useState<any>([]);

  const listCourses = async (): Promise<void> => {
    const response = await fetch(
      'https://sistemaagely.com.br:8345/Unifacef/Curso',
    ).then((re) => re.json());
    setCoursesData(response);
  };

  useEffect(() => {
    listCourses();
  }, []);

  return (
    <ScrollView>
      {coursesData.length !== 0 ? (
        <List.Section>
          {coursesData.map((element, index) => (
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

export default Courses;
