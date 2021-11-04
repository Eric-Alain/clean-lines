import React from 'react';
import PropTypes from 'prop-types';
import { GalleriesPageTemplate } from '../../templates/galleries-page';

const GalleriesPagePreview = ({ entry, getAsset }) => {
  if (entry) {
    let data = entry.getIn(['data', 'galleries']).toJS();

    return <GalleriesPageTemplate galleries={data} />;
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
