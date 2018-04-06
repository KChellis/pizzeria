function Pizza(size, cheap, regular, premium) {
  this.size = size;
  this.sauce = sauce;
  this.cheap = cheap;
  this.regular = regular;
  this.premium = premium;
  this.price = 15;
}

Pizza.prototype.findPrice = function() {
  if (this.size === "medium") {
    this.price += 2.5;
  }else if (this.size === "large") {
    this.price += 5;
  }
  this.price += this.cheap.length + (2 * this.regular.length) + (3 * this.premium.length);
}
