import React from 'react';
//import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../components/Layout';

const landing = () => {
  return (
    <Layout>
      <main>
        <Container>
          <Row className='justify-content-center'>
            <h1 className='display-3 fw-bold mb-2 pb-2 border-bottom'>Title</h1>
            <Col xs='auto' className='mt-5'>
              <p>Hello</p>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
};
/*
Lightbox.propTypes = {
  gallery: PropTypes.shape({
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
  })
};*/

export default landing;

export const LandingQuery = graphql`
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
`;