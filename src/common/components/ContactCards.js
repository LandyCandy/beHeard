import React from 'react';
import ContactCard from 'common/components/ContactCard';

const ContactCards = ({ contacts }) => {
    const cards = contacts.map(contact => <ContactCard contact={contact} />);
    return (
        <div>
          {cards}
        </div>
    );
}

export default ContactCards;
