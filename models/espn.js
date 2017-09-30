// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var espnSchema = new Schema({
  // info is a required string
  info: {
    type: String,
    required: true
  },
  // adress is a required string
  adress: {
    type: String,
    required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// Create the espn model with the sportSchema
var espn = mongoose.model("espn", espnSchema);

// Export the model
module.exports = espn;
