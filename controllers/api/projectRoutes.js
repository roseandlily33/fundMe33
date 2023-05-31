const router = require('express').Router();
const { Project } = require('../../models');

router.post('/', async(req, res) => {
    try{
        const newProject = await Project.create({
            ...req.body,
            user_id: req.session.user_id,
          }
      )
        res.status(200).json(newProject);
    } catch(err){
        res.status(500).json({message: 'Cannot create the projects'});
    }
});

router.delete('/:id', async(req, res) => {
    try{
         const projectData = await Project.destroy({
            where: {
              id: req.params.id,
              user_id: req.session.user_id,
            },
          });
        res.json(projectData);
    } catch(err){
        res.status(500).json({message: 'Cannot delete the '})
    }
})

module.exports = router;