import { GalleryImage, GalleryItem } from './ImageGallery.styled';
import { nanoid } from 'nanoid';

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
