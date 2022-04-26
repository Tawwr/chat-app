import { useState } from 'react'
import Message from './message.component'
import { Grid } from '@mui/material'
const MessagesContainer = () => {
    const [ messages, setMessages ] = useState([
        'Hi',
        'How are you?',
        'Fine'
    ])
    return ( 
        <Grid container direction="column">
        { messages.map((message, idx) => <Message key={idx} text={message} mobile={true} />) }
        </Grid>
     );
}
 
export default MessagesContainer;