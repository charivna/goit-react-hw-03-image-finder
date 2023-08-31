import { GalleryImage, GalleryItem } from './ImageGallery.styled';

export const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <GalleryItem className="gallery-item" key={id}>
          <GalleryImage src={webformatURL} alt={tags} />
        </GalleryItem>
      ))}
    </>
  );
};
