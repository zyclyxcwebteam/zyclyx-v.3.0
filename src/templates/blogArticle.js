import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { Container } from "reactstrap";
import Layout from "../components/Layout/Layout";

const BlogArticle = ({ data }) => {
  const { strapiBlogPosts } = data;

  return (
    <Layout
      active="blog"
      title={strapiBlogPosts.Meta_Title}
      description={strapiBlogPosts.Meta_Description}
      keywords={strapiBlogPosts.Meta_Keywords}
      image={strapiBlogPosts.Thumbnail_Img_Link}
      url={`https://zyclyx.com/blog/${strapiBlogPosts.Title.split(" ").join(
        "_"
      )}`}
    >
      <Container
        fluid
        className="blog-posts-container blog-article d-flex align-items-center"
      >
        <Container className="py-4">
          <>
            <Img
              fluid={strapiBlogPosts.Image.childImageSharp.fluid}
              alt={strapiBlogPosts.Title}
              objectFit="cover"
            />
            <h1 className="text-center py-4 section-title">
              {strapiBlogPosts.Title}
            </h1>
            <div className="py-3">
              <ReactMarkdown source={strapiBlogPosts.Content} />
              <p className="text-muted ml-auto">
                <span className="mr-2">Published on</span>
                <Moment format="MMMM DD YYYY">
                  {strapiBlogPosts.Published_at}
                </Moment>
              </p>
            </div>
          </>
        </Container>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    strapiBlogPosts(strapiId: { eq: $slug }) {
      Title
      strapiId
      Content
      Published_at
      Meta_Title
      Meta_Description
      Meta_Keywords
      Thumbnail_Img_Link
      Image {
        absolutePath
        childImageSharp {
          fluid(maxWidth: 900, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default BlogArticle;
