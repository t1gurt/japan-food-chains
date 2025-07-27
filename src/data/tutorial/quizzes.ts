// src/data/tutorial/quizzes.ts

import { Quiz, QuizQuestion } from '@/types/tutorial';

export const quizzes: Quiz[] = [
  {
    lessonId: 'debutant-manners',
    questions: [
      {
        question: 'What do you say in Japan before starting to eat?',
        options: [
          'Arigato gozaimasu',
          'Itadakimasu',
          'Sumimasen',
          'Konnichiwa',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'How should you hold chopsticks?',
        options: [
          'Like a pencil, with one hand',
          'With both hands for more stability',
          'The top chopstick moves, the bottom one stays fixed',
          'Both chopsticks move together',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'In restaurants with ticket machines, when do you pay?',
        options: [
          'Before ordering, at the machine',
          'After the meal, at the counter',
          'During the meal, to the server',
          'Online, before arriving',
        ],
        correctAnswerIndex: 0,
      },
      {
        question: 'What do you say after finishing your meal?',
        options: [
          'Itadakimasu',
          'Gochisousama deshita',
          'Oishikatta desu',
          'Arigato gozaimashita',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'What do you call self-service restaurants with ticket machines?',
        options: [
          'Family restaurant',
          'Kaiten-zushi',
          'Shokken-shiki (食券式)',
          'Izakaya',
        ],
        correctAnswerIndex: 2,
      },
    ],
  },
  {
    lessonId: 'debutant-ticket-machine',
    questions: [
      {
        question: 'What is the first step to use a ticket machine?',
        options: [
          'Insert money',
          'Choose the dish',
          'Look at the displayed menu',
          'Press the start button',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'What happens if you insert too much money in the machine?',
        options: [
          'Ask staff for help',
          'The machine automatically gives change',
          'Buy something more expensive',
          'The money is lost',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'At Matsuya, what do you do with your ticket after purchase?',
        options: [
          'Keep it as a souvenir',
          'Give it to the kitchen staff',
          'Put it in a special box',
          'Throw it away immediately',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Which chain is famous for its orange ticket machines?',
        options: [
          'Yoshinoya',
          'Sukiya',
          'Matsuya',
          'Nakau',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'If a ticket machine only accepts coins, what should you do with your bills?',
        options: [
          'Go to another restaurant',
          'Use the change machine nearby',
          'Ask staff to change your money',
          'Pay with a credit card',
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    lessonId: 'debutant-gyudon-chains',
    questions: [
      {
        question: 'Which is the oldest gyūdon chain among these three?',
        options: [
          'Sukiya',
          'Matsuya', 
          'Yoshinoya',
          'Nakau',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'Which gyūdon chain is recognizable by its dominant orange color?',
        options: [
          'Yoshinoya',
          'Sukiya',
          'Matsuya',
          'Tenya',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'Sukiya distinguishes itself from other gyūdon chains by:',
        options: [
          'Having the highest prices',
          'Its most varied menu with curry and hamburgers',
          'Specializing only in beef',
          'Limited opening hours',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Which chain offers "Premium Gyūdon" with high-end ingredients?',
        options: [
          'Sukiya',
          'Matsuya',
          'Yoshinoya', 
          'All three',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'How can you easily recognize a Sukiya restaurant?',
        options: [
          'By its red and white colors',
          'By its blue and yellow colors',
          'By its orange and black colors',
          'By its green and white colors',
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    lessonId: 'debutant-popular-chains',
    questions: [
      {
        question: 'Saizeriya is a chain of:',
        options: [
          'Japanese fast food',
          'Italian family restaurant',
          'Sushi bar',
          'Traditional café',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'At CoCo Ichibanya, you can customize your curry by choosing:',
        options: [
          'Only the amount of rice',
          'Spice level from 1 to 10 and rice amount',
          'Only vegetables',
          'Only meat',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Gusto is primarily a:',
        options: [
          'Ramen restaurant',
          'Specialty café',
          'Family restaurant with varied menu',
          'Sushi restaurant',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'What is the main feature of the "Drink Bar" at Gusto and Saizeriya?',
        options: [
          'Unlimited alcoholic drinks',
          'Coffee only',
          'All-you-can-drink non-alcoholic beverages',
          'Traditional Japanese tea',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'At Saizeriya, what is the main advantage for students and families?',
        options: [
          'Menu only in Japanese',
          'Very affordable prices and generous portions',
          'Ultra-fast service',
          'Exclusively vegetarian dishes',
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    lessonId: 'intermediaire-ramen-masters',
    questions: [
      {
        question: 'What is the most famous feature of Ichiran (一蘭)?',
        options: [
          'A free kimchi bar',
          'The "flavor concentration counter"',
          'Unable to choose noodle firmness',
          'A very rich white chicken broth',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'At Ippudo (一風堂), what do you call ordering extra noodles after finishing your bowl?',
        options: [
          'Okawari (refill)',
          'Ōmori (large portion)',
          'Kaedama (replacement noodles)',
          'Tsuika-men (additional noodles)',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'What unique system does Ichiran use to customize your ramen?',
        options: [
          'A questionnaire on tablet',
          'A paper order sheet with choices',
          'An automated voice system',
          'A personalized QR code',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Which ramen chain is famous for its "Shiromaru" ramen?',
        options: [
          'Ichiran',
          'Tenkaippin',
          'Ippudo',
          'Menya Saimi',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'At Tenkaippin (天下一品), what type of broth is their specialty?',
        options: [
          'Clear pork broth (tonkotsu)',
          'Red miso broth',
          'Very thick and creamy broth',
          'Vegetarian vegetable broth',
        ],
        correctAnswerIndex: 2,
      },
    ],
  },
  {
    lessonId: 'avance-47-chains',
    questions: [
      {
        question: 'Which chain is considered the origin of gyūdon and has the longest history?',
        options: ['Sukiya', 'Matsuya', 'Nakau', 'Yoshinoya'],
        correctAnswerIndex: 3,
      },
      {
        question: 'What ordering system is most commonly used in gyūdon chains?',
        options: [
          'Counter ordering with a server',
          'Ticket machine (automatic dispenser)',
          'Mobile app only',
          'Online reservation system',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Which kaiten-zushi (conveyor belt sushi) chain is known for its "bikkurapon" (surprise) system?',
        options: [
          'Sushiro',
          'Kura Sushi',
          'Hama Sushi',
          'Genki Sushi',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'In Japanese family restaurants, what does the term "drink bar" generally mean?',
        options: [
          'An alcohol bar',
          'An all-you-can-drink beverage dispenser',
          'A cocktail service',
          'A smoothie bar',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Which curry chain is famous for its spice level system from 1 to 10?',
        options: [
          'Curry House CoCo Ichibanya',
          'Go Go Curry',
          'Sukiya (curry)',
          'Matsuya (curry)',
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
];