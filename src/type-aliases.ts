export {};

type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1: Profile = {
  name: 'Ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Ham',
  age: 43,
};

type Profile2 = typeof example1;
