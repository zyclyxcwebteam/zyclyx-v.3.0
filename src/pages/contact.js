import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import * as EmailValidator from "email-validator";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import ContactImage from "../../static/images/contact.svg";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Contact = () => {
  return (
    <Layout showBanner={false}>
      <HeroBanner
        title="For better help and business development"
        image={ContactImage}
      />
      <Container fluid>
        <Row>
          <Col sm="12" md="6" className="contact-info-wrapper">
            <div>
              <h1>Signup</h1>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                  // same shape as initial values
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field name="firstName" />
                    {errors.firstName && touched.firstName ? (
                      <div>{errors.firstName}</div>
                    ) : null}
                    <Field name="lastName" />
                    {errors.lastName && touched.lastName ? (
                      <div>{errors.lastName}</div>
                    ) : null}
                    <Field name="email" type="email" />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                    <button type="submit">Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
          <Col sm="12" md="6" className="google-map-wrapper">
            <p>Google Map location</p>
          </Col>
        </Row>
      </Container>
      {/* spacer */}
      <Container className="py-4" />
    </Layout>
  );
};

export default Contact;
