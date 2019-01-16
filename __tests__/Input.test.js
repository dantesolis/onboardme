import React from 'react';
import { shallow } from 'jest';
import { Input } from './components/common/';

test('Input', () => {
  const wrapper = shallow(<Input/>);
  expect(wrapper).toMatchSnapshot;
});
