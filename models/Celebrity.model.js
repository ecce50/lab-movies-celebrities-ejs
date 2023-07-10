const { Schema, model } = require("mongoose");
const difficulty = require("../utils/difficultyValues");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const celebritySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    occupation: {
      type: String,
      required: true,
      trim: true,
    },
    catchphrase: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Celebrity = model("Celebrity", celbritySchema);

module.exports = Celebrity;
