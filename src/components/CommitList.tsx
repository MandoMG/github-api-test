import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { CommitItem } from '../types/commitDataTypes';

interface CommitListProps {
  commitItemList: CommitItem[];
};

const CommitListComponent = ({ commitItemList }: CommitListProps) => {
  return (
    <FlatList
      data={commitItemList}
      keyExtractor={item => item.hash}
      renderItem={({ item }) => (
        <View style={styles.cardWrapper}>
          <View style={styles.cardHeaderWrapper}>
            <Image source={{ uri: item.avatarUrl }} style={styles.headerImage} />
            <Text style={styles.headerText}>{item.author}</Text>
          </View>
          <View style={styles.cardBodyWrapper}>
            <Text>{item.message}</Text>
            <Text>{item.hash}</Text>
          </View>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10
  },
  cardHeaderWrapper: {
    alignItems: 'center',
    backgroundColor: '#AAAAAA',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  headerImage: {
    borderRadius: 10,
    height: 22,
    width: 22
  },
  headerText: {
    fontWeight: 'bold',
    paddingLeft: 8
  },
  cardBodyWrapper: {
    padding: 8
  }
});

export default CommitListComponent;
