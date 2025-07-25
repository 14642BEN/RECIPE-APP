const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  instructions: String,
  image: String,
  category: String, // <-- Add this field
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });
