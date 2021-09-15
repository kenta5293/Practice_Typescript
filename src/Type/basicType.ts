let count = 0; // 숫자
count += 1;
count = '🍌'; // 문자를 넣으면 에러 발생

const message: string = 'Hello World'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['Hello', 'World']; // 문자열 배열

messages.push(1); // 숫자를 넣으려고 하면 안됨.

let mightBeUndefined: string | undefined = undefined; // string 일 수도 있고, undefined 일 수도 있음.
let nullableNumber: number | null = null; // number 일 수도 있고, null 일 수도 있음.

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나.
color = 'yellow';
color = 'green'; // 에러 발생