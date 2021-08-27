import { FlatList, Text, View } from 'react-native';
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
        <View>
          <Text style={{ color: 'white' }}>{item.author}</Text>
          <Text style={{ color: 'white' }}>{item.hash}</Text>
          <Text style={{ color: 'white' }}>{item.message}</Text>
        </View>
      )}
    />
  )
}

export default CommitListComponent;
