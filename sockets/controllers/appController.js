const Messages = require('../models/message');

exports.getIndex = async (req, res) => {
    const messages = await new Messages().read();
    console.log(messages);
    return res.render('app', {messages:messages})
};

exports.postIndex = async (req, res) => {
    await new Messages().save(req.body.message);
    return res.redirect('/app/index');
};

exports.remove = async (req, res) => {
    await new Messages().remove(req.body.message);
    return res.redirect('/app/index');
};
