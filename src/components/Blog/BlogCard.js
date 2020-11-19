import React from "react";
import { Link } from "gatsby";
import { Card, CardBody } from "reactstrap";

const paths = [
  "How_to_use_AI_for_better_customer_experiences",
  "Leading_tech_in_changing_times_in_2020",
];

const BlogCard = ({ blogItem, index }) => {
  const { Title, Image } = blogItem;
  return (
    <Link to={`/blog/${paths[index]}`} className="blog-card-link">
      <Card>
        <img src={Image.formats.small.url} alt={Title} title={Title} />
        <CardBody>
          <h1 className="blog-card-title text-center">{Title}</h1>
        </CardBody>
      </Card>
    </Link>
  );
};

export default BlogCard;
