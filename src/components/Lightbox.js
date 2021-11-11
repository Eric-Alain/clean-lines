import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Row, Col, Card } from 'react-bootstrap';
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
        thumbnailHeight: 174
      });
    });

    return arr;
  };

  return <ReactGridGallery images={createImageArray(gallery)} enableImageSelection={false} rowHeight={300} />;
};
/*
Lightbox.propTypes = {
  section: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
      subheading: PropTypes.string,
      text: PropTypes.string
    })
  )
};*/

export default Lightbox;
