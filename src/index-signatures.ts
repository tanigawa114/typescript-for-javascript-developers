export {};

interface Profile {
  name: string; // 初期化時に必須
  underTwenty: boolean; // 初期化時に必須
  [index: string]: string | number | boolean; //
}

let profile: Profile = { name: 'Ham', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';
