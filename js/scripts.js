var sauce;
var size;
var toppings;
var choice;
var pizzaCount = 0;
function Pizza(size, sauce) {
  this.size = size;
  this.sauce = sauce;
  this.cheap = [];
  this.regular = [];
  this.premium = [];
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
    this.price += 7.5 + (1.5 * cheap) + (3 * regular) + (4 * premium);
  }else {
    this. price += (.75 * cheap) + regular + (2 * premium);
  }
}
Pizza.prototype.allToppings = function() {
    toppings = this.cheap.concat(this.regular.concat(this.premium));
}
$(function() {
  function listElements(array) {
    string= ""
    for (var i = 0; i < array.length; i++) {
      string += "<li>" + array[i] + "</li>";
    }
    console.log(string);
    return string;
  }
  $(".choice").click(function(){
    choice = $(this).val();
    if (choice === "create") {
      $("#create").show();
      $("#signature").hide();
    }else {
      $("#create").hide();
      $("#signature").show();
    }
  });
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    size = $("#size").val();
    sauce = $("#sauce").val();
    newPizza = new Pizza(size, sauce);
    pizzaCount += 1;
    $("input:checkbox[name=cheap]:checked").each(function(){
      newPizza.cheap.push($(this).val());
    });
    $("input:checkbox[name=regular]:checked").each(function(){
      newPizza.regular.push($(this).val());
    });
    $("input:checkbox[name=premium]:checked").each(function(){
      newPizza.premium.push($(this).val());
    });
    newPizza.findPrice();
    newPizza.allToppings();
    console.log(newPizza);
    $("#addPizza").append("<li class='pizza'><p>Custom " + newPizza.size + " pizza with " + newPizza.sauce + ": $" + newPizza.price + "</p><ul class='toppings'>" + listElements(toppings) + "</ul></li>");
    $("#myPizzas").show();
    $("input:checkbox").prop('checked', false);
    $('#size').prop('selectedIndex',0);
    $('#sauce').prop('selectedIndex',0);

    $(".pizza").last().click(function() {
      $(this).find(".toppings").slideToggle();
    });
  });

});
