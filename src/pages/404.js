import React from "react";
// import { Row, Col, Container } from "reactstrap";
// import { useStaticQuery, graphql } from "gatsby";
// import { Controller, Scene } from "react-scrollmagic";
// import Img from "gatsby-image";

// const Solutions = () => {
//   const IMAGES = useStaticQuery(graphql`
//     query sol {
//       allFile(filter: { relativeDirectory: { eq: "service/solution" } }) {
//         edges {
//           node {
//             base
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   `);
//   return (
//     <Container className="wrapper">
//       <Row className="wrapper-inner" style={{ border: "1px solid red" }}>
//         <Col className="img-box" style={{ border: "1px solid red" }}>
//           <Controller>
//             <Scene pin pinSettings={{ pushFollowers: false }} triggerHook={0.5}>
//               <div>
//                 <Img
//                   fluid={IMAGES.allFile.edges[0].node.childImageSharp.fluid}
//                   alt="rpa"
//                 />
//               </div>
//             </Scene>
//           </Controller>
//         </Col>
//         <Col className="text-box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//             gravida sapien ex, vel egestas erat sagittis id. Nunc vulputate
//             risus nec aliquet congue. Ut commodo elit ex, at fringilla libero
//             accumsan lacinia. Quisque vitae condimentum magna, eget cursus arcu.
//             Duis id libero ac nibh molestie consequat quis ut nunc. Mauris
//             consequat ante vel sapien ultrices, at varius orci gravida.
//             Suspendisse fringilla non leo dignissim tincidunt. Suspendisse porta
//             erat ligula, ac volutpat sapien volutpat ac. Sed interdum
//             ullamcorper pretium. Sed sagittis egestas urna, at vulputate tellus
//             viverra at. Phasellus eget sollicitudin dui. Ut a rutrum urna.
//             Aenean tempus leo diam, quis scelerisque dolor molestie in. Praesent
//             sem diam, consequat sit amet tortor sed, posuere pretium arcu.
//             Vivamus pharetra purus non suscipit accumsan. Nam ultricies tellus
//             mollis magna semper, vitae imperdiet augue tincidunt.
//           </p>

//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//             gravida sapien ex, vel egestas erat sagittis id. Nunc vulputate
//             risus nec aliquet congue. Ut commodo elit ex, at fringilla libero
//             accumsan lacinia. Quisque vitae condimentum magna, eget cursus arcu.
//             Duis id libero ac nibh molestie consequat quis ut nunc. Mauris
//             consequat ante vel sapien ultrices, at varius orci gravida.
//             Suspendisse fringilla non leo dignissim tincidunt. Suspendisse porta
//             erat ligula, ac volutpat sapien volutpat ac. Sed interdum
//             ullamcorper pretium. Sed sagittis egestas urna, at vulputate tellus
//             viverra at. Phasellus eget sollicitudin dui. Ut a rutrum urna.
//             Aenean tempus leo diam, quis scelerisque dolor molestie in. Praesent
//             sem diam, consequat sit amet tortor sed, posuere pretium arcu.
//             Vivamus pharetra purus non suscipit accumsan. Nam ultricies tellus
//             mollis magna semper, vitae imperdiet augue tincidunt.
//           </p>

//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//             gravida sapien ex, vel egestas erat sagittis id. Nunc vulputate
//             risus nec aliquet congue. Ut commodo elit ex, at fringilla libero
//             accumsan lacinia. Quisque vitae condimentum magna, eget cursus arcu.
//             Duis id libero ac nibh molestie consequat quis ut nunc. Mauris
//             consequat ante vel sapien ultrices, at varius orci gravida.
//             Suspendisse fringilla non leo dignissim tincidunt. Suspendisse porta
//             erat ligula, ac volutpat sapien volutpat ac. Sed interdum
//             ullamcorper pretium. Sed sagittis egestas urna, at vulputate tellus
//             viverra at. Phasellus eget sollicitudin dui. Ut a rutrum urna.
//             Aenean tempus leo diam, quis scelerisque dolor molestie in. Praesent
//             sem diam, consequat sit amet tortor sed, posuere pretium arcu.
//             Vivamus pharetra purus non suscipit accumsan. Nam ultricies tellus
//             mollis magna semper, vitae imperdiet augue tincidunt.
//           </p>
//         </Col>
//       </Row>
//       <Container>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
//           sapien ex, vel egestas erat sagittis id. Nunc vulputate risus nec
//           aliquet congue. Ut commodo elit ex, at fringilla libero accumsan
//           lacinia. Quisque vitae condimentum magna, eget cursus arcu. Duis id
//           libero ac nibh molestie consequat quis ut nunc. Mauris consequat ante
//           vel sapien ultrices, at varius orci gravida. Suspendisse fringilla non
//           leo dignissim tincidunt. Suspendisse porta erat ligula, ac volutpat
//           sapien volutpat ac. Sed interdum ullamcorper pretium. Sed sagittis
//           egestas urna, at vulputate tellus viverra at. Phasellus eget
//           sollicitudin dui. Ut a rutrum urna. Aenean tempus leo diam, quis
//           scelerisque dolor molestie in. Praesent sem diam, consequat sit amet
//           tortor sed, posuere pretium arcu. Vivamus pharetra purus non suscipit
//           accumsan. Nam ultricies tellus mollis magna semper, vitae imperdiet
//           augue tincidunt.
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
//           sapien ex, vel egestas erat sagittis id. Nunc vulputate risus nec
//           aliquet congue. Ut commodo elit ex, at fringilla libero accumsan
//           lacinia. Quisque vitae condimentum magna, eget cursus arcu. Duis id
//           libero ac nibh molestie consequat quis ut nunc. Mauris consequat ante
//           vel sapien ultrices, at varius orci gravida. Suspendisse fringilla non
//           leo dignissim tincidunt. Suspendisse porta erat ligula, ac volutpat
//           sapien volutpat ac. Sed interdum ullamcorper pretium. Sed sagittis
//           egestas urna, at vulputate tellus viverra at. Phasellus eget
//           sollicitudin dui. Ut a rutrum urna. Aenean tempus leo diam, quis
//           scelerisque dolor molestie in. Praesent sem diam, consequat sit amet
//           tortor sed, posuere pretium arcu. Vivamus pharetra purus non suscipit
//           accumsan. Nam ultricies tellus mollis magna semper, vitae imperdiet
//           augue tincidunt.
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
//           sapien ex, vel egestas erat sagittis id. Nunc vulputate risus nec
//           aliquet congue. Ut commodo elit ex, at fringilla libero accumsan
//           lacinia. Quisque vitae condimentum magna, eget cursus arcu. Duis id
//           libero ac nibh molestie consequat quis ut nunc. Mauris consequat ante
//           vel sapien ultrices, at varius orci gravida. Suspendisse fringilla non
//           leo dignissim tincidunt. Suspendisse porta erat ligula, ac volutpat
//           sapien volutpat ac. Sed interdum ullamcorper pretium. Sed sagittis
//           egestas urna, at vulputate tellus viverra at. Phasellus eget
//           sollicitudin dui. Ut a rutrum urna. Aenean tempus leo diam, quis
//           scelerisque dolor molestie in. Praesent sem diam, consequat sit amet
//           tortor sed, posuere pretium arcu. Vivamus pharetra purus non suscipit
//           accumsan. Nam ultricies tellus mollis magna semper, vitae imperdiet
//           augue tincidunt.
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
//           sapien ex, vel egestas erat sagittis id. Nunc vulputate risus nec
//           aliquet congue. Ut commodo elit ex, at fringilla libero accumsan
//           lacinia. Quisque vitae condimentum magna, eget cursus arcu. Duis id
//           libero ac nibh molestie consequat quis ut nunc. Mauris consequat ante
//           vel sapien ultrices, at varius orci gravida. Suspendisse fringilla non
//           leo dignissim tincidunt. Suspendisse porta erat ligula, ac volutpat
//           sapien volutpat ac. Sed interdum ullamcorper pretium. Sed sagittis
//           egestas urna, at vulputate tellus viverra at. Phasellus eget
//           sollicitudin dui. Ut a rutrum urna. Aenean tempus leo diam, quis
//           scelerisque dolor molestie in. Praesent sem diam, consequat sit amet
//           tortor sed, posuere pretium arcu. Vivamus pharetra purus non suscipit
//           accumsan. Nam ultricies tellus mollis magna semper, vitae imperdiet
//           augue tincidunt.
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
//           sapien ex, vel egestas erat sagittis id. Nunc vulputate risus nec
//           aliquet congue. Ut commodo elit ex, at fringilla libero accumsan
//           lacinia. Quisque vitae condimentum magna, eget cursus arcu. Duis id
//           libero ac nibh molestie consequat quis ut nunc. Mauris consequat ante
//           vel sapien ultrices, at varius orci gravida. Suspendisse fringilla non
//           leo dignissim tincidunt. Suspendisse porta erat ligula, ac volutpat
//           sapien volutpat ac. Sed interdum ullamcorper pretium. Sed sagittis
//           egestas urna, at vulputate tellus viverra at. Phasellus eget
//           sollicitudin dui. Ut a rutrum urna. Aenean tempus leo diam, quis
//           scelerisque dolor molestie in. Praesent sem diam, consequat sit amet
//           tortor sed, posuere pretium arcu. Vivamus pharetra purus non suscipit
//           accumsan. Nam ultricies tellus mollis magna semper, vitae imperdiet
//           augue tincidunt.
//         </p>
//       </Container>
//     </Container>
//   );
// };

const PageNotFound = () => {
  return (
    <>
      <h3>Page Not Found</h3>
    </>
  );
};

export default PageNotFound;
