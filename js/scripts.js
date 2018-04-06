function Pizza(size, sauce, cheap, regular, premium) {
  this.size = size;
  this.sauce = sauce;
  this.cheap = cheap;
  this.regular = regular;
  this.premium = premium;
  this.price = 10;
}

Pizza.prototype.findPrice = function() {
  var cheap = this.cheap.length;
  var regular = this.regular.length;
  var premium = this.premium.length;
  if (this.size === "medium") {
    this.price += 2.5 + cheap + (2 * regular) + (3 * premium);
  }else if (this.size === "large") {
    this.price += 5 + (1.25 * cheap) + (2.5 * regular) + (3.5 * premium);
  }else if (this.size === "Xlarge") {
    this.price += 7.5+ (1.5 * cheap + (3 * regular) + (4 * premium);
  }else {
    this. price += (.5 * cheap) + regular + (2 * premium);
  }
}
