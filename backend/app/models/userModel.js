module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          subjectName: String,
          description: String,
          location: String,
          price: Number,
        },
        { timestamps: false }
      )
    );
  
    return User;
  };
  