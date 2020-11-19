import React, { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import { Row, Col, Container } from "reactstrap";
import Layout from "../components/Layout/Layout";
import BlogCard from "../components/Blog/BlogCard";
import "../css/blog.css";

const blog = () => {
  const [isFetching, setFetching] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const [reRender] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    fetch(`https://admin-zyclyx.herokuapp.com/blog-posts`)
      // fetch(`http://localhost:1337/blog-posts/`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setBlogPosts(data);
        setFetching(false);
        // console.log(data[0].Image.formats.small.url);
      })
      .catch(error => {
        console.log(error);
      });
  }, [reRender]);

  return (
    <Layout
      title="ZYCLYX Blogs"
      description="Checkout ZYCLYX blogs related to our services."
      modal={modal}
      toggle={toggle}
    >
      <div className="container-fluid  blog-posts-container py-4">
        <div className="container pt-5">
          <h2 className="section-title">Latest from our Blog</h2>
        </div>
        {!isFetching ? (
          <Container className="py-3 my-3">
            <Row className="d-flex justify-content-around">
              {blogPosts.length !== 0 &&
                blogPosts.map((item, index) => {
                  return (
                    <Col md={6} lg={5}>
                      <BlogCard index={index} blogItem={item} />
                    </Col>
                  );
                })}
            </Row>
          </Container>
        ) : (
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="spinner-border text-success mt-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
  // return (
  //   <>
  //     <StaticQuery
  //       query={graphql`
  //         query {
  //           allStrapiBlogPosts {
  //             edges {
  //               node {
  //                 Title
  //                 strapiId
  //                 Image {
  //                   absolutePath
  //                   childImageSharp {
  //                     fluid {
  //                       ...GatsbyImageSharpFluid
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       `}
  //       render={data => (
  //         <Layout>
  //           <div className="container-fluid  blog-posts-container py-4">
  //             <div className="container pt-5">
  //               <h2 className="section-title">Latest from our Blog</h2>
  //             </div>
  //             <div className="container py-3 my-3 d-flex align-items-center">
  //               <ArticlesComponent articles={data.allStrapiBlogPosts.edges} />
  //             </div>
  //           </div>
  //         </Layout>
  //       )}
  //     />
  //   </>
  // );
};

export default blog;
