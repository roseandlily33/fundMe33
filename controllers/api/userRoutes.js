const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async(req, res) => {
    try{
        console.log(req.body);
        console.log('HITTING THE CREATE A USER')
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
       console.log(userData);
       req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.status(200).json(userData);
      });
    } catch(err){
        res.status(500).json({message: 'Cannot create the user'})
    }
});

router.post('/login', async(req, res) => {
    try{
        const userData = await User.findOne({where: {email: req.body.email}});
        if(!userData){
            res.status(400).json({message: 'Not a valid username or password'});
            return;
        }
        const validPass = userData.checkPassword(req.body.password);

        if(!validPass){
            res.status(400).json({message: 'Not valid username or password'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id,
            req.session.logged_in = true
        });
        res.json(userData);

    } catch(err){
        res.status(500).json({message: 'Couldnt login'})
    }
});

router.post('/logout', (req, res) => {
    if(req.session.logged_in){
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})


module.exports = router;