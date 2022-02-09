import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import {Formik, Field, Form} from 'formik';

const form = () => {
    return <div>
        <Container>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}

                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
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

                        {/* <Row>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="name" classname="form-label">Name</label>
                                    <input type="text" name="name" onChange={handleChange} onBlur={handleBlur}
                                           value={values.name} placeholder="Enter Name" className="form-control"/>
                                    {errors.name && touched.name && errors.name}
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="email_address" classname="form-label">Email Address</label>
                                    <input type="email" name="email_address" onChange={handleChange}
                                        onBlur={handleBlur} value={values.email_address}
                                        placeholder="Enter email address" className="form-control"
                                    />
                                    {errors.email_address && touched.email_address && errors.email_address}
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="subject" classname="form-label">Subject</label>
                                    <input type="text" name="subject" onChange={handleChange}
                                        onBlur={handleBlur} value={values.subject}
                                        placeholder="Enter Subject" className="form-control"
                                    />
                                    {errors.subject && touched.subject && errors.subject}
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="message" classname="form-label">Message</label>
                                    <Field name="message" as="textarea" className="form-control"
                                           onChange={handleChange}
                                           onBlur={handleBlur} value={values.message}/>
                                    {errors.message && touched.message && errors.message}
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6}>
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                    Submit
                                </button>
                            </Col>
                        </Row> */}


                        <Row>
                            <Col md={12}>
                                <div className='from_contentblock contactinfo'>
                                    <h2 className='from_title' >Send Us Message</h2>
                                    <div className='contact_from' >
                                        <div className='from_row'>
                                        <div className='inp_from'>
                                                    <input type="text" name="name" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.name} placeholder="Enter Name" className="form-control inp_text"/>
                                                    {errors.name && touched.name && errors.name}

                                        </div>
                                        <div className='inp_from'>
                                                <input type="email" name="email_address" onChange={handleChange}
                                                        onBlur={handleBlur} value={values.email_address}
                                                        placeholder="Enter email address" className="form-control inp_text"
                                                    />
                                                    {errors.email_address && touched.email_address && errors.email_address}

                                        </div>
                                        <div className='inp_from'>
                                                    <input type="text" name="subject" onChange={handleChange}
                                                        onBlur={handleBlur} value={values.subject}
                                                        placeholder="Enter Subject" className="form-control inp_text"
                                                    />
                                                    {errors.subject && touched.subject && errors.subject}
                                        </div>
                                        </div>
                                        <div className='from_row'>
                                        <div className='inp_from2 textareainfo'>
                                            {/* <textarea value='' placeholder='Your Message*' className='inp_text '  /> */}
                                                    <Field name="message" as="textarea" className="form-control inp_text"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} value={values.message}/>
                                                    {errors.message && touched.message && errors.message}
                                        </div>
                                        </div>
                                        <div className='def_from_btn'>
                                            {/* <input type="submit" value="Send" className='def_btn' /> */}
                                            <button type="submit" disabled={isSubmitting} className="def_btn">
                                                    Submit
                                                </button>
                                        </div>

    
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </form>
                )}
            </Formik>
        </Container>
    </div>;
};

export default form;
