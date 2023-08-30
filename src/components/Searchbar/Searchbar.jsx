import { Component } from 'react';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = ({ currentTarget }) => {
    this.setState({
      inputValue: currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue.trim() === '') {
      return toast.error('Enter your search query!');
    }
    this.props.onSubmit(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  };
  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </form>
        </header>
      </>
    );
  }
}
