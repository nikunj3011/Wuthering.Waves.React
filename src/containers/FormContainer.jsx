import React from 'react';
import ClientsLogo from '../components/ClientsLogo';
import Form from '../components/Form';
import FormText from '../components/FormText';
import SectionGridLines from '../components/SectionGridLines';

const FormContainer = () => {
    return (
        <section className="contact_us bg-dark-200">
            <div className="container">
                <div className="row justify-content-between">
                    <FormText></FormText>
                    <div className="col-lg-6">
                        <Form></Form>
                    </div>
                </div>
                <ClientsLogo></ClientsLogo>
            </div>
            <SectionGridLines></SectionGridLines>
        </section>
    );
};

export default FormContainer;