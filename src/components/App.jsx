import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    inputValue: '',
  };

  handleSearchSubmit = inputValue => {
    this.setState({
      inputValue,
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
