import type { PhotoKey } from './photos';
import type { IconKey } from '../components/ServiceArt.astro';

// Single source of truth for services: used by the home page, Services page and contact form.
// Each service shows either a photo or, for digital services, a brand illustration.
export interface Service {
  id: string;
  group: GroupId;
  title: string;
  short: string;
  text: string;
  photo?: PhotoKey;
  icon?: IconKey;
}

export type GroupId = 'people' | 'digital';

export const serviceGroups: { id: GroupId; title: string; intro: string }[] = [
  {
    id: 'people',
    title: 'People & organizations',
    intro: 'Training, development and hands-on support for your teams and the way they work.',
  },
  {
    id: 'digital',
    title: 'Digital learning & growth',
    intro: 'Online courses, learning platforms and the web tools that bring people in and keep work flowing.',
  },
];

export const services: Service[] = [
  {
    id: 'training',
    group: 'people',
    photo: 'trainingConference',
    title: 'Training',
    short: 'Hands-on programs that build real, job-ready skills.',
    text: 'Practical, interactive training programs designed around your people and your goals, from onboarding to leadership.',
  },
  {
    id: 'development',
    group: 'people',
    photo: 'trainingWhiteboard',
    title: 'Development',
    short: 'Growth plans that help individuals reach their potential.',
    text: 'Personal and professional development that builds confidence, capability and a clear path to the next step.',
  },
  {
    id: 'organizational-development',
    group: 'people',
    photo: 'trainingPresentation',
    title: 'Organizational Development',
    short: 'Stronger structures, culture and leadership.',
    text: 'We help organizations align structure, culture and leadership so teams can perform and grow together.',
  },
  {
    id: 'sop',
    group: 'people',
    photo: 'participantGuides',
    title: 'SOP Development',
    short: 'Clear standard operating procedures your team will follow.',
    text: 'We document, streamline and roll out standard operating procedures that make work consistent, trainable and scalable.',
  },
  {
    id: 'team-building',
    group: 'people',
    photo: 'beachTeam',
    title: 'Team Building',
    short: 'Events and activities that bring teams together.',
    text: 'Engaging team building sessions and events that strengthen trust, communication and collaboration.',
  },
  {
    id: 'operations',
    group: 'people',
    photo: 'trainingMeeting',
    title: 'Operations',
    short: 'Smoother day-to-day operations and processes.',
    text: 'Hands-on operations support to remove bottlenecks, improve processes and keep your business running efficiently.',
  },
  {
    id: 'lms',
    group: 'digital',
    icon: 'lms',
    title: 'LMS & Online Courses',
    short: 'Online courses and learning platforms, built and set up for you.',
    text: 'We turn your know-how into online courses and set up your learning management system: modules, quizzes, certificates, enrolment and progress tracking, ready for your learners.',
  },
  {
    id: 'instructional-design',
    group: 'digital',
    icon: 'design',
    title: 'Instructional Design',
    short: 'Learning experiences designed to change what people do.',
    text: 'We map learning objectives, write the content and design activities, assessments and participant guides, for classroom, online or blended delivery.',
  },
  {
    id: 'websites-funnels',
    group: 'digital',
    icon: 'web',
    title: 'Websites & Funnels',
    short: 'Web pages and sales funnels that turn visitors into clients.',
    text: 'We build websites, landing pages and funnels, from first click to sign-up or sale, with clear messaging and a design that fits your brand.',
  },
  {
    id: 'automations-integrations',
    group: 'digital',
    icon: 'automation',
    title: 'Automations & Integrations',
    short: 'Your tools connected, and repetitive work automated.',
    text: 'We connect your forms, email, CRM, calendar, payments and LMS, and automate follow-ups, enrolments and reminders so your team can focus on people.',
  },
];
