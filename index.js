//Write your code here
debugger
let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00,
}

function logAttendeeName(attendee){
  console.log (attendee.name)
}



function logTicketPrice(attendee){
  console.log(attendee.ticketPrice)
}


function updateTicketType(attendee, newtype){
  attendee.ticketType= newtype
}

function updateTicketPrice(attendee, newPrice){
  attendee.ticketPrice= newPrice
}

function removeEventProperty(attendee, remove){
  delete attendee.event
}

function addCheckedInProperty(attendee){
  attendee.checkedIn= true
}
addCheckedInProperty(attendee)
console.log(attendee)


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
} 
