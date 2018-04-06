var name;
var sauce;
var size;
var toppings;
var choice;
var total = 0;
var pizzaCount = 0;
function Pizza(name, size, sauce) {
  this.name = name;
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
  if (this.size === "Medium") {
    this.price += 2.5 + cheap + (2 * regular) + (3 * premium);
  }else if (this.size === "Large") {
    this.price += 5 + (1.25 * cheap) + (2.5 * regular) + (3.5 * premium);
  }else if (this.size === "XLarge") {
    this.price += 7.5 + (1.5 * cheap) + (3 * regular) + (4 * premium);
  }else {
    this. price += (.75 * cheap) + regular + (2 * premium);
  }
}
Pizza.prototype.allToppings = function() {
    toppings = this.cheap.concat(this.regular.concat(this.premium));
}
$(function() {
  function listElements(sauce, array) {
    var string= "<li>" + sauce + "</li>"
    for (var i = 0; i < array.length; i++) {
      string += "<li>" + array[i] + "</li>";
    }
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
  $(".pizzaForm").submit(function(event) {
    event.preventDefault();
    size = $(this).find(".size").val();
    if (choice === "create") {
      sauce = $(".sauce").val();
      name = "Custom";
      newPizza = new Pizza(name, size, sauce);
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
    }else {
      var pizza = $("#pizza").val()
      if (pizza === "Garlic & Cheese Lovers") {
        sauce = "Creamy Garlic Sauce";
        newPizza = new Pizza(pizza, size, sauce);
        newPizza.cheap = ["Roasted Garlic"];
        newPizza.regular = ["Pecorino", "Mozzarella Bufala"];
        newPizza.premium = ["Gorgonzola"];
      }else if (pizza === "Meat Lovers") {
        sauce = "Creamy Garlic Sauce";
        newPizza = new Pizza(pizza, size, sauce);
        newPizza.regular = ["Pepperoni", "Bacon", "Italian Sausage", "Salami"];
        newPizza.premium = ["Proscuitto"];
      }else {
        sauce = "Pesto"
        newPizza = new Pizza(pizza, size, sauce);
        newPizza.cheap = ["Mushrooms", "Italian Olives", "Bell Peppers", "Serrano Peppers", "Red Onions", "Basil", "Arugula"];
      }
    }
    newPizza.findPrice();
    total += newPizza.price;
    $("#total").text(total.toFixed(2));
    newPizza.allToppings();
    $("#addPizza").append("<li class='pizza'><p>"+ newPizza.size + " " + newPizza.name + " pizza: $" + newPizza.price.toFixed(2) + "</p><ul class='toppings'>" + listElements(sauce, toppings) + "</ul></li>");
    $("#myPizzas").show();
    $("input:checkbox").prop('checked', false);
    $('select').prop('selectedIndex',0);

    $(".pizza").last().click(function() {
      $(this).find(".toppings").slideToggle();
    });
  });
  $(".checkout").click(function() {
    $("#signature").hide();
    $("#create").hide();
    $(".checkout").hide();
    $(".top").hide();
    $("#checkout").show();
  });
  $(".delivery").click(function() {
    if ($(this).val() === "pickup") {
      $(".pickup").show();
    } else {
      $("#delivery").show();
    }
    $("#checkout").hide();
  });
  $(".address").submit(function() {
    event.preventDefault();
    $("#address").show();
    $(".address").hide();
    $("#street").text($(".street").val());
    $("#city").text($(".city").val());
    $("#state").text($(".state").val());
    $("#zip").text($(".zip").val());
  });
  $(".reset").click(function() {
    location.reload();
  });
});
