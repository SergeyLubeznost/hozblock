export interface StoryItem {
  id: number;
  title: string;
  previewImg: string;
  videoUrl: string;
}

export const storiesData: StoryItem[] = [
  {
    id: 1,
    title: 'Наше производство',
    previewImg: 'https://unsplash.com',
    videoUrl: 'https://googleapis.com'
  },
  {
    id: 2,
    title: 'Обзор хозблока',
    previewImg: 'https://unsplash.com',
    videoUrl: 'https://googleapis.com'
  },
  {
    id: 3,
    title: 'Монтаж навеса',
    previewImg: 'https://unsplash.com',
    videoUrl: 'https://googleapis.com'
  },
  {
    id: 4,
    title: 'Отзыв клиента',
    previewImg: 'https://unsplash.com',
    videoUrl: 'https://googleapis.com'
  }
];
