export const successResponse = (data: any, message: string = "Success") => {
    return {
        success: true,
        message,
        data
    };
};

export const errorResponse = (message: string = "Error", error: any = null) => {
    return {
        success: false,
        message,
        error
    };
};
