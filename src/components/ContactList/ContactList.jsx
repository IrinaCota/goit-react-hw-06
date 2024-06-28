import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { selectContacts } from '../../redux/contactSlice';
import { selectNameFilter } from '../../redux/filterSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  
  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <ul className={css.list}>
      {filteredContacts.map(item => (
        <li key={item.id}>
<Contact item={item} />
      
        </li>
      ))}
    </ul>
  );
}
