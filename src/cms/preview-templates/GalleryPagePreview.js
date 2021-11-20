import React from 'react';
import PropTypes from 'prop-types';
import { GalleryPageTemplate } from '../../templates/gallery-page';

const GalleryPagePreview = ({ entry, getAsset }) => {
  if (entry) {
    let data = entry.getIn(['data']).toJS();

    const mapGallery = (obj) => {
      return obj.gallery.images.map((item) => getAsset(item));
    };

    return (
      <GalleryPageTemplate
        title={data.title}
        gallery={{
          images: mapGallery(data),
          description: data.gallery.description
        }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

GalleryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default GalleryPagePreview;
