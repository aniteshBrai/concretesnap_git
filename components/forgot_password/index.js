import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../store/actions/forgotPassword";
import Link from "next/link";
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
});

const index = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="banner_add innerbanner">
        <div className="banner_panel" style={{ backgroundImage: `` }}>
          <Container>
            <Row>
              <Col sm={12}>
                <div className="banner_cont">
                  <h2>
                    <span>FORGOT PASSWORD</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quam velit,
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="main_content_wrap fromdetails">
        <div className="main_content_block">
          <Container>
            <Formik
              validationSchema={schema}
              initialValues={{
                email: "",
              }}
              validate={(values) => {
                const errors = {};
                return errors;
              }}
              onSubmit={(values, { resetForm }) => {
                const { email } = values;
                dispatch(forgotPassword({ email }));
                resetForm();
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col sm={12}>
                      <div className="from_contentblock modf_cont_block ">
                        <h2 className="from_title">Forgot Password</h2>
                        <p className="inp_desc_cont">
                          Lorem ipsum dolor sit amet, consectetur
                        </p>

                        <div className="form-group def_inp_text inp_from">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Enter email id / username"
                            className="form-control"
                          />
                          <p className="error">
                            {errors.email && touched.email && errors.email}
                          </p>
                        </div>
                        <div className="def_from_btn">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="def_btn"
                          >
                            Submit
                          </button>
                        </div>

                        <div className="def_cont_center modf_opt">
                          <Link href="/login">
                            <strong className="linkopt">Login</strong>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </form>
              )}
            </Formik>
          </Container>
        </div>
      </div>
    </>
  );
};

export default index;
