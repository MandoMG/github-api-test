import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';
import * as AxiosHook from '../src/hooks/useAxios';
import mockCommitListData from '../__mocks__/MockCommitListData';

jest.mock('../src/hooks/useAxios');
const mockAxiosHook = AxiosHook as jest.Mocked<typeof AxiosHook>;

describe('App', () => {
  it('renders component', () => {
    mockAxiosHook.default.mockImplementationOnce(() => ({
      commitList: mockCommitListData
    }))
    const wrapper = render(<App />);

    expect(wrapper.queryByTestId(`commit-item-0-avatar-url`)).not.toBeNull();
    expect(wrapper.queryByTestId(`commit-item-0-header-text`)).not.toBeNull();
    expect(wrapper.queryByTestId(`commit-item-0-message-text`)).not.toBeNull();
    expect(wrapper.queryByTestId(`commit-item-0-hash-text`)).not.toBeNull();

    expect(wrapper.queryByTestId(`commit-item-1-avatar-url`)).not.toBeNull();
    expect(wrapper.queryByTestId(`commit-item-1-header-text`)).not.toBeNull();
    expect(wrapper.queryByTestId(`commit-item-1-message-text`)).not.toBeNull();
    expect(wrapper.queryByTestId(`commit-item-1-hash-text`)).not.toBeNull();

    expect(wrapper.queryByTestId(`commit-item-2-avatar-url`)).not.toBeNull();
    expect(wrapper.queryByTestId(`commit-item-2-header-text`)).not.toBeNull();
    expect(wrapper.queryByTestId(`commit-item-2-message-text`)).not.toBeNull();
    expect(wrapper.queryByTestId(`commit-item-2-hash-text`)).not.toBeNull();
  });

  it('renders component - no data', () => {
    mockAxiosHook.default.mockImplementationOnce(() => ({
      commitList: []
    }))
    const wrapper = render(<App />);


    expect(wrapper.queryByTestId(`commit-item-0-avatar-url`)).toBeNull();
    expect(wrapper.queryByTestId(`commit-item-0-header-text`)).toBeNull();
    expect(wrapper.queryByTestId(`commit-item-0-message-text`)).toBeNull();
    expect(wrapper.queryByTestId(`commit-item-0-hash-text`)).toBeNull();

    expect(wrapper.queryByTestId(`commit-item-1-avatar-url`)).toBeNull();
    expect(wrapper.queryByTestId(`commit-item-1-header-text`)).toBeNull();
    expect(wrapper.queryByTestId(`commit-item-1-message-text`)).toBeNull();
    expect(wrapper.queryByTestId(`commit-item-1-hash-text`)).toBeNull();

    expect(wrapper.queryByTestId(`commit-item-2-avatar-url`)).toBeNull();
    expect(wrapper.queryByTestId(`commit-item-2-header-text`)).toBeNull();
    expect(wrapper.queryByTestId(`commit-item-2-message-text`)).toBeNull();
    expect(wrapper.queryByTestId(`commit-item-2-hash-text`)).toBeNull();
  });
})
