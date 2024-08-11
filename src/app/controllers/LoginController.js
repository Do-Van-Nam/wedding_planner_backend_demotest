const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Account = require('../models/Account.js')

const LoginController = async (req, res) => {
    const { phone, password } = req.body
    try {
        const acc = await Account.findOne({ phone })
        if (!acc) {
            return res.status(400).json({ message: 'User not found!' })
        }
        bcrypt.compare(password, acc.password, (err, isMatch) => {
            if (err) return res.status(500).json({ message: 'Server error' })
            if (!isMatch) return res.status(400).json({ message: 'Password is incorrect' })

            const payload = {
                userId: acc._id,
                userPhone: acc.phone,
                userRole: acc.role
            }
            jwt.sign(payload, process.env.JWT_SECRET , { expiresIn: '4h' }, (err, token) => {
                if (err) {
                    console.error('Token generation failed:', err);
                    return res.status(500).json({ message: 'Token generation failed' })
                }
                    
                res.json({ token: token, user:acc })
            })
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Server error' })
    }


}

module.exports = { LoginController }