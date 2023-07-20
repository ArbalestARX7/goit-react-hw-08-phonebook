import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const Contacts = () => {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
