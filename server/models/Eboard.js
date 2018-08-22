var mongoose = require('mongoose');

var EboardSchema = new mongoose.Schema({
  name: String,
  slug: String,
  year: Number,
  range: Number,  //miles
  speed: Number //mph
})

EboardSchema.methods.slugify = function() {
  this.slug = slug(this.name);
};

EboardSchema.pre('validate', function(next) {
  if (!this.slug) {
    this.slugify();
  } else if (this.slug != slug(this.name)) {
    this.slugify();
  }
  next();
});

mongoose.model('Eboard', EboardSchema);
