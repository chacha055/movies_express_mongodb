module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        titre: String,
        genre: String,
        synopsis: Boolean,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Movies = mongoose.model("movies", schema);
    return Movies;
  };
  