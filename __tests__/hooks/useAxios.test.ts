import 'react-native';
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import { renderHook } from '@testing-library/react-hooks';
import useAxios from '../../src/hooks/useAxios';
import MockCommitData from '../../__mocks__/MockCommitData';
import { act } from 'react-test-renderer';
import { waitForElementToBeRemoved } from '@testing-library/react-native';

const mockAdapter = new MockAdapter(axios);

const createCommitList = () => ([{
  author: MockCommitData.commit.author.name,
  avatarUrl: MockCommitData.author.avatar_url,
  hash: MockCommitData.sha,
  message: MockCommitData.commit.message
}]);

describe('useAxios', () => {
  it('should render hook', async () => {
    mockAdapter.onGet('https://api.github.com/repos/mandomg/actions-test/commits').reply(
      200, [MockCommitData]
    )
    const { result, waitForValueToChange } = renderHook(() => useAxios())
    await waitForValueToChange(() => result.current.commitList);

    expect(result.current).toBeDefined();
    expect(result.error).not.toBeDefined();
    expect(result.current.commitList).toBeDefined();
    expect(result.current.commitList).toEqual(createCommitList());
  });
});