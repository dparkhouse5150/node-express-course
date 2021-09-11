const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../models/BadRequestError')
const { UnauthenticatedError } = require('../models/UnauthenticatedError')

const register = async (req, res) => {
    const user = await User.create({ ...req.body })
    const token = user.createJWT()

    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        throw new BadRequestError('please provide a valid password and email address')
    }

    const user = await User.findOne({ email })

    if (!user) {
        throw new UnauthenticatedError('please provide a valid email address')
    }

    const isPassworCorrect = await User.comparePassword(password)

    if (!isPassworCorrect) {
        throw new UnauthenticatedError('please provide a valid password')
    }

    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user: { name: user.name }, token})
}

module.exports = { register, login }