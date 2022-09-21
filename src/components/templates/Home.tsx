import type { FC } from 'react';
import { Box, Heading, Center } from '@chakra-ui/react';
import { schoolData } from 'data';
import { Helmet } from 'react-helmet-async';
import Counter from 'components/ecosystems/Counter';
import CountingBeads from 'components/ecosystems/CountingBeads';
import CharacterIndex from 'components/organisms/CharacterIndex';
import StoryOutline from 'components/organisms/StoryOutline';

const title = 'SLAM DUNK';

const Home: FC = () => (
  <Box maxW="3xl">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Heading as="h1" size="xl" my={4}>
      {title}
    </Heading>
    <StoryOutline my={10} />
    <CharacterIndex schools={schoolData} my={16} />
    <Center>
      <Counter />
    </Center>
    <Box w="3xl">
      <CountingBeads />
    </Box>
  </Box>
);

export default Home;
