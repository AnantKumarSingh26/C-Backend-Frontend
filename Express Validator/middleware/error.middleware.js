import dotenv from "dotenv";

dotenv.config();

function handleError(err, req, res, next) {
    const response={
        message: err.message,
    }
    if(process.env.NODE_ENVIROMENT==="development"){
        response.stack=err.stack;
    }
 
    res.status(err.statusCode).json(
        { 
                response
            // error: err.message ,
            // stack: err.stack
        });
}

export default handleError;