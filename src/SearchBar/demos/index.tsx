import {
  SearchBar,
  SearchBarProps,
  StoryBook,
  useControls,
  useCreateStore,
} from '@arietta-studio/ui';

export default () => {
  const store = useCreateStore();
  const controls: SearchBarProps | any = useControls(
    {
      enableShortKey: true,
      placeholder: 'Type keywords...',
      shortKey: 'f',
      spotlight: false,
      type: {
        options: ['ghost', 'block'],
        value: 'ghost',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <SearchBar {...controls} />
    </StoryBook>
  );
};
