export interface Cart {
  data: [{
    product: {
      id: number,
      imageUrl: string,
      price: string,
      title: string,
    } | undefined,
    quantity: number
  }];
  total: number;
}
