import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      index: true, // ✅ Index for fast searching
    },
    completed: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true, // ✅ Adds createdAt & updatedAt
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// ✅ Virtual field (not stored in DB)
todoSchema.virtual("isOverdue").get(function () {
  if (!this.dueDate) return false;
  return !this.completed && new Date() > this.dueDate;
});

// ✅ Middleware (Triggers)

// Before saving
todoSchema.pre("save", function (next) {
  console.log(`📌 Before saving todo: ${this.title}`);
  next();
});

// After saving
todoSchema.post("save", function (doc) {
  console.log(`✅ Todo "${doc.title}" saved successfully!`);
});

// Before deleting
todoSchema.pre("findOneAndDelete", function (next) {
  console.log(`⚠ Todo is about to be deleted:`, this.getQuery());
  next();
});

// ✅ Compound Index (optimizes queries on multiple fields)
todoSchema.index({ completed: 1, dueDate: -1 });

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
