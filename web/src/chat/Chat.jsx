import React from 'react'
import PropTypes from 'prop-types'
import { Flex} from "rebass"
import MessageComposer from './MessageComposer'
import MessageList from './MessageList'

const Chat = props => {
  return (
    <Flex flex="1" flexDirection="column">
      <MessageList />
      <MessageComposer/> 
    </Flex>  
  )
}

Chat.propTypes = {

}

export default Chat
