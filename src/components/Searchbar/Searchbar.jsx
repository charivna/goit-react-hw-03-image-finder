import { Component } from 'react';
import { toast } from 'react-toastify';
import { Header, Input, SearchButton, SearchForm } from './Serchbar.styled';

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
        <Header className="searchbar">
          <SearchForm className="form" onSubmit={this.handleSubmit}>
            <SearchButton type="submit" className="button">
              <span className="button-label">Search</span>
            </SearchButton>

            <Input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </SearchForm>
        </Header>
      </>
    );
  }
}
