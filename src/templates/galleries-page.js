import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';

export const GalleriesPageTemplate = ({ galleries }) => {
  
  return (
    <Container fluid>
      <Row>
        <Col xs='12'>
          <p>{galleries}</p>
        </Col>
      </Row>
       
    </Container>
  );
};

GalleriesPageTemplate.propTypes = {
  galleries: PropTypes.arrayOf({
    gallery: PropTypes.shape({
      title: PropTypes.string,
      images: PropTypes.object || PropTypes.string      
    })
  })
};

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
        galleries-list {
          gallery {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
