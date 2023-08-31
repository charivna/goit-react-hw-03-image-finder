import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'services/image-api';
import { Button } from './Button/Button';

import { ColorRing } from 'react-loader-spinner';
export class App extends Component {
  state = {
    inputValue: '',
    images: [],
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.inputValue !== prevState.inputValue
    ) {
      this.setState({ loading: true });
      fetchImages(this.state.inputValue, this.state.page)
        .then(({ hits }) =>
          this.setState({
            images: hits,
          })
        )
        .finally(this.setState({ loading: false }));
    }
  }
  handleSearchSubmit = inputValue => {
    this.setState({
      inputValue,
    });
  };

  render() {
    const { images, loading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />

        {loading && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        )}

        <ImageGallery images={this.state.images} />
        {images.length !== 0 && <Button />}

        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
