
const array1: number[] = [1,2,3,4];

type X1 = typeof array extends (infer U)[] ? U : never;

interface HttpResponse<T, V> {
  data: T;
  included?: V;
}

type StringHttpResponse = HttpResponse<string, never>;

// ❌ included prop is not assignable
const fails: StringHttpResponse = {
  data: 'test',
  // included: {}
  // ^^^^^
  // Type '{}' is not assignable to type 'never'
}

// ✅ included is not assigned
const works: StringHttpResponse = {
  data: 'test',
}

// We could have used the Omit Mapped type for the same purpose:
type StringHttpResponse1 = Omit<HttpResponse<string, unknown>, 'included'>;

// However, you can see the downside of it. It is more verbose. If you check at the internals of Omit,
// it uses Exclude, which in turn uses the never type.
// By relying on the infer and never keywords, we are saving ourselves
// the trouble of having to duplicate any types and to better express our interfaces.