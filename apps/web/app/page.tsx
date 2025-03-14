'use client';
import Header from '@app-launch-kit/modules/landing-page/components/Header';
import WelcomePage from '@app-launch-kit/modules/landing-page/components/Welcome';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';

const Home = () => {
  return (
    <VStack className="flex-1 bg-background-0">
      <Header />
      <ScrollView>
        <WelcomePage />
      </ScrollView>
    </VStack>
  );
};

export default Home;
