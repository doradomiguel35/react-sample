import React from 'react';
import { shallow } from 'enzyme';
import CenterMenu from './CenterMenu';

describe('<CenterMenu />', () => {
  test('renders', () => {
    const wrapper = shallow(<CenterMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
