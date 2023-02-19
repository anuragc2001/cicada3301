const Admin = require('../../models/admin.model')

const getAdmin = (req, res) => {
    console.log(req.User);
    const adminName = req.User.adminName
    res.render('admin/adminPanel', {adminName})
}

module.exports = {
    getAdmin,
}