const { Cycles } = require('../models');
const moment = require('moment-timezone');

exports.addCycle = async (req, res) => {
  try {
    const { start_date, end_date, region_id, question_id, cycle_span } = req.body;

    // Convert dates to moment objects
    const startDate = moment.tz(start_date, 'YYYY-MM-DD HH:mm:ss', 'UTC');
    const endDate = moment.tz(end_date, 'YYYY-MM-DD HH:mm:ss', 'UTC');

    // Validate that the start_date is earlier than the end_date
    if (startDate.isAfter(endDate)) {
      return res.status(400).json({ error: 'Start date must be before end date' });
    }

    const newCycle = await Cycles.create({
      start_date: startDate,
      end_date: endDate,
      region_id,
      question_id,
      cycle_span,  
    });

    res.status(201).json({
      message: 'Cycle created successfully',
      cycle: newCycle,
    });
  } catch (error) {
    console.error('Error creating cycle:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateCycleSpan = async (req, res) => {
    try {
      const { cycleId } = req.params;
      const { cycle_span } = req.body;
  
      const cycle = await Cycles.findByPk(cycleId);
      if (!cycle) {
        return res.status(404).json({ error: 'Cycle not found' });
      }
  
      cycle.cycle_span = cycle_span;
      await cycle.save();
  
      res.status(200).json({
        message: 'Cycle span updated successfully',
        cycle,
      });
    } catch (error) {
      console.error('Error updating cycle span:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };

exports.updateCycleQuestion = async (req, res) => {
try {
    const { cycleId } = req.params;
    const { question_id } = req.body;

    const cycle = await Cycles.findByPk(cycleId);
    if (!cycle) {
    return res.status(404).json({ error: 'Cycle not found' });
    }

    cycle.question_id = question_id;
    await cycle.save();

    res.status(200).json({
    message: 'Question assigned to cycle updated successfully',
    cycle,
    });
} catch (error) {
    console.error('Error updating question for cycle:', error);
    res.status(500).json({ error: 'Server error' });
}
};

  