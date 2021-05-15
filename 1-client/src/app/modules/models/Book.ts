export interface Book {
    id: number;
    imageUrl: string;
    price: string;
    title: string;
}

export interface BooksRespone {
    success: boolean;
    data: [{
        id: number,
        imageUrl: string,
        price: string,
        title: string,
    }];
}

export interface BookRespone {
    success: boolean;
    data: {
        id: number,
        imageUrl: string,
        price: string,
        title: string,
    };
}
