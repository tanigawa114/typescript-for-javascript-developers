export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;
nickname = 'Ham';

let profile = {
  name: 'Atsushi',
  height: 176,
} as const;

// profile.name = 'Ham';
// profile.height = 180;
