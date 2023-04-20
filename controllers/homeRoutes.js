const router = require('express').Router();
const {User, Project} = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
        const projectData = await Project.findAll();
       // console.log(projectData);
        const projects = projectData.map(proj => proj.get({plain:true}));
        res.render('projects', {
            projects,
            logged_in: req.session.logged_in
        });
    } catch(err){
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    if(req.session.logged_in){
        res.redirect('/profile');
        return;
    }
    res.render('login');
})

router.get('/signUp', (req, res) => {
    res.render('signUp');
})

router.get('/profile', async(req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id);
        const user = userData.get({plain: true});
        
        res.render('profile', user);
    } catch(err){
        res.status(500).json({message: 'No profile found'});
    }
})

router.get('/project/:id', async(req,res) => {
    try{
        const projectData = await Project.findByPk(req.params.id);
        const project = projectData.get({plain: true});
        console.log(project);
        res.render('singleProject',
        project)

    } catch(err){
        res.status(500).json({message: 'No project found'});
    }
})





module.exports = router;