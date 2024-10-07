const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Account = require('../models/Account.js')

const SignupController = async (req, res) => {
    const { phone, password ,role} = req.body
    try {
        let acc = await Account.findOne({ phone })
        if (acc) {
            return res.status(400).json({ message: 'User already exists!' })
        }

        // ma hoa mat khau 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        acc = new Account({
            phone: phone,
            password: hashedPassword,
            role: role
        })
        await acc.save()

        const payload = {
            userId: acc._id,
            userPhone: acc.phone
        }

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '4h' }, (err, token) => {
            if (err) return res.status(500).json({ message: 'Token generation failed' })
            res.json({ token: token, role: acc.role })
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Server error' })
    }
}

module.exports = { SignupController }