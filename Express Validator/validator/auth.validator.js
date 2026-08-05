import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return next()
    }
    res.status(400).json({ errors: errors.array()   })
}

export const registerValidation = [
    body("email").isEmail().withMessage("Please provide a valid email address."),
    body("password").isLength({ min: 6,max:12 }).withMessage("Password must be 6-12 characters long."),
    body("username").isString().withMessage("Username type mismatch"),
    validate
]