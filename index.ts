const enum Methods {
  POST = "POST",
  GET = "GET",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

const post = Methods.POST;
const uuid = "uuuu-uuuu-iiii-dddd";

type ObjectKeys = { [key: string]: string };
type ObjectKeysWithRecord = Record<string, string>;
const someObject: ObjectKeys = {
  uuid,
};
const someObjectWithRecord: ObjectKeysWithRecord = {
  uuid,
};
