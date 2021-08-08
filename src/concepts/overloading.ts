// ❌ instead of this
interface Example {
  foo(one: number): number;
  foo(one: number, two: number): number;
  foo(one: number, two: number, three: number): number;
}

// ❎ do this
interface Example {
  foo(one?: number, two?: number, three?: number): number;
}

// ❌ instead of this
interface Example {
  foo(one: number): number;
  foo(one: number | string): number;
}

// ❎ do this
interface Example {
  foo(one: number | string): number;
}