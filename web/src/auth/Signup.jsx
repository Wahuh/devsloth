import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text } from 'rebass'
import { Input } from '@rebass/forms'
import GitHubButton from './GitHubButton'

const Signup = (props) => {
  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='100%'
    >
      <Flex
        as='form'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        sx={{ padding: '1rem' }}
      >
        <Text mb='2rem' color='white' fontWeight={700}>
          Signup for your account
        </Text>

        <Input
          color='white'
          placeholder='Enter email'
          sx={{
            fontFamily: 'inherit',
            border: '2px solid grey',
            borderRadius: '4px',
            mb: '2rem',
          }}
        />
        <GitHubButton />
      </Flex>
    </Flex>
  )
}

Signup.propTypes = {}

export default Signup
