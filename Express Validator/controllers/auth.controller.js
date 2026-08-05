

export async function registerUser(req, res, next) {

    try {
        // throw new Error("Encountered an error while registering the user.");
        // const error = new Error("Password is too weak. Please choose a stronger password.");
        const error = new Error("Email is already in use. Please choose a different email.");
        throw error;
        
    } catch (error) {
        error.statusCode = 409; // Bad Request
        next(error);
    }
}