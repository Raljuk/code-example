import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../index';

describe('NotFound component', () => {
  it('Should render NotFound component without errors', () => {
    const component = shallow(
      <NotFound />,
    );

    expect(component.html()).not.toBe(null);
  });
});
