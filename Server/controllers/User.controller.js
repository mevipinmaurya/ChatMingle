import UserModel from "../models/user.model.js";
import bcrypt from 'bcrypt'
import validator from 'validator'
import jwt from 'jsonwebtoken'

// Create token function (for creating token)
const JWT_SECRET = "user#secret"
const createToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET)
}


// User signup code
const userSignup = async (req, res) => {
    const { username, email, password } = req.body;
    const exists = await UserModel.findOne({ email: email })

    try {
        if (exists) {
            return res.json({
                success: false,
                message: "User already exist!!!"
            })
        }

        // Validating the email
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Please enter a valid email !!"
            })
        }

        // Hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        const user = await UserModel({
            username: username,
            email: email,
            password: hashedPass
        })

        // storing the user id for sessions
        const newUser = await user.save();
        const token = createToken(newUser._id);

        res.json({
            success: true,
            token
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Error"
        })
    }
}


// User login function
const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email })
        if (!user) {
            return res.json({
                success: false,
                message: "User does not exist"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.json({
                success: false,
                message: "Incorrect password !!!"
            })
        }

        const token = createToken(user._id);
        return res.json({
            success: true,
            name : user.username,
            token
        })
    } catch (error) {
        console.log(error)
        res.json({
            success : false,
            message : "Error"
        })
    }
}

export { userSignup, userLogin }