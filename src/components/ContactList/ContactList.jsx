import { Button } from '@mui/material';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/slice';
import { getContactsThunk, removeContactThunk } from 'redux/contacts/thunk';
import { getFilter } from 'redux/filter/slice';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

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
      <h2>Contacts</h2>
      <ul className={css.contactList}>
        {getFilteredContacts().map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            {name}:<span className={css.contactNumber}>{number}</span>
            <Button
              startIcon={<DeleteIcon />}
              variant="outlined"
              color="error"
              onClick={() => dispatch(removeContactThunk(id))}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
