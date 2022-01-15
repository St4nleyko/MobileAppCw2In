module.exports = mongoose => {
    const Lesson = mongoose.model(
      "lesson",
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
  
    return Lesson;
  };
  