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

module.exports = router;