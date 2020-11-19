import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import fetch from "isomorphic-fetch";
import Layout from "../../components/Layout/Layout";

const BlogArticle = () => {
  const [article, setArticle] = useState(null);
  const [isFetching, setFetching] = useState(true);
  const [reRender] = useState(false);
  useEffect(() => {
    fetch(
      "https://admin-zyclyx.herokuapp.com/blog-posts/5fb602124c8c830017af68b8"
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setArticle(data);
        setFetching(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [reRender]);
  return (
    <Layout
      active="blog"
      title="Leading tech in changing times in 2020"
      description="Exploring the digital transformation during Covid-19 in new age technologies."
      keywords="zylclyx, zyclyx blogs,  digital transformation during Covid-19, robotic  process automation, big data, new age technologies, AI"
      image="https://res.cloudinary.com/zyclyxweb/image/upload/v1605764005/small_Leading_tech_in_changing_times_in_2020_76957236bc.jpg"
      url="https://zyclyx.com/blog/Leading_tech_in_changing_times_in_2020/"
    >
      <div className="container-fluid blog-posts-container blog-article d-flex align-items-center">
        <div className="container">
          {!isFetching ? (
            <>
              <h1 className="text-center py-5 section-title">
                {article.Title}
              </h1>
              <img
                src={article.Image.formats.large.url}
                alt={article.Title}
                title={article.Title}
                className="w-100"
              />
              <div className="py-3">
                <ReactMarkdown source={article.Content} />
                <p className="text-muted ml-auto">
                  <span className="mr-2">Published on</span>
                  <Moment format="MMMM DD YYYY">{article.Published_at}</Moment>
                </p>
              </div>
            </>
          ) : (
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="spinner-border text-success mt-5" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogArticle;
