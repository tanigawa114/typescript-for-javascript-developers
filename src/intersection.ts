export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.376,
};

// type TwoWayPlayer = {
//   throwingSpeed: 154;
//   battingAverage: 0.376;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei1: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};

const OtaniShouhei2: Pitcher1 & Batter1 = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
