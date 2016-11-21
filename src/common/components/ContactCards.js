import React from 'react';

import ContactCard from 'components/common/ContactCard';

const ContactCards = ({ contacts }) => {
    const cards = contacts.map(contact => <ContactCard contact={contact} />);

    return (
        <div className='contact-cards'>
            {cards}
        </div>
    )
}

export ContactCards;
