import React, { useState } from 'react';
import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Box,
  useTheme,
  AspectRatio,
} from '@chakra-ui/react';
import YouTube from 'react-youtube';

const videoArr = ['CpJ_-ivw-Q4', '6QKLa-MTshw', '39MyRojv8BE', 'a0jXmcxOhx4'];

const Videos = () => {
  const theme = useTheme();
  const [videoSrc, setVideoSrc] = useState(videoArr[0]);

  const videoOptions = {
    width: '100%',
    height: '100%',
  };

  return (
    <>
      <Stack direction={['column', 'row']} h={'100%'}>
        <VStack w={'full'}>
          <Box w={'full'} py={6} px={16}>
            <AspectRatio ratio={16 / 9}>
              <YouTube videoId={videoSrc} opts={videoOptions} />
            </AspectRatio>
          </Box>
          <VStack
            alignItems={'flex-start'}
            p={'8'}
            w={'full'}
            overflowY={'auto'}
          >
            <Heading> Sample Video</Heading>
            <Text maxH={16}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              eligendi saepe cumque quae vitae distinctio non molestiae, omnis
              atque maiores? Ut expedita, doloribus laboriosam et perspiciatis
              quo iste quibusdam at minus facilis omnis quam soluta ad repellat,
              commodi eligendi eos corporis, reiciendis fugiat? Exercitationem
            </Text>
          </VStack>
        </VStack>
        <VStack
          w={['full', 'xl']}
          alignItems={'strech'}
          p={8}
          spacing={8}
          overflowY={'auto'}
        >
          {videoArr.map((item, index) => (
            <Button onClick={() => setVideoSrc(item)}>Video {index + 1}</Button>
          ))}
        </VStack>
      </Stack>
    </>
  );
};

export default Videos;
