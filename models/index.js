const { User, Project} = require('../models');

User.hasMany(Project, {
    foreignKey: '',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
    foreignKey: ''
})