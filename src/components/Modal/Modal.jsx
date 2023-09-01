import { Overlay, ModalEl } from './Modal.styled';

export const Modal = ({ children }) => {
  return (
    <Overlay class="overlay">
      <ModalEl class="modal">
        <h1>Hello, i am modal window</h1>
        <img src="" alt="" />
      </ModalEl>
    </Overlay>
  );
};
