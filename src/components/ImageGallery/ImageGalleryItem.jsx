import { GalleryImage, GalleryItem } from './ImageGallery.styled';

export const ImageGalleryItem = ({ src, tags, dataSrc, onClick }) => {
  return (
    <GalleryItem onClick={onClick}>
      <GalleryImage src={src} data-src={dataSrc} alt={tags} />
    </GalleryItem>
  );
};
