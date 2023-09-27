$(document).ready()

// dayjs().format('HH')

$('#currentDay').text(dayjs().format('dddd, MMMM DD, YYYY'))

var hourID = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17']

renderSchedule()
colorChange()

$('.saveBtn').on('click',function() { //button clicky
    // console.log($(this).parent().attr('id'))
    // console.log($(this).siblings('textarea').val())
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('textarea').val()) //sets localStorage based on the button's parent's div id and what's in the button's sibling's text box
})

function renderSchedule() {
  // console.log(localStorage.getItem(hourClass[2]))
  for(i = 0; i < hourID.length; i++) {
  // console.log(hourID[i])
  if (localStorage.getItem(hourID[i])) { //checks that the key has a value before adding any text
    // console.log(localStorage.getItem(hourID[i]))
    // console.log($(document.body.children[1].children[hourID[i]]))
    $(document.body.children[1].children[i].children[1]).text(localStorage.getItem(hourID[i])) //add the appropriate localStorage text to the appropriate key/div
    }
  }
}

function colorChange() {
  var currentHour = dayjs().format('HH')
  // console.log(currentHour)
  for (i = 0; i < hourID.length; i++) {
    var hourInt = hourID[i].replace(/\D/g, '') //removes the text from the hourID indices and leaves a number string for comparison
    console.log(hourInt)
    if (hourInt == currentHour) { //compares to check if the hourInt is the current hour
      $(document.body.children[1].children[i]).addClass('present')
      $(document.body.children[1].children[i]).removeClass('past future')
      
    } else if (hourInt > currentHour) { //checks to see if the not current hour than the current hour (ie in the future)
      $(document.body.children[1].children[i]).addClass('future')
      $(document.body.children[1].children[i]).removeClass('past present')

    } else { //otherwise returns that the hour is in the past
      $(document.body.children[1].children[i]).addClass('past')
      $(document.body.children[1].children[i]).removeClass('present future')
    
    
    }
  }
}