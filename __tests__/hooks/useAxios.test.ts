import 'react-native';
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import { renderHook } from '@testing-library/react-hooks';
import useAxios from '../../src/hooks/useAxios';
import MockCommitData from '../../__mocks__/MockCommitData';
import { Alert } from 'react-native';
import { act } from 'react-test-renderer';

const mockAdapter = new MockAdapter(axios);

const createCommitList = () => ([{
  author: MockCommitData.commit.author.name,
  avatarUrl: MockCommitData.author.avatar_url,
  hash: MockCommitData.sha,
  message: MockCommitData.commit.message
}]);

describe('useAxios', () => {
  it('should render hook', async () => {
    // setup
    mockAdapter.onGet('https://api.github.com/repos/mandomg/github-api-test/commits').reply(
      200, [MockCommitData]
    )
    const { result, waitForValueToChange } = renderHook(() => useAxios())
    await waitForValueToChange(() => result.current.commitList);

    // post-conditions
    expect(result.current).toBeDefined();
    expect(result.error).not.toBeDefined();
    expect(result.current.commitList).toBeDefined();
    expect(result.current.commitList).toEqual(createCommitList());
  });

  it('should render hook - with error', async () => {
    // setup
    mockAdapter.onGet('https://api.github.com/repos/mandomg/github-api-test/commits').networkError()
    const alertSpy = jest.spyOn(Alert, 'alert');
    const mockOkButton = { text: 'Ok' };
    const { result, waitFor } = renderHook(() => useAxios())

    // pre-conditions
    expect(result.current).toBeDefined();
    expect(result.error).not.toBeDefined();
    expect(alertSpy).not.toHaveBeenCalled();

    // exercise
    await waitFor(() => !!alertSpy.mock.calls.length)

    // post-conditions
    expect(alertSpy).toHaveBeenCalledWith('Error', 'Could not reach the repo', [mockOkButton]);
  });
});