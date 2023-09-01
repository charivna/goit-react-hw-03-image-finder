import { ImageGalleryItem } from './ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick }) => {
  <Gallery>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => {
      return (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          dataSrc={largeImageURL}
          tags={tags}
          onClick={onClick}
        />
      );
    })}
  </Gallery>;
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
