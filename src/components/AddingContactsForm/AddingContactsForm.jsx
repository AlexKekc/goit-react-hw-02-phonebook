import React, { Component } from 'react';
import { Formik } from 'formik';
import { contactsSchema } from '../../validation';
import PropTypes from 'prop-types';
import {
  ContactsForm,
  ContactsLabel,
  ContactsInput,
  ContactsError,
  SubmitButton,
} from './AddingContactsForm.styled';

export class AddingContactsForm extends Component {
  state = { name: '', number: '' };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
    this.resetForm();
  };

  handleFormikSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);

    setSubmitting(false);
    resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Formik
        initualValues={this.state}
        validationSchema={contactsSchema}
        onSubmit={this.handleFormikSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <ContactsForm onSubmit={this.handleFormSubmit}>
              <ContactsLabel htmlFor="name">
                Name
                <ContactsInput
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
                <ContactsError name="name" component="span" />
              </ContactsLabel>
              <ContactsLabel htmlFor="number">
                Number
                <ContactsInput
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  value={this.state.number}
                  onChange={this.handleInputChange}
                />
                <ContactsError name="number" component="span" />
              </ContactsLabel>
              <SubmitButton type="submit" disabled={isSubmitting}>
                Add contact
              </SubmitButton>
            </ContactsForm>
          );
        }}
      </Formik>
    );
  }
}

AddingContactsForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
