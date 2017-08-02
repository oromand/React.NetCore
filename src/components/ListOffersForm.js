import React from 'react'; 
import {Row, Input, Button, Icon} from "react-materialize"
 
   export class ListOffersForm extends React.Component {
        render() {
            return( 
                <div className="section">
                   <Row>
                        <Input s={5} label="Poste" validate><Icon>account_circle</Icon></Input>
                        <Input s={5} label="Région" validate type='tel'><Icon>phone</Icon></Input>
                        <Button floating large className='green' waves='light' icon='search' />
                    </Row>
                </div> 
            );
        }
    }
export default ListOffersForm;