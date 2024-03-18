import { Typography } from '@arietta-studio/ui';
import { Tabs } from '@arietta-studio/ui/mdx';

export default () => (
  <Typography>
    <Tabs items={['pnpm', 'npm', 'yarn']}>
      <Tabs.Tab>pnpm: Fast, disk space efficient package manager.</Tabs.Tab>
      <Tabs.Tab>npm is a package manager for the JavaScript programming language.</Tabs.Tab>
      <Tabs.Tab>Yarn is a software packaging system.</Tabs.Tab>
    </Tabs>
  </Typography>
);
