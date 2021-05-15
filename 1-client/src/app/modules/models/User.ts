export interface GetUserProfileRespone {
    success: boolean;
    data: {
        id: number,
        profileImgUrl: string | null,
        firstName: string | null,
        lastName: string | null,
        username: string,
        email: string,
        birthday: Date | null,
        phone: string | null,
        post: [{
            id: number,
            imageUrl: string,
            title: string,
            content: string,
            createdAt: Date,
            updatedAt: Date,
        }],
        comment: [{
            id: number,
            comment: string,
            postId: number,
            userId: number,
            createdAt: Date
        }]
    };
    iat: number;
    exp: number;
}

export interface UpdateUserProfileRespone {
    success: boolean;
    message: string;
    user: string;
}

export interface ChangePasswordRespone {
    success: boolean;
    message: string;
}

export interface UploadProfileImageRespone {
    success: boolean;
    message: string;
    profileImgUrl: string;
}

export interface DeleteProfileRespone {
    success: boolean;
    message: string;
}
