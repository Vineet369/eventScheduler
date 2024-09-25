const { Users, Regions } = require('../models');

const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await Users.findByPk(userId, { include: [Regions] });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, region_id } = req.body;

    const user = await Users.create({
      name,
      email,
      region_id
    });

    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


module.exports = {
  getUserById,
  createUser,
};
