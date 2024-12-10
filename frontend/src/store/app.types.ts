export interface Book {
  _id: string;
  title: string;
  author: string;
  price: string;
  quantity: number;
}

export interface AppSlice {
  isMenuOpen: boolean;
  query: string;
  index: number;
  cart: {
    [key: string]: Book;
  };
}
