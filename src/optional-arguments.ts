export {};

let bmi: (heigth: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi = weight / height ** 2;
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

bmi(1.76, 56);

// bmi(身長, 体重, console.logで出力するかどうか？)
// bmi(1.76, 56, true);
// bmi(1.76, 56, false);
// bmi(1.76, 56);
