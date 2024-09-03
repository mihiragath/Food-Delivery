// userController.js
const userModel = require('../models/updatedeletemodel');

class UserController {
    

    async updateUser(req, res) {
        try {
            const userId = req.params.id;
            const updated = await userModel.updateUser(userId, req.body);
            if (updated) {
                res.json({ message: 'User updated successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred while updating user');
        }
    }

    async deleteUser(req, res) {
        try {
            const userId = req.params.id;
            const deleted = await userModel.deleteUser(userId);
            if (deleted) {
                res.json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred while deleting user');
        }
    }
}

module.exports = new UserController();
