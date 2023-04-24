const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://127.0.0.1/issue_tracker_skill_test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', () => {
  console.log('Connected to Database :: MongoDB ✅');
});
