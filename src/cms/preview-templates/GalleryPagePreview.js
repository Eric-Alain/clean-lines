import React from 'react';
import PropTypes from 'prop-types';
import { GalleryPageTemplate } from '../../templates/gallery-page';

const GalleryPagePreview = ({ entry, getAsset }) => {
  if (entry) {
    let data = entry.getIn(['data', 'galleries']).toJS();
    
    let mappedGallery = data.gallery.map((item, i) => {
      return {        
        title: item.title || '',
        images: item.images || ['']
      };
    });    

    return <GalleryPageTemplate galleries={mappedGallery} />;
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
