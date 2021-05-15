export interface Comment {
    id: number;
    comment: string;
    postId: number;
    userId: number;
    createdAt: Date | string;
}

export interface GetCommentRespone {
    success: boolean;
    comments: [{
        id: number,
        comment: string,
        userId: number,
        postId: number,
        createdAt: string,
        updatedAt: string,
        user: {
            id: number,
            profileImgUrl: string | null,
            username: string,
        }
    }];
    postTitle: string;
}

export interface PostCommentRespone {
    success: boolean;
    message: string;
    newComment: Comment;
}

export interface DeleteCommentRespone {
    success: boolean;
    message: string;
}
