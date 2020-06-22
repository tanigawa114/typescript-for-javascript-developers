export {};

let name: any = 'Ham';

let length = (name as string).length;
// let length = (<string>name).length; ←非推奨（jsxに似ているため）

// length = 'foo';
