import { withBase } from '../lib/url';

// Photos from Steps' own events live in public/photos/.
// Stock corporate-training photos are free Unsplash images (https://unsplash.com/license)
// loaded from their CDN; replace them with your own when you have them.
const local = (file: string) => withBase(`photos/${file}`);
const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  // Steps events
  beachTeam: {
    src: local('beach-team.webp'),
    alt: 'A large group in matching shirts cheering on the beach during a Steps team building day',
  },
  groupGame: {
    src: local('group-game.webp'),
    alt: 'Team members holding the edges of a board together in a group challenge',
  },
  legTie: {
    src: local('leg-tie-challenge.webp'),
    alt: 'A team with legs tied together walking in step during a challenge',
  },
  teamPlanning: {
    src: local('team-planning.webp'),
    alt: 'Participants writing their team plan together on a large sheet',
  },
  valuesWorkshop: {
    src: local('values-workshop.webp'),
    alt: 'Values cards laid out on the sand during a beachside workshop',
  },
  participantGuides: {
    src: local('participant-guides.webp'),
    alt: 'Steps "Welcome to Management" participant guides',
  },
  eventBanner: {
    src: local('event-banner.webp'),
    alt: 'Steps Training & Events team building banner at an event tent',
  },
  // Stock: corporate training
  trainingConference: {
    src: unsplash('photo-1540575467063-178a50c2df87'),
    alt: 'A trainer presenting to an audience at a corporate event',
  },
  trainingMeeting: {
    src: unsplash('photo-1556761175-5973dc0f32e7'),
    alt: 'Colleagues in a corporate training session around a meeting table',
  },
  trainingWhiteboard: {
    src: unsplash('photo-1531482615713-2afd69097998'),
    alt: 'Two colleagues working through ideas at a whiteboard',
  },
  trainingPresentation: {
    src: unsplash('photo-1517048676732-d65bc937f952'),
    alt: 'A facilitator leading a small group discussion with laptops',
  },
  trainingWorkshop: {
    src: unsplash('photo-1552664730-d307ca884978'),
    alt: 'Workshop participants planning with sticky notes on a wall',
  },
};

export type PhotoKey = keyof typeof photos;
