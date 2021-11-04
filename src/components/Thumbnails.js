import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'gatsby';

const Thumbnails = ({ galleries }) => {
  return (
    <Row className='justify-content-center'>
      {galleries.gallery.map((gallery, i) => {
        console.log(gallery.images[0]);
        return (
          <Col xs='4' key={i}>
            <Card className='rounded-0 p-0 p-md-4'>
              <Card.Body>
                <Card.Title>
                  <h3 className='mb-1 pb-1 border-bottom'>{gallery.title}</h3>
                </Card.Title>
                <div className='zoom-overlay'>
                  <PreviewCompatibleImage
                    imageInfo={{
                      alt: '',
                      childImageSharp: null,
                      image: gallery.images[0],
                      style: null,
                      className: 'w-100 float-none'
                    }}
                  />
                </div>
                {/*
                <Card.Text>{section.text}</Card.Text>
                <Link className='btn' to={`${gallery.location}`}>
                   {gallery.buttonText}
                </Link>
                */}
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
/*
Thumbnails.propTypes = {
  section: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
      subheading: PropTypes.string,
      text: PropTypes.string
    })
  )
};*/

export default Thumbnails;
