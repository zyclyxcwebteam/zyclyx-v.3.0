import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import fetch from "isomorphic-fetch";
import Layout from "../components/Layout/Layout";

const BlogArticle = props => {
  const [article, setArticle] = useState(null);
  const [reRender] = useState(false);
  useEffect(() => {
    const { location } = props;
    const { id } = location.state;
    console.log(id);
    // fetch(`https://admin-zyclyx.herokuapp.com/job-openings/${id}`)
    fetch(`http://localhost:1337/blog-posts/${id}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setArticle(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [reRender]);
  return (
    <Layout active="blog" title="" description="">
      <div className="container-fluid blog-posts-container blog-article">
        <div className="container">
          {article && (
            <>
              <h1 className="text-center py-5">{article.Title}</h1>
              <img
                src={article.Image.url}
                alt={article.Title}
                className="w-100"
              />
              <div className="py-3">
                <ReactMarkdown source={article.Content} />
                <p className="text-muted ml-auto">
                  <span className="mr-2">Published on</span>
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogArticle;
