import PropTypes from 'prop-types';
import { Contacts } from './ContactsList.styled';
import { ContactsItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = ({ contacts }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id} name={name} number={number} />
      ))}
    </Contacts>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
};
