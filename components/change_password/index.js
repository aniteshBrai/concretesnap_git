import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import loginbanner from "../../assets/images/loginbanner.png";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../store/actions/changePassword";

const schema = Yup.object().shape({
    old_password: Yup.string().required('Old password is a required field').min(8, 'Password must be at least 8 characters'),
    new_password: Yup.string().required('New password is a required field').min(8, 'Password must be at least 8 characters'),
    confirm_password: Yup.string().required('Confirm password is a required field').min(8, 'Password must be at least 8 characters')
        .oneOf([Yup.ref('new_password')], 'Confirm Passwords must match New Password')
});

const index = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className='banner_add innerbanner'>
                <div className='banner_panel'  style={{ backgroundImage: `url("${loginbanner.src}")` }} >
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <div className='banner_cont'>
                                    <h2><span>CHANGE PASSWORD</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className='main_content_wrap fromdetails'>
                <div className='main_content_block'>
                    <Container>
                        <Formik
                            validationSchema={schema}
                            initialValues={{
                                old_password: '',
                                new_password: '',
                                confirm_password: ''
                            }}
                            validate={values => {
                                const errors = {};
                                return errors;
                            }}
                            onSubmit={(values) => {
                                const { old_password, new_password, confirm_password } = values;
                                dispatch(changePassword({ old_password, new_password, confirm_password }));
                            }}

                            // onSubmit={(values, {setSubmitting}) => {
                            //     setTimeout(() => {
                            //         alert(JSON.stringify(values, null, 2));
                            //         setSubmitting(false);
                            //     }, 400);
                            // }}
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
                                            <div className='from_contentblock modf_cont_block logincontent'>

                                                <h2 className='from_title' >Change Password</h2>
                                                <p className='inp_desc_cont'>Lorem ipsum dolor sit amet, consectetur</p>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="old_password" className="form-label">Old assword</label>
                                                    <input
                                                        type="password"
                                                        name="old_password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.old_password}
                                                        placeholder="Enter Old password"
                                                        className="form-control"
                                                    />
                                                    <p className='error'>
                                                        {errors.old_password && touched.old_password && errors.old_password} 
                                                        </p>
                                                </div>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="new_password" className="form-label">New Password</label>
                                                    <input
                                                        type="password"
                                                        name="new_password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.new_password}
                                                        placeholder="Enter New password"
                                                        className="form-control"
                                                    />
                                                    <p className='error'>{errors.new_password && touched.new_password && errors.new_password}
                                                    </p>
                                                </div>
                                                <div className="form-group def_inp_text inp_from">

                                                    <label htmlFor="confirm_password" className="form-label">Confirm
                                                        Password</label>
                                                    <input
                                                        type="password"
                                                        name="confirm_password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.confirm_password}
                                                        placeholder="Enter Confirm Password"
                                                        className="form-control"
                                                    />
                                                    <p className='error'>
                                                        {errors.confirm_password && touched.confirm_password && errors.confirm_password}
                                                    </p>
                                                </div>

                                                <div className='def_from_btn'>
                                                    <button type="submit" disabled={isSubmitting}
                                                            className="def_btn">Submit
                                                    </button>
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
        </> );
};

export default index;
