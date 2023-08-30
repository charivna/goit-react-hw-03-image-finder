import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    inputValue: '',
    image: [],
    page: 1,
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
