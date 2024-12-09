type Product = {
  id: number
  price: number
}
type LegacyProduct = {
  id: number
  price?: any
}

const addProduct = (product: Product) : void => {
  product.id = Math.floor(Math.random() * 1000);
}

const removeProduct = (product: { id: number, price?: number } ) : void => {
  delete product.price;
}

const iPhone: Product = {
  id: 5,
  price: 1000
}
const samsung20: LegacyProduct = {
  id: 5,
  price: 1000
}
//addProduct(iPhone);
//console.log(iPhone.price)
removeProduct(iPhone);
console.log(iPhone.price + 100)
removeProduct(samsung20);

let varaible = 'x';
const varaible2 = 'x';

let a = { id: 5 }
let b = { id: 'c' } as const;

type apiResponse<T> = {
  total: number,
  data: Array<T>
}
function readProductResponse(response: apiResponse<Product>) {
  console.log(response)
}
readProductResponse({ total: 1, data: [iPhone] })

type ProductsResponse = {
  products: {
    price: number;
    name: string;
    id: number;
    category: {
      name: string;
      id: number;
      recommended: { sub_category: { slug: string }; name: string; id: number }[]
    },
    related: { name: string; id: number }[];
  }[]
}

const response: ProductsResponse = {
  "products" : [{
    "id": 5,
    "name": "product name",
    "price": 20,
    "category": {
      "id": 1,
      "name": "Kategoria",
      "recommended": [{
        "id": 46,
        "name": "product 2",
        "sub_category" : {
          "slug" : "http://google.com"
        }
      }]
    },
    "related" : [{
      "id": 1,
      "name": "Kategoria"
    }]
  }]
};
response.products[0].related[0];
type relatedProductType = ProductsResponse['products'][number]['related'][number];

const relatedProduct: relatedProductType = {
  id: 5,
  name: "Some name",
}

type productKeyType = keyof ProductsResponse['products'][number]

const exampleProduct: productKeyType = 'related';

// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// }
type CarRecord = Record<"model" | "brand", string>;

const car: CarRecord = {
  model: "b",
  brand: "c",
}

type Product2 = {
  id: number;
  name: string;
  price: number;
  rating: string;
};

type MapProductWithRating = {
  [K in keyof Product2]: K extends "rating" ? number : Product2[K];
};
const productWithRatingString: Product2 = {
  id: 1,
  price: 5,
  name: "Product 2",
  rating: "4",
}

const productWithRating: MapProductWithRating = {
  id: 1,
  price: 5,
  name: "Product 2",
  rating: 4,
}

interface User {
  name: string;
  age: number;
}

const partialUser: Partial<User> = {
  name: "John",
};

interface Config {
  apiUrl: string;
  apiKey: string;
}

const readOnlyConfig: Readonly<Config> = {
  apiUrl: "https://example.com/api",
  apiKey: "123456",
};

interface User {
  name: string;
  age: number;
  gender: string;
}

const pickedUser: Pick<User, "name" | "age"> = {
  name: "John",
  age: 25,
};


interface User {
  name: string;
  age: number;
  gender: string;
}

const omittedUser: Omit<User, "gender"> = {
  name: "John",
  age: 25,
};

type ValueHolder<T> = T extends number ? {
  value: T;
  isOdd: boolean
  isNumber: true;
} : {
  value: T;
  isNumber: false;
};

const notNumber: ValueHolder<string> = {
  isNumber: false,
  value: "",
}

const isNumber: ValueHolder<number> = {
  isNumber: true,
  value: 5,
  isOdd: false
}

type MyType = "a" | "b" | "c" | "d";
type MyTypeExclude = "b" | "d";
type ExcludedType = Exclude<MyType, MyTypeExclude>; // "a" | "c"

type myType = string | number | null | undefined
const nullableTypeVariable: myType = null;
type noNulls = NonNullable<myType>
//const NotNullableTypeVariable: noNulls = null; // Initializer type null is not assignable to variable type noNulls

function getInt(a: string) {
  return parseInt(a);
}
type A = ReturnType<typeof getInt>;