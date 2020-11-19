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
    // const { location } = props;
    // const { id } = location.state;
    //    Fetch article content form DB
    fetch(
      "https://admin-zyclyx.herokuapp.com/blog-posts/5f98151e07b18d430ca80d12"
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
      title="Discover the Role of AI in Customer Experience"
      description="Explore the role of AI in customer experience. Discover how to improve the marketing personalization and enhance your customer service using A"
      keywords="ai customer experience examples, ai customer engagement, customer experience implementations of artificial intelligence, ai customer service, customer analytics artificial intelligence, improve customer experience with artificial intelligence, artificial intelligence personalization"
      image="https://res.cloudinary.com/zyclyxweb/image/upload/v1604145018/small_Vector_Ai_7e7b454967.png"
      url="https://zyclyx.com/blog/How_to_use_AI_for_better_customer_experiences/"
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
