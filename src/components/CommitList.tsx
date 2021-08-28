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
      renderItem={({ item, index }) => (
        <View style={styles.cardWrapper}>
          <View style={styles.cardHeaderWrapper}>
            <Image source={{ uri: item.avatarUrl }} style={styles.headerImage} testID={`commit-item-${index}-avatar-url`} />
            <Text style={styles.headerText} testID={`commit-item-${index}-header-text`} >{item.author}</Text>
          </View>
          <View style={styles.cardBodyWrapper}>
            <Text style={styles.commitMessageText} testID={`commit-item-${index}-message-text`} >{item.message}</Text>
            <Text style={styles.commitHashText} testID={`commit-item-${index}-hash-text`} >{item.hash}</Text>
          </View>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderColor: '#7A7a7a',
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 10
  },
  cardHeaderWrapper: {
    alignItems: 'center',
    backgroundColor: '#d4d4d4',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 8
  },
  commitMessageText: {
    fontSize: 14
  },
  commitHashText: {
    color: '#444444',
    paddingTop: 5,
    fontSize: 12
  },
  cardBodyWrapper: {
    padding: 8
  }
});

export default CommitListComponent;
