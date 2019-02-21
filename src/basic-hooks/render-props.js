import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleValue: props.initialValue
    };
    this.toggler = this.toggler.bind(this);
  }

  toggler() {
    this.setState(prevState => ({
      toggleValue: !prevState.toggleValue
    }));
  }
  render() {
    return this.props.children(this.state.toggleValue, this.toggler);
  }
}

export default class EditableItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue
    };
  }

  setValue(newValue) {
    this.setState({
      value: newValue
    });
  }

  render() {
    return (
      <Toggler initialValue={false}>
        {(editorVisible, toggleEditorVisible) => ( // NOTE HERE
          <main>
            {editorVisible ? (
              <label>
                {this.props.label}
                <input
                  type="text"
                  value={this.state.value}
                  onChange={event => this.setValue(event.target.value)}
                />
              </label>
            ) : (
                <span>{this.state.value}</span>
              )}
            <button onClick={toggleEditorVisible}>
              {editorVisible ? "Done" : "Edit"}
            </button>
          </main>
        )}
      </Toggler>
    );
  }
}
