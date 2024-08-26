/*
//Business Sim - JavaScript Edition by SarveshwarS

var deal_given = false
var money_needed_to_start = 0
var chance = Math.random(5)
var mon_per_hour = parseInt(prompt("How much money would you like to earn per hour? Example(50, 75): "))
var total_money = 0
var experience = 0
var weeks = 0
var accepted_deal = false

var time_tested = parseInt(prompt("How many weeks would you like to test?: "))

//We have no expenses other than time because we will be doing it ourselves.

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

do{
  chance = getRandomInt(1, 6)
  weeks += 1
  
  if (chance <= 3){
    var gotProject = true
  }

  else{
    var gotProject = false
  }

  if (gotProject == true){
    var time_needed = getRandomInt(8, 41)
    experience = experience + time_needed
   
    var money_made = time_needed * mon_per_hour
    total_money = total_money + money_made
  }

  if (experience > 2000){
    var rare_chance = getRandomInt(1, 10001)
    if (rare_chance > 9990){
      var buyout_money = experience * mon_per_hour * 2.3
      deal_given = true
      console.clear()
      alert("A company named SenthilTech wants to buy you out for " + buyout_money)
      var chance_accepting = prompt("Will you accept the offer? Example(YES, NO): ")
      if (chance_accepting == "NO".toLowerCase() || "no".toUpperCase()){
        accepted_deal = false
      }

      else{
        accepted_deal = true

        total_money = total_money + buyout_money
      }
    }
  }

} while (weeks < time_tested)

console.clear()

var line1 = "\nTotal Money Earned: " + total_money
var line2 = "\nExperience: " + experience
var line25 = "\nDeal Given: " + deal_given
var line3 = "\nDeal Accepted: " + accepted_deal
var line4 = "\nMoney Per Hour: " + mon_per_hour
var line5 = "\nWeeks Tested: " + time_tested + "\n"


alert(line1)
alert(line2)
alert(line25)
alert(line3)
alert(line4)
alert(line5)

const fs = require("fs")

fs.appendFile("Data.txt", line1, function (err){
  if (err) throw err
})

fs.appendFile("Data.txt", line2, function (err){
  if (err) throw err
})

fs.appendFile("Data.txt", line25, function (err){
  if (err) throw err
})

fs.appendFile("Data.txt", line3, function (err){
  if (err) throw err
})

fs.appendFile("Data.txt", line4, function (err){
  if (err) throw err
})

fs.appendFile("Data.txt", line5, function (err){
  if (err) throw err
})

*/

//_______________________________________________________

/*
function factfinder(a){
  if (a <= 1){
    return 1
  }

  else{
    fn = 1
    for (b = a; b > 1; b -= 1){
      fn = fn * b   
    }

    return fn

  }
}

factfinder(prompt("What number would you like the factorial of?: "))
*/

//_______________________________________________________

/*


function a(num){
  var numbo = num - 1
  return numbo
}

var name = prompt("What is your name?: ")
var age = parseInt(prompt("How old are you?: "))
console.clear()
var myAge = 12
if (age > myAge){
  var ageDifference = age - myAge
}
else{
  var ageDifference = myAge - age
}

if (ageDifference > 5){
  alert("You are way older than me")
}

else if (ageDifference < 5){
  alert("You are way younger than me")
}

alert(ageDifference)
alert(a(5))

alert("Hello " + name + ", You are " + age + " years old")

*/

//____________________________________________________________

/*

//Business Sim - JavaScript Edition by SarveshwarS

console.clear()

var deal_given = false
var money_needed_to_start = 0
var chance = Math.random(5)

function finished(){

  console.clear()

  var name = prompt("Enter your name: ")

  console.clear()

  alert("Bye " + name + "...\n")
  prompt("Press enter to continue...")
  console.clear()

  const fs  = require("fs")

  var current = new Date()

  current = current.toString()


  var line = "\n\n" + name + " || " + current

  fs.appendFile("BusinessSimNamesJ.txt", line, function(err){
    if (err) throw err
  })

}

alert("Business Sim - JavaScript Edition by Sarveshwar Senthilkumar\n")
prompt("Press enter to continue...")
console.clear()

alert("Welcome to Business Sim\n")
alert("Money per hour is determined by money per hour subtracted by pay per hour(You have to enter pay per hour next)\n")



var mon_per_hour = parseInt(prompt("How much money would you like to earn per hour? Example(50, 75): "))

var pay_per_hour = parseInt(prompt("How much money do you have to pay per hour?: "))

var total_money = 0
var experience = 0
var weeks = 0
var accepted_deal = false

mon_per_hour = mon_per_hour - pay_per_hour

var week_times = new Array()

var time_tested = parseInt(prompt("How many weeks would you like to test?: "))


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}


do{
  chance = getRandomInt(1, 6)
  weeks += 1
  
  if (chance <= 3){
    var gotProject = true
  }

  else{
    var gotProject = false
    week_times.push(0)
  }

  if (gotProject == true){
    var time_needed = getRandomInt(8, 41)

    week_times.push(time_needed)

    experience = experience + time_needed
   
    var money_made = time_needed * mon_per_hour
    total_money = total_money + money_made
  }

  if (experience > 2000){
    var rare_chance = getRandomInt(1, 10001)
    if (rare_chance > 9990){
      if (deal_given == false || buyout_money > recent_offer && accepted_deal == false){
        var buyout_money = experience * mon_per_hour * 2.3
        deal_given = true
        console.clear()
        alert("A company named SenthilTech wants to buy you out for " + buyout_money)
        var chance_accepting = prompt("Will you accept the offer? Example(YES, NO): ")
        if (chance_accepting == "YES".toLowerCase()){         
          console.clear()

          var options2 = prompt("Would you like to see how many hours you worked in the " + weeks + " weeks?(YES, NO): ")

          console.clear()

          if (options2 == "YES".toLowerCase()){

            function print(a){

              alert(a)
            }

            accepted_deal = true

            console.clear()

            week_times.forEach(print)
            
            }

            prompt("\nPress enter to continue...")
            console.clear()

            var line1 = "\nTotal Money Earned: " + total_money
            var line2 = "\nExperience: " + experience
            var line25 = "\nDeal Given: " + deal_given
            var line3 = "\nDeal Accepted: " + accepted_deal
            var line4 = "\nMoney Per Hour: " + mon_per_hour
            var line5 = "\nWeeks Tested: " + time_tested + "\n"


            alert(line1)
            alert(line2)
            alert(line25)
            alert(line3)
            alert(line4)
            alert(line5)

            const fs = require("fs")

            fs.appendFile("Data.txt", line1, function (err){
              if (err) throw err
            })

            fs.appendFile("Data.txt", line2, function (err){
              if (err) throw err
            })

            fs.appendFile("Data.txt", line25, function (err){
              if (err) throw err
            })

            fs.appendFile("Data.txt", line3, function (err){
              if (err) throw err
            })

            fs.appendFile("Data.txt", line4, function (err){
              if (err) throw err
            })

            fs.appendFile("Data.txt", line5, function (err){
              if (err) throw err
            })



            function print_text(a){
              a = a + "\n"

              fs.appendFile("Data2.txt", a, function (err){
                if (err) throw err
              })

            }

            week_times.forEach(print_text)

            add_new_line = "\n"

            fs.appendFile("Data2.txt", add_new_line, function (err){
                if (err) throw err
              })
            
            finished()           

        }   
        else{
          accepted_deal = false
        }
  
        }   
      
        
      }
    }
 } while (weeks < time_tested)

console.clear()

var options2 = prompt("Would you like to see how many hours you worked in the " + time_tested + " weeks?(YES, NO): ")

console.clear()

if (options2 == "YES".toLowerCase() || options2 == "yes".toUpperCase()){

  function print(a){

    alert(a)
  }

  console.clear()

  week_times.forEach(print)
  
}

prompt("\nPress enter to continue...")
console.clear()

var line1 = "\nTotal Money Earned: " + total_money
var line2 = "\nExperience: " + experience
var line25 = "\nDeal Given: " + deal_given
var line3 = "\nDeal Accepted: " + accepted_deal
var line4 = "\nMoney Per Hour: " + mon_per_hour
var line5 = "\nWeeks Tested: " + time_tested + "\n"


alert(line1)
alert(line2)
alert(line25)
alert(line3)
alert(line4)
alert(line5)

const fs = require("fs")

fs.appendFile("Data.txt", line1, function (err){
  if (err) throw err
})

fs.appendFile("Data.txt", line2, function (err){
  if (err) throw err
})

fs.appendFile("Data.txt", line25, function (err){
  if (err) throw err
})

fs.appendFile("Data.txt", line3, function (err){
  if (err) throw err
})

fs.appendFile("Data.txt", line4, function (err){
  if (err) throw err
})

fs.appendFile("Data.txt", line5, function (err){
  if (err) throw err
})



function print_text(a){
  a = a + "\n"

  fs.appendFile("Data2.txt", a, function (err){
    if (err) throw err
  })

}

week_times.forEach(print_text)

add_new_line = "\n"

fs.appendFile("Data2.txt", add_new_line, function (err){
    if (err) throw err
  })

prompt("Press enter to continue...")

finished()
*/

//______________________________________________________________

/*

number = prompt("Enter the number: ")

len_str = 0

thrnum = false

number_string = ""

num_string = ""

for (let i = number.length; i > 0; i--){
  num_string += number[i-1]
}

for (i of num_string){
  len_str += 1
  if (len_str == 3){
    number_string += i + ","
    thrnum = true
  }
  else if (len_str % 2 != 0 && thrnum){
    number_string += i + ","
  }
  else {
    number_string += i
  }
}

number_string2 = "";

last_string = ""

for (var i = number_string.length; i > 0; i--){
  last_string += number_string[i-1]
}

if (last_string[0] == ","){
  alert(last_string.substring(1))
}
else{
  alert(last_string)
}
*/

//_______________________________________________________