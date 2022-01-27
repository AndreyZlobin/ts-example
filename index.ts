const enum Methods {
  POST = "POST",
  GET = "GET",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

const post = Methods.POST;
/* ************ */

const uuid = "uuuu-uuuu-iiii-dddd";

type ObjectKeys = { [key: string]: string };
type ObjectKeysWithRecord = Record<string, string>;

const someObject: ObjectKeys = {
  uuid,
};
const someObjectWithRecord: ObjectKeysWithRecord = {
  uuid,
};

/* ************ */
type LikeButtonProps = {
  className: string;
  count: number;
};

type PropA = {
  className: string;
};

type PropB = {
  count: number;
};

const Button = (props: LikeButtonProps) => {
  return ``;
};

const ButtonSecond = (props: PropA & PropB) => {
  return ``;
};

/* ************ */

interface Book {
  price: number;
  pagesCount: number;
  author?: string;
}

type Article = Omit<Book, "pagesCount">;
type ArticleWithRequiredAuthor = Required<
  Pick<Book, "author"> & Omit<Book, "author">
>;



interface User {
  id: string;
}
interface Message {
  id: string;
}


/* function getId<T extends {id: any}>(obj: T): T extends User ? string : number{
  return obj.id
} */

function getId<T extends {id: any}>(obj: T): T extends {id: string} ? string : number{
  return obj.id
}


const r1 = getId({} as User) // string
const r2 = getId({} as Message) // number


type NotFalsy<T = null> = T extends (null | false | undefined | 0) ? never : T;

// let z: NotFalsy  never

// z = '' // error

// let z: NotFalsy<string>  string

// z = 'Holly Molly' // valid



type Filter<T, U> = T extends U ? never : T;

// type R = Filter<'a' | 'b' | 'c', 'b'>

type TryInfer<T extends object = object> = T extends infer R ? R[keyof R] : never;

// type R = TryInfer<{a: 0, b: 3}>