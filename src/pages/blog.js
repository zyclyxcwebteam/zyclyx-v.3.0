import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Row, Col, Container } from "reactstrap";
import Layout from "../components/Layout/Layout";
import BlogCard from "../components/Blog/BlogCard";
import "../css/blog.css";

const blog = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            allStrapiBlogPosts {
              edges {
                node {
                  Title
                  strapiId
                  Image {
                    absolutePath
                    childImageSharp {
                      fluid(maxWidth: 400, maxHeight: 230) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <Layout>
            <Container fluid className="blog-posts-container py-4">
              <Container className="py-4">
                <h2 className="section-title">Latest from our Blog</h2>
              </Container>
              <Container className="py-3 my-3">
                <Row className="d-flex justify-content-around">
                  {data.allStrapiBlogPosts.edges.length !== 0 &&
                    data.allStrapiBlogPosts.edges.map(item => {
                      return (
                        <Col md={6} lg={5}>
                          <BlogCard article={item.node} />
                        </Col>
                      );
                    })}
                </Row>
              </Container>
            </Container>
          </Layout>
        )}
      />
    </>
  );
};

export default blog;
