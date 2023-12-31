import React from 'react';
import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  useTheme,
  useColorMode,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();

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
          <Heading textAlign={'center'}>Welcome Back</Heading>
          <Input
            placeholder="Email Id"
            type="email"
            required
            focusBorderColor={
              colorMode === 'light' ? theme.colors.second : theme.colors.third
            }
            borderColor={
              colorMode === 'light' ? theme.colors.first : theme.colors.fourth
            }
            _hover={{
              borderColor: `${
                colorMode === 'light' ? theme.colors.second : theme.colors.third
              }`,
            }}
            sx={{
              '::placeholder': { color: `gray.500` },
            }}
          />
          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={
              colorMode === 'light' ? theme.colors.second : theme.colors.third
            }
            borderColor={
              colorMode === 'light' ? theme.colors.first : theme.colors.fourth
            }
            _hover={{
              borderColor: `${
                colorMode === 'light' ? theme.colors.second : theme.colors.third
              }`,
            }}
            sx={{
              '::placeholder': { color: `gray.500` },
            }}
          />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link>Forget Password?</Link>
          </Button>
          <Button
            bg={
              colorMode === 'light' ? theme.colors.second : theme.colors.third
            }
            _hover={{
              background: `${
                colorMode === 'light' ? theme.colors.sixth : theme.colors.fourth
              }`,
            }}
            textColor={'white'}
            type="submit"
          >
            Log In
          </Button>
          <Text alignSelf={'flex-end'}>
            Don't have an account?{'  '}
            <Button
              variant={'link'}
              alignSelf={'flex-end'}
              as={Link}
              to="/signup"
              textColor={
                colorMode === 'light' ? theme.colors.sixth : theme.colors.third
              }
              _hover={{
                textColor:
                  colorMode === 'light'
                    ? theme.colors.fourth
                    : theme.colors.first,
                textDecoration: 'underline',
              }}
            >
              Sign up
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
