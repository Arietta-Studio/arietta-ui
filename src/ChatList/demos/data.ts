import { ChatMessage } from '@/types/chatMessage';

export const data: ChatMessage[] = [
  {
    content: 'dayjs fromNow',
    createAt: 1_686_437_950_084,
    extra: {},
    id: '1',
    meta: {
      avatar: '👽',
      backgroundColor: '#E8DA5A',
      title: 'Alien',
    },
    role: 'user',
    updateAt: 1_686_437_950_084,
  },
  {
    content:
      'dayjs.fromNow() returns the relative time from the current time to the given time. dayjs.fromNow() is a chainable method.',
    createAt: 1_686_538_950_084,
    extra: {},
    id: '2',
    meta: {
      avatar: '😎',
      backgroundColor: '#E8DA5A',
      title: 'Advertiser',
    },
    role: 'assistant',
    updateAt: 1_686_538_950_084,
  },
];
