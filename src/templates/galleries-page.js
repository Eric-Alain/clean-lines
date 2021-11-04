import React, { useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import Thumbnails from '../components/Thumbnails';

export const GalleriesPageTemplate = ({ galleries }) => {
  const [galleriesState, setGalleriesState] = useState(galleries);
  
  const renderThumbnails = useCallback(() => {
    return <Thumbnails galleries={galleriesState} />;
  }, [galleriesState]);


  useEffect(() => {
    setGalleriesState(galleries);
    renderThumbnails();
  }, [galleries, galleriesState, renderThumbnails]);
  
  return (
    <main>
      <Container>
        <Row>
          <h1 className='display-3 fw-bold mb-2 pb-2 border-bottom'>Galleries</h1>
          <Col xs='12' className='mt-5'>
            {renderThumbnails()}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

GalleriesPageTemplate.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      images: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string])
    })
  )
};

const GalleriesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <GalleriesPageTemplate galleries={frontmatter.galleries.gallery} />
    </Layout>
  );
};

GalleriesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default GalleriesPage;

export const GalleriesQuery = graphql`
  query GalleriesPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        galleries {
          gallery {
            title
            images
          }
        }
      }
    }
  }
`;
