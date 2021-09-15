// 함수에서 타입 정의하기.
function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);



// 숫자 배열의 총합을 구하는 sumArray 함수.
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);



// 아무것도 반환하지 않아야 하는 함수는 반환 타입을 void로 설정.
function returnNoting(): void {
  console.log('I am just saying Hello World');
}