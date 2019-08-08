import React from 'react';
import { shallow } from 'enzyme';
import OffCanvas from './OffCanvas';

describe('<OffCanvas />', () => {
  test('renders', () => {
    const wrapper = shallow(<OffCanvas />);
    expect(wrapper).toMatchSnapshot();
  });
});
