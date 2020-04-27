import React from 'react';
// layout - navbar, footer, chatbot

const ServiceCard = (props) =>{
  const {data} = props;
 const {title,content} = data;
    return(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

const PageTemplate = (props) =>{
    console.log(props)
    const{dataJson} = props.data;
    const {title,caption,description,services} = dataJson;
    return(
        <>
        <div>
    <h1>{title}</h1>
    <b>{caption}</b>
    <p>{description}</p>
        </div>
        <hr />
        {services.map(function(service){
            return(
                <ServiceCard data={service} />
            )
        })}
        </>
    )
}

export default PageTemplate;
 
export const pageQuery = graphql`
  query($slug: String!) {
    dataJson(path: { eq: $slug }) {
        path
        title
        id
        caption
        description
        services {
          content
          title
        }
    }
     
  }
`