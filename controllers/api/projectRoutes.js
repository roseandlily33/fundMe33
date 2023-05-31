const router = require('express').Router();
const { Project } = require('../../models');

router.post('/', async(req, res) => {
    try{
        console.log('POSTING A PROJECT')
        console.log(req.body);
        const newProject = await Project.create({
            ...req.body,
            user_id: req.session.user_id,
          }
      );


        console.log(newProject)
        res.status(200).json(newProject);
    } catch(err){
        res.status(500).json({message: 'Cannot create the projects'});
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const projectData = await Project.destory({
            where: {
                user_id: req.session.user_id, 
                id: req.params.id
            }
        });
        if(!projectData){
            res.status(404).json({message: 'Project cannot be deleted'});
            return;
        }
        res.status(200).json(projectData);
    } catch(err){
        res.status(500).json({message: 'Cannot elete the '})
    }
})

module.exports = router;