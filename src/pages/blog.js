import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
// import Moment from "react-moment";
// import fetch from "isomorphic-fetch";
import { Card, CardBody } from "reactstrap";
import Layout from "../components/Layout/Layout";
import "../css/blog.css";

const BlogCard = ({ article }) => {
  const id = article.node.strapiId;
  return (
    <Link to="/article" state={{ id }} className="blog-card-link">
      <Card>
        <Img fluid={article.node.Image.childImageSharp.fluid} />
        <CardBody>
          <h1 className="blog-card-title text-center">{article.node.Title}</h1>
          {/* <CardText>
            Some quick example text to build on the card title and make up the
          </CardText> */}
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
          <div
            className="col-12 my-3 my-lg-1"
            key={`article__${article.node.strapiId}`}
          >
            <BlogCard article={article} />
          </div>
        );
      })}
    </div>
  );
};

const blog = () => {
  // const [blogPosts, setBlogPosts] = useState(null);
  // const [reRender] = useState(false);
  // useEffect(() => {
  //   fetch(`https://admin-zyclyx.herokuapp.com/blog-posts`)
  //     // fetch(`http://localhost:1337/blog-posts/`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setBlogPosts(data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [reRender]);

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
                      fluid {
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
            <div className="container-fluid  blog-posts-container py-4">
              <div className="container pt-5">
                <h2 className="section-title">Latest from our Blog</h2>
              </div>
              <div className="container py-3 my-3 d-flex align-items-center">
                <ArticlesComponent articles={data.allStrapiBlogPosts.edges} />
              </div>
            </div>
          </Layout>
        )}
      />
    </>
  );
};

export default blog;
