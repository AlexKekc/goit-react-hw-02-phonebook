import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactData,
  DeleteBtn,
} from './ContactsListItem.styled.js';

export const ContactsItem = ({ id, name, number }) => {
  return (
    <ContactItem key={id}>
      <ContactData>{name}: </ContactData>
      <ContactData>{number}</ContactData>
      <DeleteBtn type="button">Delete</DeleteBtn>
    </ContactItem>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
