export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Diamond Finish',
    price: 799,
    description:
      'The package will deep clean the entire car even maintain the engine inspect the car for parts that need to replace and the package will be accomodating it',
  },
  {
    id: 2,
    name: 'Gold Finish',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
