// controllers/regionController.js
const { Regions, Questions } = require('../models'); // Assuming you have defined models for Region and Question
const moment = require('moment-timezone');

// Helper to calculate the current cycle based on time and duration
const calculateCurrentCycle = (startDate, cycleDurationDays) => {
  const now = moment();  // Current time

  const alignedStart = startDate.clone().startOf('day').add(19, 'hours');  // Set to 7 PM
  const alignedNow = now.clone().startOf('day').add(19, 'hours');  // Align now to 7 PM

  const diff = alignedNow.diff(alignedStart, 'days');  // Difference in days
  const cycle = Math.floor(diff / cycleDurationDays);   // Get the complete cycles

  console.log({now, diff, cycle})
  return cycle + 1;  // Return the current cycle (starts from 1)
};

exports.getCurrentQuestion = async (req, res) => {
  try {
    const { regionId } = req.params;
    // console.log(regionId)
    
    // Find the region based on the region ID
    const region = await Regions.findByPk(regionId);
    // console.log(region)
    if (!region) {
      return res.status(404).json({ error: 'Region not found' });
    }

    const cycleDurationDays = 7; // Default cycle duration (can be dynamic)
    const startDate = moment.tz('2024-09-14 19:00', region.time_zone);  // Start date for the cycle
    
    // Calculate the current cycle based on the region's time zone
    const currentCycle = calculateCurrentCycle(startDate, cycleDurationDays);
    // console.log(currentCycle + "currentCycle")

    // Find the corresponding question for the current cycle in the region
    const question = await Questions.findOne({
      where: {
        cycle: currentCycle, 
        region_id: region.id,
      },
    });

    if (!question) {
      return res.status(404).json({ error: 'No question found for the current cycle' });
    }

    res.json({ question });
  } catch (error) {
    console.error('Error fetching current question:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
