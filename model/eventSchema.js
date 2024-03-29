const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    // required:true
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  freeEvent: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
  },
  image:{
    type:Object,
    
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organizer",
  },
  venue: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"venue"
  },

  date: {
    type: String,
  },
  Ticketprice: {
    type: Number,
    // required: true,
  },
  maximumseats: {
    type: Number,
  },
  
});

const event = mongoose.model("event", eventSchema);

module.exports = event;
