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
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CommitListComponent from './src/components/CommitList';
import useAxios from './src/hooks/useAxios';

const App = () => {
  const { commitList } = useAxios();

  return (
    <SafeAreaView>
      <View>
        <CommitListComponent commitItemList={commitList} />
      </View>
    </SafeAreaView>
  );
}

export default App;
