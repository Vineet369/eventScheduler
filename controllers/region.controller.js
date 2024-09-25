const { Regions, Questions, Cycles } = require('../models'); 
const moment = require('moment-timezone');

// Helper to calculate the current cycle based on time and duration
const calculateCurrentCycle = (startDate, cycleDurationDays) => {
  const now = moment();  // Current time

  const alignedStart = startDate.clone().startOf('day').add(19, 'hours');  // Set to 7 PM
  const alignedNow = now.clone().startOf('day').add(19, 'hours');  // Align now to 7 PM

  const diff = alignedNow.diff(alignedStart, 'days');  // Difference in days
  const cycle = Math.floor(diff / cycleDurationDays);   // Get the complete cycles

  console.log({now, diff, cycle})
  return cycle + 1;  
};

exports.getCurrentQuestion = async (req, res) => {
  try {
    const { regionId } = req.params;
    // console.log(regionId)
    const region = await Regions.findByPk(regionId);
    if (!region) {
      return res.status(404).json({ error: 'Region not found' });
    }
    
    const cycle = await Cycles.findOne({
      where: {
        region_id: region.id,
      },
    });

    if (!cycle) {
      return res.status(404).json({ error: 'cycle duratin not found' });
    }


    const cycleDurationDays = cycle.cycle_span; 
    const startDate = moment.tz('2024-09-14 19:00', region.time_zone);  
    
    const currentCycle = calculateCurrentCycle(startDate, cycleDurationDays);

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
