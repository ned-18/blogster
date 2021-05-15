export interface Post {
    title: string;
    content: string;
    type: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    user: {
        id: number,
        username: string,
    };
    comments: [{
        id: number,
        comment: string,
        userId: string,
        postId: string,
        createdAt: string,
    }] | [];
}

export interface PostServer {
    imageUrl: File | string;
    title: string;
    content: string;
    type: string;
}

export interface FormData {
  formValue: {
    imageUrl: File | string;
    title: string;
    content: string;
    type: string;
  };
  postId: number;
}

export interface PostsRespone {
    sucess: boolean;
    data: [{
        imageUrl: string,
        title: string,
        content: string,
        type: string,
        user: {
            id: number,
            username: string
        },
        comments: [{
            id: number,
            comment: string,
            userId: string,
            postId: string,
            createdAt: string,
        }] | []
    }];
    totalPosts: number;
}

export interface PostRespone {
    success: boolean;
    data: {
        title: string;
        content: string;
        type: string;
        imageUrl: string;
        createdAt: string;
        updatedAt: string;
        user: {
            id: number,
            username: string,
        };
        comments: [{
            id: number,
            comment: string,
            userId: string,
            postId: string,
            createdAt: string,
        }] | [];
    };
}

export interface CreatePostRespone {
    success: boolean;
    message: string;
    post: {
        imageUrl: string,
        title: string,
        content: string,
        type: string,
        userId: number
    };
}

export interface UpdatePostRespone {
    success: boolean;
    message: string;
}

export interface DeletePostRespone {
    success: boolean;
    message: string;
}
