import React from 'react';
import PropTypes from 'prop-types';
import ReactGridGallery from 'react-grid-gallery';

const Lightbox = ({ gallery }) => {
  const createImageArray = (data) => {
    const testArrayForObjects = data.images.some((i) => {
      return typeof i === 'object';
    });
    let arr = [];
    data.images.map((item, i) => {
      arr.push({
        src: testArrayForObjects ? item.url : item,
        thumbnail: testArrayForObjects ? item.url : item,
        nano: testArrayForObjects ? item.url : item,
        thumbnailWidth: 320,
        thumbnailHeight: 180
      });
    });
    return arr;
  };

  return <ReactGridGallery images={createImageArray(gallery)} enableImageSelection={false} />;
};

Lightbox.propTypes = {
  gallery: PropTypes.shape({
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
  })
};

export default Lightbox;
