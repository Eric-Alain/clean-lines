import React from 'react';
import PropTypes from 'prop-types';
import { GalleriesPageTemplate } from '../../templates/galleries-page';

const GalleriesPagePreview = ({ entry, getAsset }) => {
  if (entry) {
    return (
      <GalleriesPageTemplate
        galleries={{
          title: entry.getIn(['data', 'galleries', 'gallery', 'title']),
          images: getAsset(entry.getIn(['data', 'galleries', 'gallery', 'images']))
        }}
      />
    );
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
