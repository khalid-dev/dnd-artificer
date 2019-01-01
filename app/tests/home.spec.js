import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Home from '../containers/home';

describe('<Home />', () => {
    let wrapper;
    let instance;
    beforeEach("set up wrapper and instance", () => {
        wrapper = shallow(<Home />);
        instance = wrapper.instance();
    })
    it('has a setResults function', () => {
        expect(instance.setResults).to.be.a('function');
    })
})
