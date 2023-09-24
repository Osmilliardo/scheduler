$(document).ready()

dayjs().format('HH')

$('#currentDay').text(dayjs().format('dddd, MMMM DD, YYYY'))

renderSchedule()


$('.saveBtn').on('click',function() { //button clicky
    // console.log($(this).parent().attr('id'))
    // console.log($(this).siblings('textarea').val())
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('textarea').val()) //sets localStorage based on the button's parent's div id and what's in the button's sibling's text box
})

function renderSchedule() {
  var hourID = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17'] //array to establish keys according to the div id's
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

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
