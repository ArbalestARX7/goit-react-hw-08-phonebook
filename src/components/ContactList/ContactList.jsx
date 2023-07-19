import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { removeContactThunk } from 'redux/contactsThunk';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  return (
    <>
      <ul className={css.contactList}>
        {getFilteredContacts().map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            {name}:<span className={css.contactNumber}>{number}</span>
            <button
              className={css.listBtn}
              onClick={() => dispatch(removeContactThunk(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
