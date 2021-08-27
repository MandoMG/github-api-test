/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import useAxios from './src/hooks/useAxios';

const App = () => {
  const { commitList } = useAxios();

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={commitList}
          keyExtractor={item => item.hash}
          renderItem={({ item }) => (
            <View>
              <Text style={{ color: 'white' }}>{item.author}</Text>
              <Text style={{ color: 'white' }}>{item.hash}</Text>
              <Text style={{ color: 'white' }}>{item.message}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
