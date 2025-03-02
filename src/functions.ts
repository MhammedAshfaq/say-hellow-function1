import { SayHelloProps } from "./types";

export function sayHellow({ firstName, lastName, age }: SayHelloProps) {
  console.log("Hello");
  console.log(`Your First Name is ${firstName}`);

  if (lastName) {
    console.log(`Your Last Name is ${lastName}`);
  }

  if (age) {
    console.log(`Your Age is ${age}`);
  }
}
