import React from 'react';
import {
  Box,
  Image,
  Heading,
  Container,
  Stack,
  Text,
  useTheme,
  useColorMode,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.png';

const Home = () => {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box>
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p={16}>
          <Heading
            textTransform={'uppercase'}
            py={2}
            w={'fit-content'}
            m={'auto'}
            bgGradient={`linear(to-bl, ${
              colorMode === 'light' ? theme.colors.second : theme.colors.first
            } , ${
              colorMode === 'light' ? theme.colors.fourth : theme.colors.third
            })`}
            bgClip="text"
            borderBottom={`2px solid ${theme.colors.third}`}
          >
            Services
          </Heading>
          <Stack
            h={'full'}
            p={4}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <Image
              src={img5}
              filter={''}
              h={['40', '400']}
              transform="scaleX(-1)"
            />
            <Text
              letterSpacing={'widest'}
              lineHeight={'190%'}
              p={['4', '16']}
              textAlign={'center'}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              dignissimos quas et porro? Eum suscipit architecto inventore sunt?
              Dicta nostrum aliquid commodi molestiae possimus. Voluptate, fugit
              eligendi dolorum dolore illum incidunt quod ut! Porro, quae
              temporibus? Architecto asperiores, laudantium enim veritatis eius
              laboriosam doloribus rem explicabo, quidem aliquam distinctio
              officia amet provident repellendus laborum aperiam libero.
              Officiis magni necessitatibus consectetur tempore eligendi ex
              corrupti quo eius quod voluptate possimus mollitia unde, alias
              voluptates inventore? Eaque dignissimos voluptas minima
              perspiciatis rerum pariatur recusandae nisi odit vel repudiandae
              voluptatem, quos alias ea modi molestias magni, beatae molestiae
              debitis facere? Accusamus aspernatur assumenda corporis
              consequuntur natus iure veritatis minima labore! Nobis
              reprehenderit excepturi, sapiente quidem, necessitatibus
              accusantium aperiam nemo dolor est non eligendi sequi explicabo.
              Accusamus nesciunt, eum fugit deserunt tempora quaerat. Deleniti
              distinctio ducimus perferendis amet impedit magnam minus sapiente
              perspiciatis laudantium vero similique omnis odio ab nam corrupti,
              blanditiis atque incidunt.
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,50%)',
  textTransform: 'uppercase',
  p: '4',
};

const MyCarousel = () => {
  return (
    <Carousel
      stopOnHover={false}
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      autoPlay
      infiniteLoop
      interval={2000}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img3} h="full" w="full" objectFit={'cover'}/>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          The World is Here
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img4} h="full" w="full" objectFit={'cover'}/>
        <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
          This is Tommorow
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img2} h="full" w="full" objectFit={'cover'}/>
        <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
          The Future is Now
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} h="full" w="full" objectFit={'cover'}/>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Begin your journey
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
