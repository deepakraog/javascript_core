
// ✅ declare properties as readonly
interface Person {
  readonly name: string;
  readonly age: number;
}

// ✅ implicitely declaring a readonly arrays
const x2 = [1,2,3,4,5] as const;

// ✅ explicitely declaring a readonly array
const y: ReadonlyArray<{ x: number, y: number}> = [ {x: 1, y: 1}]

interface Address {
  street: string;
  city: string;
}

// ✅ converting all the type properties to readonly
type ReadonlyAddress = Readonly<Address>;