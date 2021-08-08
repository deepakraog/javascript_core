// Ref : https://betterprogramming.pub/7-typescript-common-mistakes-to-avoid-581c30e514d6

interface Book {
  author?: string;
  numPages: number;
  price: number;
}

// ✅ Article is a Book without a Page
type Article = Omit<Book, 'numPages'>;

// ✅ We might need a readonly verison of the Book Type
type ReadonlyBook = Readonly<Book>;

// ✅ A Book that must have an author
type NonAnonymousBook = Omit<Book, 'author'> & Required<Pick<Book, 'author'>>;

// Mapped Types can be also be applied to unions

type animals = 'bird' | 'cat' | 'crocodile';

type mamals = Exclude<animals, 'crocodile'>;
// 'bird' | 'cat'

// TypeScript ships with the following Mapped Types: Omit, Partial, Readonly, Exclude, Extract, NonNullable, ReturnType.

