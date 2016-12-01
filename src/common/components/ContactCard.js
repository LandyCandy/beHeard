import React from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {GridTile} from 'material-ui/GridList';

const ContactCard = ({ contact }) => {
    const {name, party, state} = contact;
    const subtitle = `Party: ${party} - State: ${state}`
    return (
      <GridTile
        cols={1}
        rows={1}
      >
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
        </GridTile>
    );
}

export default ContactCard;
