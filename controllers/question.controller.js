const { Op } = require('sequelize');
const { Regions, Questions, Cycles, Users } = require('../models');

// Helper function to get current date and time in a specific timezone
const getCurrentDateInTimeZone = (timeZone) => {
  return new Date(new Date().toLocaleString('en-US', { timeZone }));
};

// Get current question for a user based on region and current cycle
const getCurrentQuestionForUser = async (req, res) => {
  const { userId } = req.params;

  // Fetch the user and their region
  const user = await Users.findByPk(userId, { include: [Regions]});
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const regionId = user.region_id;
  const userTimeZone = user.Region?.time_zone; // Assuming the Region model has a time_zone field
  
  // Get the current date and time in the user's time zone
  const currentDate = getCurrentDateInTimeZone(userTimeZone);


  // Find current cycle based on region and current date
  const cycle = await Cycles.findOne({
    where: {
      region_id: regionId,
      start_date: { [Op.lte]: currentDate },
      end_date: { [Op.gte]: currentDate }
    },
    include: [Questions]
  });

  if (!cycle) {
    return res.status(404).json({ message: 'No active cycle found for the region' });
  }

  // Return the question assigned for the current cycle
  res.json({
    question: cycle.Questions.question_text
  });
};

// Assign a question to a cycle for a region
const assignQuestionToCycle = async (req, res) => {
  const { regionId, questionId, startDate, endDate } = req.body;

  // Create a new cycle
  const cycle = await Cycles.create({
    region_id: regionId,
    question_id: questionId,
    start_date: startDate,
    end_date: endDate
  });

  res.json({ message: 'Question assigned to cycle', cycle });
};

module.exports = { getCurrentQuestionForUser, assignQuestionToCycle };
