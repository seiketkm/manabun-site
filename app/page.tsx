'use client';

import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import useLoginForm from '@/features/login/useLoginForm';

export default function Home() {
  const submit = async (email: string, password: string) => {
    // uncomment this code to make a request to the API
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ email, password })
    // });

    // const data = await response.json();

    // Redirect to
    window.location.href = 'https://tigmanabun.jp/user/sign_in';
  };

  const { email, password, disabled, handleEmailChange, handlePasswordChange, handleSubmit } = useLoginForm(submit);

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="grey.100" padding={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input
          placeholder="example@manabun.jp"
          variant="filled"
          mb={3}
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          placeholder="********"
          variant="filled"
          mb={6}
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button mb={6} colorScheme="teal" onClick={handleSubmit} isDisabled={disabled}>
          Log in
        </Button>
      </Flex>
    </Flex>
  );
}
