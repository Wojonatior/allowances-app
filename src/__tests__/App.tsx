import * as React from 'react';
import { } from 'jest';
import * as ReactNative from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../app'

it('renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
