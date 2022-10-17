import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactsForm,
  ContactsLabel,
  ContactsInput,
  SubmitButton,
} from './AddingContactsForm.styled';

export class AddingContactsForm extends Component {
  state = { name: '', number: '' };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmitForm(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactsForm onSubmit={this.handleSubmit}>
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
        </ContactsLabel>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </ContactsForm>
    );
  }
}

AddingContactsForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
