import React from 'react';
import PropTypes from 'prop-types';
import { GalleriesPageTemplate } from '../../templates/galleries-page';

const GalleriesPagePreview = ({ entry, getAsset }) => {
  if (entry) {
    let data = entry.getIn(['data', 'galleries']).toJS();
    
    let mappedGallery = data.gallery.map((item, i) => {
      return {        
        title: item.title || '',
        images: item.images || ['']
      };
    });    

    return <GalleriesPageTemplate galleries={mappedGallery} />;
  } else {
    return <div>Loading...</div>;
  }
};

GalleriesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default GalleriesPagePreview;
