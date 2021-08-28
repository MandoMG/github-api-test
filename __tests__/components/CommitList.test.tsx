import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import CommitListComponent from '../../src/components/CommitList';

const mockData = [
  {
    author: 'Armando Meza',
    avatarUrl: 'https://someWebPage.com/assets/img/0110027/url0.jpg',
    hash: '135a456ef15cf4156',
    message: 'test commit #0'
  },
  {
    author: 'Armando Meza',
    avatarUrl: 'https://someWebPage.com/assets/img/0110027/url1.jpg',
    hash: 'ef15cf41135a45656',
    message: 'test commit #1'
  },
  {
    author: 'Armando Meza',
    avatarUrl: 'https://someWebPage.com/assets/img/0110027/url2.jpg',
    hash: '2a411ef15565635a4',
    message: 'test commit #2'
  },
]


describe('CommitList', () => {
  it('renders component', () => {
    const wrapper = render(<CommitListComponent commitItemList={mockData} />);

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
})