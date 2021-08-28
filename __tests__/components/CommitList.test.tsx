import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import CommitListComponent from '../../src/components/CommitList';
import mockCommitListData from '../__mocks__/MockCommitListData';

describe('CommitList', () => {
  it('renders component', () => {
    const wrapper = render(<CommitListComponent commitItemList={mockCommitListData} />);

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
    const wrapper = render(<CommitListComponent commitItemList={[]} />);

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