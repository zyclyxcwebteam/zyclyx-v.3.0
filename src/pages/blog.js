import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
// import Img from "gatsby-image";
// import Moment from "react-moment";
import fetch from "isomorphic-fetch";
import { Card, CardBody } from "reactstrap";
import Layout from "../components/Layout/Layout";
import "../css/blog.css";

const BlogCard = ({ article }) => {
  const { id } = article;
  //  const { Title } = article;
  //  const slug = Title.split(" ").join("_");
  return (
    <Link
      to="/blog/How_to_use_AI_for_better_customer_experiences"
      state={{ id }}
      className="blog-card-link"
    >
      <Card>
        <img
          src={article.Image.formats.small.url}
          alt={article.Title}
          title={article.Title}
        />
        <CardBody>
          <h1 className="blog-card-title text-center">{article.Title}</h1>
        </CardBody>
      </Card>
    </Link>
  );
};

const ArticlesComponent = ({ articles }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div className="row">
      {articles.map(article => {
        return (
          <div className="col-12 my-3 my-lg-1" key={`article__${article.id}`}>
            <BlogCard article={article} />
          </div>
        );
      })}
    </div>
  );
};

const blog = () => {
  const [isFetching, setFetching] = useState(true);
  const [blogPosts, setBlogPosts] = useState(null);
  const [reRender] = useState(false);
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

  console.log(blogPosts);

  return (
    <Layout
      title="ZYCLYX Blogs"
      description="Checkout ZYCLYX blogs related to our services."
    >
      <div className="container-fluid  blog-posts-container py-4">
        <div className="container pt-5">
          <h2 className="section-title">Latest from our Blog</h2>
        </div>
        {!isFetching ? (
          <div className="container py-3 my-3 d-flex align-items-center">
            <ArticlesComponent articles={blogPosts} />
          </div>
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
