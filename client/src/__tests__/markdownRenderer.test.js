/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import ReactMarkdown from 'react-markdown';
import MarkdownRenderer from '../components/markdownRenderer';

describe('<MarkdownRenderer /> shallow tests', () => {
  it('renders without crashing', () => {
    const props = {
      data: '# test',
    };
    const wrapper = shallow(<MarkdownRenderer {...props} />);
    expect(wrapper.find(ReactMarkdown).length).toBe(1);
  });

  it('renders error boundary when crashes', () => {
    const RandomComponent = () => null;
    const props = {
      data: '# test',
    };
    const wrapper = shallow(
      <MarkdownRenderer {...props}>
        <RandomComponent />
      </MarkdownRenderer>,
    );
    wrapper.find(RandomComponent).simulateError(new Error('Crash Application'));
    expect(wrapper.find('p').text()).toBe(props.data);
  });
});
