let count = 0; // μ«μ
count += 1;
count = 'π'; // λ¬Έμλ₯Ό λ£μΌλ©΄ μλ¬ λ°μ

const message: string = 'Hello World'; // λ¬Έμμ΄

const done: boolean = true; // λΆλ¦¬μΈ κ°

const numbers: number[] = [1, 2, 3]; // μ«μ λ°°μ΄
const messages: string[] = ['Hello', 'World']; // λ¬Έμμ΄ λ°°μ΄

messages.push(1); // μ«μλ₯Ό λ£μΌλ €κ³  νλ©΄ μλ¨.

let mightBeUndefined: string | undefined = undefined; // string μΌ μλ μκ³ , undefined μΌ μλ μμ.
let nullableNumber: number | null = null; // number μΌ μλ μκ³ , null μΌ μλ μμ.

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow μ€ νλ.
color = 'yellow';
color = 'green'; // μλ¬ λ°μ