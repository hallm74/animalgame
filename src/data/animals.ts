import { Animal } from '../types';

export const animals: Animal[] = [
  {
    id: 'cat',
    name: 'Cat',
    image: '/assets/images/animals/cat.jpg',
    sound: '/assets/audio/animals/cat.mp3',
    hint: 'This animal says meow'
  },
  {
    id: 'dog',
    name: 'Dog',
    image: '/assets/images/animals/dog.jpg',
    sound: '/assets/audio/animals/dog.mp3',
    hint: 'This animal says woof'
  },
  {
    id: 'cow',
    name: 'Cow',
    image: '/assets/images/animals/cow.jpg',
    sound: '/assets/audio/animals/cow.mp3',
    hint: 'This animal says moo'
  }
  // Commented out animals
  // {
  //   id: 'elephant',
  //   name: 'Elephant',
  //   image: '/assets/images/animals/elephant.jpg',
  //   sound: '/assets/audio/animals/elephant.mp3',
  //   hint: 'This animal has a trunk'
  // },
  // {
  //   id: 'lion',
  //   name: 'Lion',
  //   image: '/assets/images/animals/lion.jpg',
  //   sound: '/assets/audio/animals/lion.mp3',
  //   hint: 'This animal is the king of the jungle'
  // },
  // {
  //   id: 'monkey',
  //   name: 'Monkey',
  //   image: '/assets/images/animals/monkey.jpg',
  //   sound: '/assets/audio/animals/monkey.mp3',
  //   hint: 'This animal loves bananas'
  // }
];