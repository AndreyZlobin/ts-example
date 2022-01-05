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
