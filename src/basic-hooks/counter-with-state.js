import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      message: 'I need to render!',
    };
  }

  componentDidMount() {
    this.setState({ message: 'Thanks, I rendered!' });
  }

  handleClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  render() {
    const { count, message } = this.state;

    return (
      <div>
        Counter With State<br />
        Count: {count}<br />
        Message: {message}<br />
        <button onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    );
  }
}
