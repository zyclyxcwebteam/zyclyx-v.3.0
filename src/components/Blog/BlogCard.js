import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Card, CardBody } from "reactstrap";

// const paths = [
//   "How_to_use_AI_for_better_customer_experiences",
//   "Leading_tech_in_changing_times_in_2020",
// ];

const BlogCard = ({ article }) => {
  const { Title, Image } = article;

  return (
    <Link to={`/blog/${Title.split(" ").join("_")}`} className="blog-card-link">
      <Card className="blog-card">
        <Img
          fluid={Image.childImageSharp.fluid}
          alt={Title}
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <CardBody>
          <h1 className="blog-card-title text-center">{Title}</h1>
        </CardBody>
      </Card>
    </Link>
  );
};

export default BlogCard;
