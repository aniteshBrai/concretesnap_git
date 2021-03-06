import React from "react";
import signupbanner from "../../assets/images/signupbanner.png";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import { handleSignup } from "../../store/actions/authAction";
import { useDispatch } from "react-redux";

const index = () => {
  const dispatch = useDispatch();
  const [show, setDivHandler] = useState(true);
  const typeChange = () => setDivHandler(!show);

  const homeSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is a required field'),
    last_name: Yup.string().required('Last name is a required field'),
    email_address: Yup.string().required('Email address is a required field').email("Invalid email format"),
    confirm_email_address: Yup.string()
      .required('Confirm email address is a required field')
      .email("Invalid email format")
      .oneOf(
        [Yup.ref("email_address")],
        "Confirm email address must match email address"
      ),
    password: Yup.string()
      .required('Password is a required field')
      .min(8, "Password must be at least 8 characters"),
    confirm_password: Yup.string()
      .required('Confirm passwordis a required field')
      .min(8, "Password must be at least 8 characters")
      .oneOf(
        [Yup.ref("password")],
        "Confirm Passwords must match New Password"
      ),
    phone_number: Yup.string().required('Phone number is a required field'),
  });

  const contractorSchema = Yup.object().shape({
    business_name: Yup.string().required('Business name is a required field'),
    phone_number: Yup.string().required('Phone number is a required field'),
    business_address:Yup.string().required('Business address is a required field'),
    state: Yup.string().required('State is a required field'),
    city: Yup.string().required('City is a required field'),
    zip_code: Yup.string().required('Zip code is a required field'),
    email_address: Yup.string().required('Email address is a required field').email("Invalid email format"),
    confirm_email_address: Yup.string()
      .required('Confirm email address is a required field')
      .email("Invalid email format")
      .oneOf(
        [Yup.ref("email_address")],
        "Confirm email address must match email address"
      ),
    password: Yup.string()        
      .required('Password is a required field')
      .min(8, "Password must be at least 8 characters"),
    confirm_password: Yup.string()
      .required('Confirm passwordis a required field')
      .min(8, "Password must be at least 8 characters")
      .oneOf(
        [Yup.ref("password")],
        "Confirm Passwords must match New Password"
      ),
  });

  const homeValues = {
    first_name: "",
    last_name: "",
    email_address: "",
    confirm_email_address: "",
    password: "",
    confirm_password: "",
    phone_number: "",
  };

  const contractorValues = {
    business_name: "",
    email_address: "",
    confirm_email_address: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    business_address: "",
    state: "",
    city: "",
    zip_code: "",
  };

  return (
    <>
      <div className="banner_add innerbanner">
        <div
          className="banner_panel"
          style={{ backgroundImage: `url("${signupbanner.src}")` }}
        >
          <Container>
            <Row>
              <Col sm={12}>
                <div className="banner_cont">
                  <h2>
                    <span>Login / register</span>
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
          <div className="from_contentblock modf_cont_block from_width_lg">
            <Container>
              <Row>
                <Col sm={12}>
                  <div className="form-group">
                    <h2 className="from_title">Register As</h2>
                    <p className="inp_desc_cont">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <div className="rediotab">
                      <div
                        className="rediotab_opt_wrap"
                        role="group"
                        aria-labelledby="my-radio-group"
                        onChange={(e) => {
                          typeChange(e);
                        }}
                      >
                        <div className="rediotab_opt">
                          <input
                            type="radio"
                            name="register_as"
                            value="false"
                            id="contractor"
                          />
                          <label htmlFor="contractor"> Contractor</label>
                        </div>
                        <div className="rediotab_opt">
                          <input
                            type="radio"
                            name="register_as"
                            value="true"
                            defaultChecked={show}
                            id="home_owner"
                          />
                          <label htmlFor="home_owner"> Home owner</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Formik
                validationSchema={show ? homeSchema : contractorSchema}
                initialValues={show ? homeValues : contractorValues}
                validate={(values) => {
                  const errors = {};
                  return errors;
                }}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                  let owner = {
                    homeOwner: show,
                  };

                  let allValues = {
                    ...values,
                    ...owner,
                  };

                  dispatch(handleSignup(allValues));
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
                    {show ? (
                      <div>
                        <Row>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label htmlFor="email" className="form-label">
                                First Name
                              </label>
                              <input
                                type="text"
                                name="first_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.first_name}
                                placeholder="Enter First Name"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.first_name &&
                                  touched.first_name &&
                                  errors.first_name}
                              </p>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label htmlFor="email" className="form-label">
                                Last Name
                              </label>
                              <input
                                type="text"
                                name="last_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.last_name}
                                placeholder="Enter Last Name"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.last_name &&
                                  touched.last_name &&
                                  errors.last_name}
                              </p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label
                                htmlFor="email_address"
                                className="form-label"
                              >
                                Email Address
                              </label>
                              <input
                                type="email"
                                name="email_address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email_address}
                                placeholder="Enter email address`"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.email_address &&
                                  touched.email_address &&
                                  errors.email_address}
                              </p>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label
                                htmlFor="confirm_email_address"
                                className="form-label"
                              >
                                Confirm Email Address
                              </label>
                              <input
                                type="email"
                                name="confirm_email_address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirm_email_address}
                                placeholder="Confirm email address"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.confirm_email_address &&
                                  touched.confirm_email_address &&
                                  errors.confirm_email_address}
                              </p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label htmlFor="email" className="form-label">
                                Password
                              </label>
                              <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Enter password"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.password &&
                                  touched.password &&
                                  errors.password}
                              </p>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label
                                htmlFor="confirm_password"
                                className="form-label"
                              >
                                Confirm Password
                              </label>
                              <input
                                type="password"
                                name="confirm_password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirm_password}
                                placeholder="Enter Confirm Password"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.confirm_password &&
                                  touched.confirm_password &&
                                  errors.confirm_password}
                              </p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label
                                htmlFor="phone_number"
                                className="form-label"
                              >
                                Phone Number
                              </label>
                              <input
                                type="text"
                                name="phone_number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone_number}
                                placeholder="Enter Phone Number"
                                className="form-control"
                              />
                              <p className="error">
                                {" "}
                                {errors.phone_number &&
                                  touched.phone_number &&
                                  errors.phone_number}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ) : (
                      <div>
                        <Row>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label
                                htmlFor="business_name"
                                className="form-label"
                              >
                                Business Name
                              </label>
                              <input
                                type="text"
                                name="business_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.business_name}
                                placeholder="Enter Business Name"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.business_name &&
                                  touched.business_name &&
                                  errors.business_name}
                              </p>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label
                                htmlFor="phone_number"
                                className="form-label"
                              >
                                Phone Number
                              </label>
                              <input
                                type="text"
                                name="phone_number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone_number}
                                placeholder="Enter Phone Number"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.phone_number &&
                                  touched.phone_number &&
                                  errors.phone_number}
                              </p>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label
                                htmlFor="email_address"
                                className="form-label"
                              >
                                Email Address
                              </label>
                              <input
                                type="email"
                                name="email_address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email_address}
                                placeholder="Enter email address"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.email_address &&
                                  touched.email_address &&
                                  errors.email_address}
                              </p>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label
                                htmlFor="confirm_email_address"
                                className="form-label"
                              >
                                Confirm Email Address
                              </label>
                              <input
                                type="email"
                                name="confirm_email_address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirm_email_address}
                                placeholder="Confirm email address"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.confirm_email_address &&
                                  touched.confirm_email_address &&
                                  errors.confirm_email_address}
                              </p>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label htmlFor="email" className="form-label">
                                Password
                              </label>
                              <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Enter password"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.password &&
                                  touched.password &&
                                  errors.password}
                              </p>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label
                                htmlFor="confirm_password"
                                className="form-label"
                              >
                                Confirm Password
                              </label>
                              <input
                                type="password"
                                name="confirm_password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirm_password}
                                placeholder="Enter Confirm Password"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.confirm_password &&
                                  touched.confirm_password &&
                                  errors.confirm_password}
                              </p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label
                                htmlFor="business_address"
                                className="form-label"
                              >
                                Business Address
                              </label>
                              <input
                                type="text"
                                name="business_address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.business_address}
                                placeholder="Enter Business Address"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.business_address &&
                                  touched.business_address &&
                                  errors.business_address}
                              </p>
                            </div>
                          </Col>

                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label htmlFor="state" className="form-label">
                               State
                              </label>
                              <select
                                name="state"
                                value={values.state}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form-control"
                              >
                                <option value="" label="Select a state" />
                                <option value="WB" label="WB" />
                                <option value="Jharkhand" label="Jharkhand" />
                                <option value="Bihar" label="Bihar" />
                              </select>
                              <p className="error">
                                {errors.state && touched.state && (
                                  <div className="input-feedback">
                                    {errors.state}
                                  </div>
                                )}
                              </p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label htmlFor="city" className="form-label">
                                City
                              </label>
                              <input
                                type="text"
                                name="city"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                                placeholder="Enter City"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.city && touched.city && errors.city}
                              </p>
                            </div>
                          </Col>

                          <Col sm={6}>
                            <div className="form-group def_inp_text inp_from">
                              <label htmlFor="zip_code" className="form-label">
                                Zip Code
                              </label>
                              <input
                                type="text"
                                name="zip_code"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.zip_code}
                                placeholder="Enter Zip Code"
                                className="form-control"
                              />
                              <p className="error">
                                {errors.zip_code &&
                                  touched.zip_code &&
                                  errors.zip_code}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    )}
                    <Row>
                      <Col sm={12}>
                        <div className="def_from_btn">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="def_btn"
                          >
                            Register
                          </button>
                        </div>

                        <div className="def_cont_center modf_opt">
                          Already have an account?{" "}
                          <Link href="/login">
                            <strong className="linkopt">Login</strong>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </form>
                )}
              </Formik>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
