// let message = 'abc';  // type: string
// let endsWithC = message.endsWith('c');

let message;    // type: any
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');