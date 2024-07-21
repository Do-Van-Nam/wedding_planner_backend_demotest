const Account = require('../models/Account')

const AccountController = async (req, res) => {
    try {
        const accs = await Account.find({})
        res.json({ accs: accs })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Server error' })
        
    }
}

module.exports = { AccountController }