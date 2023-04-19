const router = require('express').Router();
const { Project } = require('../../models');

// localhost:3001/api/projects

router.get('/:id', async (req, res) => {
    if(!req.session.loggedIn){
        res.redirect('/login');
    } else {
        try{
            const projectData = await Project.findByPk(req.params.id);
            const project = projectData.get({plain: true});
            res.render('singleProject',{
            project,
            loggedIn: req.session.loggedIn
        });
        } catch(err){
            res.status(500).json(err);
        }
    }
})

// Post a project:
router.post('/', async (req, res )=> {
    try{
        const newProj = await Project.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(newProj);
    } catch(err){
        res.status(500).json(err);
    }
});

//Delete a project:
router.delete('/:id', async (req, res) => {
    try{
        const delProject = await Project.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        })
        if(!delProject){
            res.status(404).json({message: 'No user found'})
        }
        res.status(200).json(delProject);

    } catch(err){
        res.json(500).json(err)
    }
})

module.exports = router;