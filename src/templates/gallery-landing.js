import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';

export const GalleryLandingPageTemplate = ({ title, description }) => {
  return (
    <main>
      <Container>
        <Row className=''>
          <h1 className='display-3 fw-bold mb-2 pb-2 border-bottom'>{title}</h1>
          <Col xs='auto' className='mt-5'>
            <p className='lead'>{description}</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

GalleryLandingPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

const galleryLandingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <GalleryLandingPageTemplate title={frontmatter.title} description={frontmatter.description} />
    </Layout>
  );
};


export const GalleryLandingQuery = graphql`
  query galleryLandingQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;

export default galleryLandingPage;

/*
export const GalleryLandingQuery = graphql`
  query Landing {
    allFile(filter: { relativeDirectory: { regex: "/.*?galleries.*?/" }, extension: { glob: "*md" } }) {
      edges {
        node {
          name
          relativePath
        }
      }
    }
  }
`;*/