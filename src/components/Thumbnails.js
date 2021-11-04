import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'gatsby';

const Thumbnails = ({ galleries }) => {
    console.log(galleries)
    return (
      <Row className='justify-content-center'>
        {galleries.map((gallery, i) => {
          return (
            <Col xs='12' lg='4' key={i} className='mb-3'>
              <Card className='rounded-0 p-0 p-md-4'>
                <Card.Body>
                  <Card.Title>
                    <h3 className='mb-1 pb-1 border-bottom'>{gallery.title || ''}</h3>
                  </Card.Title>
                  <div className='zoom-overlay'>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: gallery.images[0] || "",
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
