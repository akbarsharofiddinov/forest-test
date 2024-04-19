interface ICategory {
  id: number;
  image: string;
  created_at: string;
  updated_at: string;
  img_url: string;
  name: string;
  description: string;
  translations: [
    {
      id: number;
      category_id: number;
      locale: string;
      name: string;
      description: string;
      created_at: null;
      updated_at: null;
    }
  ];
}

interface IProduct {
  id: number;
  category_id: number;
  image: string;
  price: number;
  is_active: number;
  created_at: string;
  updated_at: string;
  subcategory_id: null;
  img_url: string;
  product_name: string;
  product: {
    name: string;
    description: string | null;
  };
  name: string;
  description: string | null;
  translations: [
    {
      id: number;
      product_id: number;
      locale: string;
      name: string;
      description: string | null;
      created_at: null;
      updated_at: null;
    }
  ];
}

interface IQuestion {
  value: number;
  visible: boolean;
}

interface Feedback {
  question1: IQuestion;
  question2: IQuestion;
  question3: IQuestion;
  question4: string;
}

// {
//   "id": 10,
//   "category_id": 3,
//   "image": "/images/products/miasnoi-salat.png",
//   "price": 34000,
//   "is_active": 1,
//   "created_at": "2024-04-17T11:25:46.000000Z",
//   "updated_at": "2024-04-17T11:25:46.000000Z",
//   "subcategory_id": null,
//   "img_url": "https://forest.webclub.uz/images/products/miasnoi-salat.png",
//   "product_name": "Мясной салат",
//   "product": {
//       "name": "Мясной салат",
//       "description": null
//   },
//   "name": "Мясной салат",
//   "description": null,
//   "translations": [
//       {
//           "id": 10,
//           "product_id": 10,
//           "locale": "ru",
//           "name": "Мясной салат",
//           "description": null,
//           "created_at": null,
//           "updated_at": null
//       }
//   ]
// }
