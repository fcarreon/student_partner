const requests_controller = {};

const help_request_model = require('../models/help_request')

requests_controller.New_Request = async (req, res) => {

    const request = new help_request_model(req.body);
    await request.save()

    res.send('Request Saved')

}

module.exports = requests_controller;