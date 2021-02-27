// rce + tab
import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: ''
  }

  onSubmit = e => {
    e.preventDefault();
    // console.log(this.state.text);  // clg + tab
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input name="text" type="text" value={this.state.text} onChange={this.onChange} placeholder="Search Users..." />
          <input type="submit" value="Search" className='btn btn-dark btn-block' />
        </form>
      </div>
    )
  }
}

export default Search