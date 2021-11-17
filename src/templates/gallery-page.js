import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import Lightbox from '../components/Lightbox';

export const GalleryPageTemplate = ({ title, gallery }) => {
  
  const [galleriesState, setGalleriesState] = useState({
    images: gallery.images,
    description: gallery.description
  });

  useEffect(() => {
    setGalleriesState({
      images: gallery.images,
      description: gallery.description
    });
  }, [title, gallery]);

  return (
    <main>
      <Container>
        <h1 className='display-3 fw-bold mb-2 pb-2 border-bottom'>{galleriesState.title}</h1>
        <Lightbox gallery={galleriesState} />
      </Container>
    </main>
  );
};

GalleryPageTemplate.propTypes = {
  gallery: PropTypes.shape({
    title: PropTypes.string,
    images: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string])
  })
};

const GalleryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <GalleryPageTemplate title={frontmatter.title} gallery={frontmatter.gallery} />
    </Layout>
  );
};

GalleryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default GalleryPage;

export const GalleryQuery = graphql`
  query GalleryPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        gallery {
          images
          description
        }
      }
    }
  }
`;
