import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'services/image-api';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { toast } from 'react-toastify';

import { ColorRing } from 'react-loader-spinner';
export class App extends Component {
  state = {
    error: false,
    inputValue: '',
    images: [],
    totalImg: null,
    page: 1,
    loading: false,
    modalImg: '',
    modalAlt: '',
    showModal: false,
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSearchSubmit = inputValue => {
    this.setState({
      inputValue,
      images: [],
      page: 1,
    });
  };

  handleClickImg = evt => {
    const imgForModal = evt.target.dataset.src;
    const altForModal = evt.target.alt;
    this.setState({
      showModal: true,
      modalImg: imgForModal,
      modalAlt: altForModal,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.inputValue !== prevState.inputValue
    ) {
      this.setState({ loading: true });

      fetchImages(this.state.inputValue, this.state.page)
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            toast.error(`No pictures with "${this.state.inputValue}"`);
            return;
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            totalImg: totalHits,
          }));
        })
        .catch(error => this.setState({ error: true }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { images, loading, error, showModal, page, totalImg } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {error && !loading && <h1>Something wrong. Reload the page!</h1>}
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

        {this.state.images.length > 0 && (
          <ImageGallery
            images={this.state.images}
            clickImg={this.handleClickImg}
          />
        )}
        {images.length !== 0 && page < Math.ceil(totalImg / 12) && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal
            img={this.state.modalImg}
            alt={this.state.modalAlt}
            onCloseModal={this.closeModal}
          >
            Some
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
