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