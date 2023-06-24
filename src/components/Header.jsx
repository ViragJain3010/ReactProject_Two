import React from 'react';
import {
  Button,
  Drawer,
  DrawerOverlay,
  useDisclosure,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  VStack,
  HStack,
  useTheme,
  useColorMode,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const buttonContent = ['Home', 'Popular', 'Trending', 'Upload'];
  const hoverColor =
    colorMode === 'light' ? theme.colors.fourth : theme.colors.first;

  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={4}
        left={4}
        bgColor={`${theme.colors.first}`}
        _hover={{ bg: `${theme.colors.second}` }}
        borderRadius={'full'}
        p={0}
        w={10}
        h={10}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={20} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={'sm'}>
        <DrawerOverlay />
        <DrawerContent
          bg={
            colorMode === 'light' ? theme.colors.bg_light : theme.colors.fifth
          }
        >
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              {buttonContent.map((item, index) => (
                <Button
                  onClick={onClose}
                  bg={
                    colorMode === 'light'
                      ? theme.colors.third
                      : theme.colors.second
                  }
                  bgClip={'text'}
                  _hover={{
                    textColor: `${hoverColor}`,
                  }}
                >
                  <Link to={`/${item}`}> {item} </Link>
                </Button>
              ))}
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={10}
              left={0}
              w={'full'}
              justifyContent={'space-around'}
            >
              <Button
                size={'lg'}
                onClick={onClose}
                bgGradient={`${theme.gradients.button}`}
                textColor={'white'}
                borderRadius={'full'}
                px={8}
                _hover={{
                  bgGradient: `${theme.gradients.button_hover}`,
                  opacity: 0.9,
                }}
              >
                <Link to={'/login'}> Login </Link>
              </Button>
              <Button
                px={8}
                borderRadius={'full'}
                onClick={onClose}
                border={`2px solid ${
                  colorMode === 'light'
                    ? theme.colors.third
                    : theme.colors.second
                }`}
                textColor={
                  colorMode === 'light'
                    ? theme.colors.third
                    : theme.colors.second
                }
                _hover={{
                  border: `2px solid ${hoverColor}`,
                  textColor: `${hoverColor}`,
                }}
              >
                <Link to={'/signup'}> Sign Up </Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
