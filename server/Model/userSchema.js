import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  notes: Array,
  archiveNotes: Array,
  TrashNotes: Array,
});

const user = mongoose.model("user", userSchema);
export default user;
