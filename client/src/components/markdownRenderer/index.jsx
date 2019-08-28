import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import plugins from './plugins';
import renderers from './renderers';
import styles from './markdownRenderer.module.css';

class Markdown extends PureComponent {
  state = { markdownCollapsed: false };

  static getDerivedStateFromError(error) {
    return { markdownCollapsed: true };
  }
  componentDidUpdate(prevProps) {
    if(prevProps.data !== this.props.data) {
      this.setState(() => ({markdownCollapsed: false}));
    }
  }
  componentDidCatch(error, info) {
    console.error(`React Markdown crashed. ${info}`)
    console.error(error);
  }

  render() {
    const { data = '' } = this.props;
    const { markdownCollapsed } = this.state;
    if( markdownCollapsed ) {
      return (
        <p>
            {data}
        </p>
      )
    }
    return (
      <div>
      <ReactMarkdown
        escapeHtml={false}
        source={data}
        renderers={renderers}
        plugins={plugins}
        className={styles.md}
      />
      {this.props.children}
      </div>
      
    );
  }
}


export default Markdown;
