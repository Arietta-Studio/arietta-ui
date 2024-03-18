import { Hero, HeroProps } from '@arietta-studio/ui';

const actions: HeroProps['actions'] = [
  {
    icon: 'Github',
    link: 'https://github.com/arietta-studio',
    text: 'Github',
  },
  {
    link: '/components/action-icon',
    text: 'Get Started',
    type: 'primary',
  },
];

export default () => {
  return (
    <Hero
      actions={actions}
      description="Arietta UI is an open-source UI component library for <br/>building chatbot web apps"
      title="Arietta <b>UI</b>"
    />
  );
};
