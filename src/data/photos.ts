// Free-to-use photos from Unsplash (https://unsplash.com/license), loaded straight from their CDN.
// Swap any `src` for your own photo (e.g. put it in public/photos/ and use `/photos/name.jpg`).
const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  teamCircle: {
    src: unsplash('photo-1529156069898-49953e39b3ac'),
    alt: 'A group of colleagues standing together outdoors, arms around each other',
  },
  teamLaptops: {
    src: unsplash('photo-1522071820081-009f0129c71c'),
    alt: 'A team gathered around a table working together on laptops',
  },
  teamTable: {
    src: unsplash('photo-1543269865-cbf427effbad'),
    alt: 'Smiling team members sitting together around a table',
  },
  workshopNotes: {
    src: unsplash('photo-1552664730-d307ca884978'),
    alt: 'Workshop participants planning with sticky notes on a wall',
  },
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
};

export type PhotoKey = keyof typeof photos;
