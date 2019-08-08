import React from 'react';
import { shallow } from 'enzyme';
import RightMenu from './RightMenu';

describe('<RightMenu />', () => {
  test('renders', () => {
    const wrapper = shallow(<RightMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
