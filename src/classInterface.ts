// Shape 라는 interface 를 선언.
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자이다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시한다.
  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // Typescript 에서는 public과 private를 사용하여 constructor 에서 해당 값들을 설정해주는 작업을 생략할 수 있다.
  // public 으로 선언된 값은 클래스 외부에서 조회 가능하고, private 는 내부에서만 조회 가능.
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);
console.log(rectangle.width);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
})