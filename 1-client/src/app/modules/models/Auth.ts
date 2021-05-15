// Register
export interface RegisterRespone {
    success: boolean;
    message: string;
    user: string;
}

export interface RegisterUser {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

// Login
export interface LoginRespone {
    success: boolean;
    message: string;
    user: {
        id: number,
        username: string,
        email: string,
        profileImage: string,
    };
}

export interface LoginUser {
    usernameOrEmail: string;
    password: string;
}

// Logout
export interface LogoutRespone {
    success: boolean;
    message: string;
}

// CheckAuth
export interface CheckAuthUser {
    authenticated: boolean;
    username: string | null;
    profileImage: string | null;
}

