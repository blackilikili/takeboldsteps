import type { PhotoKey } from './photos';

// Single source of truth for services: used by the home page, Services page and contact form.
export const services = [
  {
    id: 'training',
    photo: 'trainingConference' as PhotoKey,
    title: 'Training',
    short: 'Hands-on programs that build real, job-ready skills.',
    text: 'Practical, interactive training programs designed around your people and your goals, from onboarding to leadership.',
  },
  {
    id: 'development',
    photo: 'trainingWhiteboard' as PhotoKey,
    title: 'Development',
    short: 'Growth plans that help individuals reach their potential.',
    text: 'Personal and professional development that builds confidence, capability and a clear path to the next step.',
  },
  {
    id: 'organizational-development',
    photo: 'trainingPresentation' as PhotoKey,
    title: 'Organizational Development',
    short: 'Stronger structures, culture and leadership.',
    text: 'We help organizations align structure, culture and leadership so teams can perform and grow together.',
  },
  {
    id: 'sop',
    photo: 'workshopNotes' as PhotoKey,
    title: 'SOP Development',
    short: 'Clear standard operating procedures your team will follow.',
    text: 'We document, streamline and roll out standard operating procedures that make work consistent, trainable and scalable.',
  },
  {
    id: 'team-building',
    photo: 'teamCircle' as PhotoKey,
    title: 'Team Building',
    short: 'Events and activities that bring teams together.',
    text: 'Engaging team building sessions and events that strengthen trust, communication and collaboration.',
  },
  {
    id: 'operations',
    photo: 'trainingMeeting' as PhotoKey,
    title: 'Operations',
    short: 'Smoother day-to-day operations and processes.',
    text: 'Hands-on operations support to remove bottlenecks, improve processes and keep your business running efficiently.',
  },
];
