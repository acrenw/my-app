import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
}

const Profile = () => {
    return (
    <h1 Profile>
      <form onSubmit={this.handleSubmit}>
        <label>
          Hospital:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Address:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </h1>);
  };
  
  export default Profile;