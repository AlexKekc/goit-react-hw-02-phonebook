# Contact book

Written application for storing phone book contacts.

## Step 1

The application should consist of a form and a list of contacts. In the current
step, implement adding a contact name and displaying the contact list. The
application should not store contacts between different sessions (page refresh).

Used this input markup with built-in validation for the contact name.

```jsx
<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
```

The state stored in the parent component `<App>` must necessarily be as follows,
you can not add new properties.

```jsx
state = {
  contacts: [],
  name: '',
};
```

Each contact should be an object with `name` and `id` properties. To generate
identifiers, use any suitable package, such as
[nanoid](https://www.npmjs.com/package/nanoid).

## Step 2

Extended the functionality of the application by allowing users to add phone
numbers. To do this, I added `<input type="tel">` to the form and a property to
store its value in the state.

```jsx
state = {
  contacts: [],
  name: '',
  number: '',
};
```

I used this imput markup with built-in validation for the contact number.

```jsx
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
```

## Step 3

Added a search field that can be used to filter the list of contacts by name.

- A search field is a formless input whose value is written to a state
  (controlled element).
- The filtering logic is case insensitive.

```jsx
state = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};
```

## Step 4

Denied the user the ability to add contacts whose names are already present in
the phone book. When attempting to perform such an action, display an `alert`
with a warning.

## Step 5

Expanded the functionality of the application by allowing the user to delete
previously saved contacts.
