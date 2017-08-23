$(document).ready(function() {
  var bagCount = 0;
  var tentCount = 0
  var tireCount = 0
  var beerCount = 0

  var totalPriceCount = 0
  var totalWeightCount = 0

  $("#bagCounter").text("Count: "+bagCount)
  $("#tentCounter").text("Count: "+tentCount)
  $("#tireCounter").text("Count :"+tireCount)
  $("#beerCounter").text("Count :"+beerCount)
  $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
  $(".totalWeightCount").text("Total Weight: "+totalWeightCount +" lbs")

  $("#bagIncrease").click(function() {
    bagCount++
    totalPriceCount += 70
    totalWeightCount += 3
    $("#bagCounter").text("Count: "+bagCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
    if (totalWeightCount > 200 || totalPriceCount > 200) {
      $("#validate").addClass('invalid')
    }
  })

  $("#bagDecrease").click(function() {
    if(bagCount > 0) {
    bagCount--
    totalPriceCount -= 70
    totalWeightCount -= 3
    $("#bagCounter").text("Count: "+bagCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
    }
    if (totalWeightCount <= 200 && totalPriceCount <= 200) {
      $("#validate").removeClass('invalid')
    }
  })

  $("#tentIncrease").click(function() {
    tentCount++
    totalPriceCount += 100
    totalWeightCount += 5
    $("#tentCounter").text("Count: "+tentCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
    if (totalWeightCount > 200 || totalPriceCount > 200) {
      $("#validate").addClass('invalid')
    }
  })

  $("#tentDecrease").click(function() {
    if(tentCount > 0) {
    tentCount--
    totalPriceCount -= 100
    totalWeightCount -= 5
    $("#tentCounter").text("Count: "+tentCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
    }
    if (totalWeightCount <= 200 && totalPriceCount <= 200) {
      $("#validate").removeClass('invalid')
    }
  })

  $("#tireIncrease").click(function() {
    tireCount++
    totalPriceCount += 100
    totalWeightCount += 25
    $("#tireCounter").text("Count: "+tireCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
    if (totalWeightCount > 200 || totalPriceCount > 200) {
      $("#validate").addClass('invalid')
    }
  })

  $("#tireDecrease").click(function() {
    if(tireCount > 0) {
    tireCount--
    totalPriceCount -= 100
    totalWeightCount -= 25
    $("#tireCounter").text("Count: "+tireCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
    }
    if (totalWeightCount <= 200 && totalPriceCount <= 200) {
      $("#validate").removeClass('invalid')
    }
  })

  $("#beerIncrease").click(function() {
    beerCount++
    totalPriceCount += 10
    totalWeightCount += 5
    $("#beerCounter").text("Count: "+beerCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
    if (totalWeightCount > 200 || totalPriceCount > 200) {
      $("#validate").addClass('invalid')
    }
  })

  $("#beerDecrease").click(function() {
    if(beerCount > 0) {
    beerCount--
    totalPriceCount -= 10
    totalWeightCount -= 5
    $("#beerCounter").text("Count: "+beerCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
    }
    if (totalWeightCount <= 200 && totalPriceCount <= 200) {
      $("#validate").removeClass('invalid')
    }
  })


  $("#validate").click(function() {
    $.post('/validate', {price: totalPriceCount, weight: totalWeightCount}, function(data) {
      console.log(data)
      $("#validateP").text(data)
    })
    if (totalPriceCount > 200 && totalWeightCount > 200) {
      $("#validateP").text("Sorry. Your total price and total weight exceed the limit. Please remove an item from the list.")
      $("#validateP").css({color: 'red'})
    } else if (totalWeightCount > 200) {
      $("#validateP").text("Sorry. Your total weight exceeds the 200 lb. limit. Please remove an item from the list.")
      $("#validateP").css({color: 'red'})
    } else if(totalPriceCount > 200) {
      $("#validateP").text("Sorry. Your total price exceeds the $200 limit. Please remove an item from the list.")
      $("#validateP").css({color: 'red'})
    } else {
      $("#validateP").text("Congrats! Your cargo is valid!")
      $("#validateP").css({color: 'green'})
    }
  })



})
