import { Component } from 'react';
import { Overlay, ModalEl } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleClickBackdrop = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onCloseModal();
    }
  };
  render() {
    const { img, alt } = this.props;

    return (
      <Overlay className="overlay" onClick={this.handleClickBackdrop}>
        <ModalEl classN="modal">
          <img src={img} alt={alt} />
        </ModalEl>
      </Overlay>
    );
  }
}
