// src/data/tutorial/lessons.ts

import { Lesson } from '@/types/tutorial';

export const lessons: Lesson[] = [
  // Beginner Level
  {
    id: 'debutant-manners',
    level: 'debutant',
    title: 'Good Manners in Chain Restaurants',
    description: 'Learn the basics of etiquette in Japanese restaurants: chopstick usage, greetings before and after meals, and how to behave in queues.',
    type: 'quiz',
    points: 50,
    duration: 8,
  },
  {
    id: 'debutant-ticket-machine',
    level: 'debutant',
    title: 'Mastering Ticket Machines',
    description: 'Discover how to use ticket machines (券売機) found in many Japanese restaurants like Matsuya, Nakau, and Fuji Soba.',
    type: 'quiz',
    points: 75,
    duration: 15,
  },
  {
    id: 'debutant-gyudon-chains',
    level: 'debutant',
    title: 'Recognizing the Big 3 of Gyūdon',
    description: 'Identify and differentiate the three main gyūdon chains: Yoshinoya, Sukiya, and Matsuya.',
    type: 'quiz',
    points: 60,
    duration: 12,
  },
  {
    id: 'debutant-popular-chains',
    level: 'debutant',
    title: 'Introduction to Popular Chains',
    description: 'Get familiar with the most accessible chains: Saizeriya, Gusto, and CoCo Ichibanya.',
    type: 'quiz',
    points: 50,
    duration: 10,
  },

  // Intermediate Level
  {
    id: 'intermediaire-ramen-masters',
    level: 'intermediaire',
    title: 'The Ramen Masters',
    description: 'Explore the specialties of Ichiran, Ippudo, and Tenkaippin, three iconic ramen chains.',
    type: 'quiz',
    points: 100,
    duration: 18,
  },
  {
    id: 'intermediaire-kaiten-zushi',
    level: 'intermediaire',
    title: 'Navigation in Kaiten-Zushi',
    description: 'Master the systems of Sushiro, Kura Sushi, and Hama Sushi for an optimal experience.',
    type: 'simulation',
    points: 125,
    duration: 20,
  },
  {
    id: 'intermediaire-family-restaurants',
    level: 'intermediaire',
    title: 'Mastering Family Restaurants',
    description: 'Learn to navigate the touch ordering systems of Saizeriya, Gusto, and Jonathan\'s.',
    type: 'simulation',
    points: 110,
    duration: 22,
  },

  // Advanced Level
  {
    id: 'avance-47-chains',
    level: 'avance',
    title: 'Expert of 47 Chains',
    description: 'Test your knowledge of all 47 chains covered in this comprehensive guide.',
    type: 'quiz',
    points: 200,
    duration: 35,
  },
  {
    id: 'avance-cultural-impact',
    level: 'avance',
    title: 'History and Cultural Impact of Chains',
    description: 'Understand the influence of restaurant chains on modern Japanese society.',
    type: 'video',
    points: 250,
    duration: 30,
  },
];

export const getLessonsByLevel = (level: 'debutant' | 'intermediaire' | 'avance') => {
  return lessons.filter(lesson => lesson.level === level);
};

export const getLessonById = (id: string) => {
  return lessons.find(lesson => lesson.id === id);
};
