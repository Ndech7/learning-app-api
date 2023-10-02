module.exports = (mongoose) => {
  const Hub = mongoose.model(
    "hub",
    mongoose.Schema(
      {
        title: String,
        description: String,
        completed: Boolean,
      },
      {
        timestamps: true,
      }
    )
  );
  return Hub;
};
