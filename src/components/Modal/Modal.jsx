import { Overlay, ModalEl } from './Modal.styled';

export const Modal = ({ children }) => {
  return (
    <Overlay className="overlay">
      <ModalEl className="modal">
        <h1>Hello, i am modal window</h1>
        <img src="" alt="" />
      </ModalEl>
    </Overlay>
  );
};
