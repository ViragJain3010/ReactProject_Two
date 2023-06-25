import React from 'react';
import {
  Box,
  Stack,
  VStack,
  HStack,
  Heading,
  Input,
  Button,
  useTheme,
  Text,
} from '@chakra-ui/react';
import { MdSend } from 'react-icons/md';
import {
  AiOutlineCopyright,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';

const Footer = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        bgGradient={
          'linear-gradient(to-bl, #7ebdc3, #609da2, #427d82, #255f63, #004346);'
        }
        minH={'40'}
        p={16}
        color={'white'}
      >
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'strech'} w="full" px={4}>
            <Heading
              size="lg"
              textTransform={'uppercase'}
              textAlign={['center', 'left']}
            >
              Get Connected With Us
            </Heading>
            <HStack borderBottom={'2px solid white'} py={2}>
              <Input
                placeholder="Enter Your Email here"
                sx={{
                  '::placeholder': { color: `${theme.colors.placeHolder}` },
                }}
                border={'none'}
                outline={'none'}
                textColor={`${theme.colors.text}`}
                _hover={{ outline: `1px solid ${theme.colors.second}` }}
                _focus={{ outline: 'none', border: 'none' }}
              />
              <Button
                p={'0'}
                borderRadius={'0 20px 20px 0'}
                border={`1px solid ${theme.colors.first}`}
                bg={`${theme.colors.first}`}
                _hover={{ opacity: 0.9 }}
              >
                <MdSend size={20} />
              </Button>
            </HStack>
          </VStack>
          <VStack
            w={'full'}
            borderLeft={'1px solid white'}
            borderRight={'1px solid white'}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              Video Hub
            </Heading>
            <HStack>
              <AiOutlineCopyright />
              <Text>All rights reserved</Text>
            </HStack>
          </VStack>
          <VStack w={'full'}>
            <Heading size={'lg'} textTransform={'uppercase'}>
              Social Media
            </Heading>
            <HStack py={4}>
              <Button
                variant={'link'}
                textColor={'white'}
                fontWeight={'light'}
                px={6}
              >
                <a
                  href="http://instagram.com/viragjain3010/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram size={45} color={`${theme.colors.text}`} />
                </a>
              </Button>
              <Button
                variant={'link'}
                textColor={'white'}
                fontWeight={'light'}
                px={6}
              >
                <a
                  href="https://github.com/WhatIsThisVJ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={45} color={`${theme.colors.text}`} />
                </a>
              </Button>
              <Button
                variant={'link'}
                textColor={'white'}
                fontWeight={'light'}
                px={6}
              >
                <a
                  href="https://www.linkedin.com/in/virag-jain-b6a800223"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin size={45} color={`${theme.colors.text}`} />
                </a>
              </Button>
            </HStack>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
