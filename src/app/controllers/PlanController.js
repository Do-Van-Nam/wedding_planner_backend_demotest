const Plan = require('../models/Plan')

const getPlanByAccId=async (req,res)=>{
    const accId= req.params.accId
try {
    let plan = await Plan.findOne({ accId })
    return res.status(200).json({plan})
} catch (error) {
    console.log(error)
        return res.status(400).json({ message: 'Server error' })
}
}

module.exports = {getPlanByAccId}