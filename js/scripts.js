var sauce;
var size;
function Pizza(size, sauce) {
  this.size = size;
  this.sauce = sauce;
  this.cheap = [];
  this.regular = [];
  this.premium = [];
  this.price = 10;
}
// 
// Pizza.prototype.findPrice = function() {
//   var cheap = this.cheap.length;
//   var regular = this.regular.length;
//   var premium = this.premium.length;
//   if (this.size === "medium") {
//     this.price += 2.5 + cheap + (2 * regular) + (3 * premium);
//   }else if (this.size === "large") {
//     this.price += 5 + (1.25 * cheap) + (2.5 * regular) + (3.5 * premium);
//   }else if (this.size === "Xlarge") {
//     this.price += 7.5+ (1.5 * cheap + (3 * regular) + (4 * premium);
//   }else {
//     this. price += (.5 * cheap) + regular + (2 * premium);
//   }
// }

$(function() {
  $("#pizzaForm").submit(function(event) {
    size = $("#size").val();
    sauce = $("#sauce").val();
    newPizza = new Pizza(size, sauce);
    $("input:checkbox[name=cheap]:checked").each(function(){
      newPizza.cheap.push($(this).val());
    });
    $("input:checkbox[name=regular]:checked").each(function(){
      newPizza.regular.push($(this).val());
    });
    $("input:checkbox[name=premium]:checked").each(function(){
      newPizza.premium.push($(this).val());
    });
    console.log(newPizza);
    console.log(newPizza.cheap);
    console.log(newPizza.regular);
    console.log(newPizza.premium);





    event.preventDefault();
  });
});
