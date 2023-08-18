import circle1 from '../assets/circle1.svg';
import sun from '../assets/sun.svg'


//  Header.jsx
export const navBarLinks = [
  { id: '#emotions', label: 'Emotions' },
  { id: '#manifesto', label: 'Manifesto' },
  { id: '#self-awareness', label: 'Self-awareness test' },
  { id: '#work-us', label: 'Work With Us' },
];

//EqBeatsIq.jsx
export const paragraph1 = [
  {
    id: 1,
    text: 'People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.',
  },
  {
    id: 2,
    text: 'They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.',
  },
];

//EqBeatsIq.jsx
export const paragraph2 = [
  {
    id: 1,
    text: 'Not having your own emotions under control might be holding you back.',
  },
  {
    id: 2,
    text: 'Additionally, not understanding those of others stops you from being parent, friend you can be.',
  },
];

// Soundfamiliar.jsx
export const cardData = [
  {
    id: 1,
    emojis: '😠',
    title: 'You argue with a colleague',
    bodyText:
      'You get angry and defensive, instead of staying open and working towards common ground.',
    className: 'soundFamiliar__cards',

    bgColor: '#EEEBFE',
  },
  {
    id: 2,
    emojis: '😲',
    title: 'You get a promotion at work',
    bodyText:
      "You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.",
    className: 'soundFamiliar__cards',
    color: '#ffffff',
    bgColor: '#6341EF',
  },
  {
    id: 3,
    emojis: '🤨',
    title: 'You attend a class reunion',
    bodyText:
      "You compare yourself with your peers' achievements, instead of making your self-judgement more independent Of others.",
    className: 'soundFamiliar__cards',
    bgColor: '#FFEFD5',
  },
  {
    id: 4,
    emojis: '😒',
    title: 'You are at a lively dinner party',
    bodyText:
      'You play on your phone, instead of confidently approaching strangers and striking up a chat.',
    className: 'soundFamiliar__cards',
    bgColor: '#FEF7F1',
  },
  {
    id: 5,
    emojis: '🤐',
    title: 'You hit a dead end in a negotiation',
    bodyText:
      'You get nervous, frazzled, and frustrated, instead of staying optimistic and solution-oriented.',
    className: 'soundFamiliar__cards',
    bgColor: '#D8F2FF',
  },
];

//SelfImprovement.jsx
export const timelineData = [
  {
    id: 1,
    title: "It's not as easy as 1-2-3.",
    description:
      'The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).',
    img: circle1,
  },
  {
    id: 2,
    title: 'Old habits are hard to break.',
    description:
      'And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.',
    img: circle1,
  },
  {
    id: 3,
    title: "You and your motivation don't have a long-term relationship.",
    description:
      'Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals.',
    img: circle1,
  },
  {
    id: 4,
    title: "Books just don't offer practical solutions.",
    description:
      "Remember when you learned to ride a bike just by reading? Yeah, we don't either.We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action.",
    img: circle1,
  },
  {
    id: 5,
    title: 'Inspiration is great, but then what.',
    description:
      'We make sure your energy from all the content you consume does not fizzle out.',
    img: circle1,
  },
];

//Anonymously.jsx
export const stepsData = [
  {
    id: 1,
    imageSrc: sun,
    text: 'Answer questions on your social skills',
  },
  {
    id: 2,
    imageSrc: sun,
    text: 'Let others anonymously answer the same questions about you',
  },
  {
    id: 3,
    imageSrc: sun,
    text: 'Find out where you and others see things the same way - and where not!',
  },
];

//Anonymously.jsx
export const circlesData = [
  {
    id: 1,
    label: 'you',
    backgroundColor: '#6341ef',
  },
  {
    id: 2,
    label: 'Anonymonos 1',
    backgroundColor: '#40c2fc',
  },
  {
    id: 3,
    label: 'Anonymonos 2',
    backgroundColor: '#fdb338',
  },
  {
    id: 4,
    label: 'Anonymonos 3',
    backgroundColor: '#58c896',
  },
];

//WorkWithUs.jsx
export const workWithUsCardData = [
  {
    id: 1,
    title: 'Power through, even when the going gets tough',
    bodyText:
      'We help you spot and work around whatever stands in the way. be it bad habits, fears, etc.',
    className: 'workWith__cards',
    bgColor: '#fff',
  },
  {
    id: 2,
    title: 'Learn more about who you are and where you want to go',
    bodyText:
      'We ask the right questions to help you better understand why you do things the way you do.',
    className: 'workWith__cards',
    bgColor: '#fff',
  },
  {
    id: 3,
    title: 'Play and grow together with others on the same journey',
    bodyText:
      'Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!',
    className: 'workWith__cards',
    bgColor: '#fff',
  },
  {
    id: 4,
    title: 'Master how to make it happen in real life',
    bodyText:
      'We towards skills with sleek tools such as quizzes, and flashcards',
    className: 'workWith__cards',
    bgColor: '#fff',
  },
  {
    id: 5,
    title:
      'Learn about practical skills that you can actually use in real life',
    bodyText:
      'We teach you smart psychological techniques and habit-forming strategies that are easy to apply.',
    className: 'workWith__cards',
    bgColor: '#fff',
  },
  {
    id: 6,
    title: "Get support that's made for your needs",
    bodyText:
      'We build your personal roadmap of lessons and actions towards your goals.',
    className: 'workWith__cards',
    bgColor: '#fff',
  },
];

//OpenVacancies.jsx
export const vacancies = [
  {
    id: 1,
    role: "Senior Full- Stack Engineer",
    shift: "• Full - time position",
    location: "• Berlin or remote",
    packages: "• 5-85k, 0.5-1.50% equity share options",
    bgColor: '#FEFBEC',
    btn: "See details",
  },
  {
    id: 2,
    role: "  Senior Designer",
    shift: "• Full - time position",
    location: "• Berlin or remote",
    packages: " • €40 - 55k, 0.25 - 0.50 % equity share options",
    bgColor: '#FEFBEC',
    btn: "See details",
  },
  {
    id: 3,
    role: "Superstar Intern",
    shift: "• Full - time position",
    location: "• Berlin or remote",
    packages: "€20-24k, 0.5-1.50% equity share options",
    bgColor: '#FEFBEC',
    btn: "See details",
  }
];

