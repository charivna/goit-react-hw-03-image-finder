import { GalleryImage, GalleryItem } from './ImageGallery.styled';

export const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <GalleryItem className="gallery-item" key={id} src={webformatURL}>
          <GalleryImage src={webformatURL} alt={tags} onClick={onClick} />
        </GalleryItem>
      ))}
    </>
  );
};
