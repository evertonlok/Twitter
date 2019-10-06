const express=require('express')
const router=express.Router()
const TweetController=require('./controllers/TweetController')
const LikeController=require('./controllers/LikeController')
router.get('/',(req,res)=>
{
    res.send('Oi Troxa')
})
router.get('/tweets',TweetController.index)
router.post('/tweets',TweetController.store)
router.post('/likes/:id',LikeController.store)
module.exports=router