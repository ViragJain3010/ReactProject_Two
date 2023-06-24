import React from 'react';
import {
  Container,
  VStack,
  HStack,
  useTheme,
  Input,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  const hoverColor =
    colorMode === 'light' ? theme.colors.third : theme.colors.fourth;

  return (
    <>
      <Container maxW={'container.xl'} h={'100vh'} p={16}>
        <VStack
          color={
            colorMode === 'light' ? theme.colors.second : theme.colors.third
          }
          h={'full'}
          bg={colorMode === 'light' ? 'gray.200' : 'gray.700'}
          justifyContent={'center'}
          borderRadius={'16'}
          border={'1px dashed gray'}
        >
          <label htmlFor="file-upload">
            <AiOutlineCloudUpload size={'10vmax'} cursor={'pointer'} />
          </label>
          <form>
            <HStack>
              <Input
                id="file-upload"
                required
                type="file"
                cursor={'pointer'}
                css={{
                  '&::file-selector-button': {
                    border: 'none',
                    width: 'calc(100% + 36px)',
                    height: '100%',
                    marginLeft: '-18px',
                    color: `${
                      colorMode === 'light' ? theme.colors.fourth : 'white'
                    }`,
                    backgroundColor: `${
                      colorMode === 'light' ? 'white' : '#404040'
                    }`,
                  },
                }}
              />
              <Button
                type="submit"
                bgColor={
                  colorMode === 'light'
                    ? theme.colors.second
                    : theme.colors.third
                }
                textColor={'white'}
                _hover={{ bg: hoverColor }}
              >
                Upload
              </Button>
            </HStack>
          </form>
        </VStack>
      </Container>
    </>
  );
};

export default Upload;
