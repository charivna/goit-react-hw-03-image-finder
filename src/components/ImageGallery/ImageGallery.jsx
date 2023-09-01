import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  render() {
    return (
      <>
        <Gallery className="gallery">
          <ImageGalleryItem
            images={this.props.images}
            onClick={this.props.clickImg}
          />
        </Gallery>
      </>
    );
  }
}
