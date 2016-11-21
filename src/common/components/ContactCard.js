import React from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const ContactCard = ({ contact }) => {
    const {name, party, state} = contact;
    const subtitle = `Party: ${party} - State: ${state}`
    return (
        <Card>
            <CardHeader
                title={name}
                subtitle={subtitle}
            />
                <CardActions>
                </CardActions>
            <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
        </Card>

    );
}

export default ContactCard;
