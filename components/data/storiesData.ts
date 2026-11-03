export interface StoryItem {
  id: number;
  title: string;
  previewImg: string;
  videoUrl: string;
}

export const storiesData: StoryItem[] = [
  {
    id: 1,
    title: 'Интерактив: угадай материал',
    previewImg: '/image (1)_11zon.webp', // Скриншот с автомобилем и навесом
    videoUrl: 'https://googleapis.com'
  },
  {
    id: 2,
    title: 'Монтаж навеса для авто',
    previewImg: '/image_11zon.webp', // Скриншот с большим коричневым навесом
    videoUrl: 'https://googleapis.com'
  },
  {
    id: 3,
    title: 'Кровельные работы на объекте',
    previewImg: '/image (2).jpg', // Скриншот с обзором кровли специалистом
    videoUrl: 'https://googleapis.com'
  },
  {
    id: 4,
    title: 'Разбор видов крыш',
    previewImg: '/image (3)_11zon.webp', // Этот новый скриншот с многоскатной крышей
    videoUrl: 'https://googleapis.com'
  }
];
