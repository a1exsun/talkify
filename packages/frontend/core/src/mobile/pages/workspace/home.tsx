import { SafeArea, useThemeColorV2 } from '@affine/component';

import { AppTabs } from '../../components';
import { HomeHeader, Scenarios, SearchBar } from '../../views';

export const Component = () => {
  useThemeColorV2('layer/background/mobile/primary');

  return (
    <>
      <HomeHeader />
      <div>Keep Watching</div>
      <SafeArea bottom>
        <SearchBar />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            padding: '0 8px 32px 8px',
          }}
        >
          <Scenarios />
        </div>
      </SafeArea>
      <AppTabs />
    </>
  );
};
