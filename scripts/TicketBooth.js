// Target the classes and IDs directly associated with your event
const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


// --------- DISPATCH: RIDE TICKET BUTTON - WHEN CLICKED  --------- //
// <TargetElement>.addEventListener("<TypeOfEvent>", <WhatYouWantToRun>)
eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id === "rideTicket") {
    const rideEvent = new CustomEvent("rideTicketPurchased", {
      detail: {
        rideButton: clickEvent.target.value
      }
    })
    eventHub.dispatchEvent(rideEvent)
  }
})
 

// --------- DISPATCH: FOOD TICKET BUTTON - WHEN CLICKED  --------- //
eventHub.addEventListener("click", foo => {
  if(foo.target.id === "foodTicket") {
    const foodEvent = new CustomEvent("foodTicketPurchased", {
      detail: {
        foodButton: foo.target.value
      }
    })
    eventHub.dispatchEvent(foodEvent)
  }
})


// --------- TICKETBOOTH BUTTONS --------- //
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
          <button id="rideTicket">Ride Ticket</button>
          <button id="foodTicket">Food Ticket</button>
        </div>
    `
}


