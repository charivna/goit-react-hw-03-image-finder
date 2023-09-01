import { ImageGalleryItem } from './ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, clickImg }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            dataSrc={largeImageURL}
            tags={tags}
            onClick={clickImg}
          />
        );
      })}
    </Gallery>
  );
};

// export class ImageGallery extends Component {
//   render() {
//     return (
//       <>
//         <Gallery className="gallery">
//           <ImageGalleryItem
//             images={this.props.images}
//             onClick={this.props.clickImg}
//           />
//         </Gallery>
//       </>
//     );
//   }
// }
