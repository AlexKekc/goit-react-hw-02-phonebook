import React, { Component } from 'react';
import { AddingContactsForm } from './AddingContactsForm/AddingContactsForm';
import { SearchingFilter } from './SearchingFilter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
// import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHadler = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <AddingContactsForm onSubmitForm={this.formSubmitHadler} />

        <h2>Contacts</h2>
        <SearchingFilter filter={filter} />
        <ContactsList contacts={contacts} />
      </>
    );
  }
}
