const { Users, Regions } = require('../models');

// Fetch a user and their region
const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch user with their associated region
    const user = await Users.findByPk(userId, { include: [Regions] });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with user and region data
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new user and associate with a region
const createUser = async (req, res) => {
  try {
    const { name, email, region_id } = req.body;

    // Create user
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

// Update user region
// const updateUserRegion = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const { region_id } = req.body;

//     const user = await Users.findByPk(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Update user region
//     user.region_id = region_id;
//     await user.save();

//     res.json({ message: 'User region updated', user });
//   } catch (error) {
//     console.error('Error updating user region:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Delete a user
// const deleteUser = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const user = await Users.findByPk(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     await user.destroy();
//     res.json({ message: 'User deleted' });
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

module.exports = {
  getUserById,
  createUser,
//   updateUserRegion,
//   deleteUser
};
