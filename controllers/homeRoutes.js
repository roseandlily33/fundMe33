const router = require('express').Router();
const {Project} = require('../models');


router.get('/', async (req, res) => {
    try{
        const projectData = await Project.findAll();
        const projects = projectData.map(project => project.get({plain:true}));
        res.render('layouts/main', {
            projects,
            loggedIn: req.session.loggedIn
        });
    } catch(err){
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }
    res.render('login');
})

module.exports = router;