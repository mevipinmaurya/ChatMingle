import UserModel from "../models/user.model.js";


// User signup code
const userSignup = async (req, res) => {
    const { username, email, password } = req.body;
    const exists = await UserModel.findOne({ email: email })
    if (exists) {
        return res.json({
            success: false,
            message: "User already exist!!!"
        })
    }

    const user = await UserModel({
        username: username,
        email: email,
        password: password
    })
    await user.save();
    res.json({
        success: true,
        message: "User Registered successfully"
    })
}


// User login function
const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const check = await UserModel.findOne({ email: email })
    if (check) {
        if (check.password === password) {
            return res.json({
                success: true,
                message: "Logged in"
            })
        } else {
            return res.json({
                success: false,
                message: "Incorrect password !!!"
            })
        }
    }

    return res.json({
        success: false,
        message: "User does not exists Please signup first !!"
    })
}

export { userSignup, userLogin }