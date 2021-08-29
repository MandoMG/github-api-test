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
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CommitListComponent from './src/components/CommitList';
import useAxios from './src/hooks/useAxios';

const App = () => {
  const { commitList } = useAxios();

  return (
    <>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerText} testID="app-header">Commits</Text>
          <Text style={styles.subHeaderText} testID="app-header">MandoMG / github-api-test</Text>
        </View>
        <View style={styles.commitListWrapper}>
          <CommitListComponent commitItemList={commitList} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 20
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  subHeaderText: {
    fontSize: 18
  },
  commitListWrapper: {
    marginHorizontal: 20,
    marginBottom: 120,
    marginTop: 18
  }
});

export default App;
