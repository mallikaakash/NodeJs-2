const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req,res)=> {
    res.status(200).json({message: 'get Goals'})
})

const setGoals = asyncHandler(async (req,res)=> {
    if (!req.body.text){
        res.status(400)
        throw new error('Please ad a text field')
    }
})

const updateGoals = asyncHandler(async (req,res)=> {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

const deleteGoals = asyncHandler(async (req,res)=> {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    deleteGoals,
    updateGoals
}