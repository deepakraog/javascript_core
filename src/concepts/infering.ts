// Ref : https://betterprogramming.pub/7-typescript-common-mistakes-to-avoid-581c30e514d6

const addNumber = (a: number, b: number) => a + b;

// ❌ you are hardcoding the type `number` instead of relying on what the function returns
const processResultOld = (result: number) => console.log(result);
processResultOld(addNumber(1, 1));


// ✅ result will be whatever the return type of addNumber function
// no need for us to redefine it
const processResult = (result: ReturnType<typeof addNumber>) => console.log(result);
processResult(addNumber(1, 1));



// ❌ Sometimes for one of objects it is not necessary to define
// interfaces for it
interface Book1 {
  name: string,
  author: string
}

const book: Book1 = {
  name: 'For whom the bell tolls',
  author: 'Hemingway'
}

const printBook = (bookInstance: Book1) => console.log(bookInstance);


// ✅ For simple scenarios we can rely on type inference
const book1 = {
  name: 'For whom the bell tolls',
  author: 'Hemingway'
}

const printBook1 = (bookInstance: typeof book1) => console.log(bookInstance);

const array: number[] = [1,2,3,4];

// ✅ type X will be number
type X = typeof array extends (infer U)[] ? U : never;

// In the above example, we can see how we can extract the type of the array.