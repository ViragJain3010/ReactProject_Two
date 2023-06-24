import React from 'react';
import { Container, VStack, Heading, Input, useTheme, useColorMode } from '@chakra-ui/react';

const Login = () => {
  const theme = useTheme();
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={'96'}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>
          <Input
            placeholder="Email Id"
            type="email"
            required
            focusBorderColor={colorMode==='light' ? theme.colors.second : theme.colors.third}
            borderColor={colorMode==="light" ? theme.colors.first: theme.colors.fourth}
            _hover={{ borderColor: `${colorMode==='light' ? theme.colors.second : theme.colors.third}` }}
            sx={{
              '::placeholder': { color: `${theme.colors.placeHolder}` },
            }}
          />
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
