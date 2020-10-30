const Tasks = require('../models/tasks');

exports.getIndex = async (req, res) => {
    const tasks = await new Tasks().read();
    console.log(tasks);
    return res.render('app', { tasks: tasks })
};

exports.postIndex = async (req, res) => {
    await new Tasks().save(req.body.task);
    return res.redirect('/app/index');
};

exports.remove = async (req, res) => {
    await new Tasks().remove(req.body.task);
    return res.redirect('/app/index');
};
