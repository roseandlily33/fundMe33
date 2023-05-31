const router = require('express').Router();
const {User, Project} = require('../models');
//const withAuth = require('../utils/auth');

//This is working
router.get('/', async(req, res) => {
    try{
        const projectData = await Project.findAll();
        const projects = projectData.map(project => project.get({plain: true}));
        res.render('homepage', {
            projects,
            logged_in: req.session.logged_in
        })
    } catch(err){
        res.status(500).json({message: 'Not able to get the home page'})
    }
})

router.get('/profile', async(req, res) => {
    try{
        console.log('GETTING THE PROFILE PAGE')
        const userData = await User.findByPk(req.session.user_id);
        console.log(userData);
        const user = userData.get({plain: true});
        console.log(user);
        res.render('profile', {
            user,
            logged_in: true
        })

    } catch(err){
        res.status(500).json({message: 'Cannot get the profile page'})
    }
});

router.get('/login', (req, res) => {
    if(req.session.logged_in){
        res.redirect('/profile');
        return;
    } res.render('login')
})

router.get('/project/:id', async(req, res) => {
    try{
        const projectData = await Project.findByPk(req.params.id);
        const project = projectData.get({plain: true});
        res.render('project', {
            project,
            logged_in: req.session.logged_in
        })
    } catch(err){
        res.status(500).json({message: 'Cannot get a single project'})
    }
})


module.exports = router;