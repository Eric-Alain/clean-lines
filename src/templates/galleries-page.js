import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';

export const GalleriesPageTemplate = ({ galleries }) => {
  
  let func = () => {
    let arr = [];
    galleries.gallery.forEach((item) => {
      item.images.forEach((subItem) => {
        if (subItem !== undefined) {
          arr.push(`<p>${subItem}</p>`);
        }
      });
     
    });
     return arr;
  }

  return (
    <Container fluid>
      <Row>
        <Col xs='12'>
          <div dangerouslySetInnerHTML={{ __html: func() }} />
        </Col>
      </Row>
    </Container>
  );
};
/*
GalleriesPageTemplate.propTypes = {
  galleries: PropTypes.arrayOf({
    gallery: PropTypes.shape({
      title: PropTypes.string,
      images: PropTypes.object || PropTypes.string      
    })
  })
};*/

const GalleriesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <GalleriesPageTemplate galleries={frontmatter.galleries} />
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
