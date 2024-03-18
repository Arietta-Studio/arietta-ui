import { Typography } from '@arietta-studio/ui';
import { Cards } from '@arietta-studio/ui/mdx';
import { Warehouse } from 'lucide-react';

export default () => (
  <Typography>
    <Cards>
      <Cards.Card href="/mdx/callout" icon={Warehouse} title="Callout" />
      <Cards.Card href="/mdx/callout" icon={Warehouse} title="Tabs" />
      <Cards.Card href="/mdx/callouts" icon={Warehouse} title="Steps" />
    </Cards>
    <Cards>
      <Cards.Card desc="Demo desction text" href="/mdx/callout" icon={Warehouse} title="Callout" />
      <Cards.Card desc="Demo desction text" href="/mdx/callout" icon={Warehouse} title="Tabs" />
      <Cards.Card desc="Demo desction text" href="/mdx/callouts" icon={Warehouse} title="Steps" />
    </Cards>
    <Cards>
      <Cards.Card
        href="/mdx/callout"
        icon={Warehouse}
        image="https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/arietta-chat.webp" // TODO: Add image
        title="Callout"
      />
      <Cards.Card
        href="/mdx/callout"
        icon={Warehouse}
        image="https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/arietta-chat.webp"
        title="Tabs"
      />
      <Cards.Card
        href="/mdx/callouts"
        icon={Warehouse}
        image="https://gw.alipayobjects.com/zos/kitchen/sLO%24gbrQtp/arietta-chat.webp"
        title="Steps"
      />
    </Cards>
  </Typography>
);
