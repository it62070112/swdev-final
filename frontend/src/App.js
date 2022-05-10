import React from 'react';

class app extends React.Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });

    console.log(this.state.name)
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    console.log(user);
  }

  render() {return (
    <div>
      <h1>
        กรอกเบอร์ของ True:
      </h1>
      <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" onChange={this.handleChange} />
          <button type="submit">ขอ OTP</button>
        </form>
    </div>
  )};
}

export default app;
