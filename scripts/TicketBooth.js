// Target the classes and IDs directly associated with your event
const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


// --------- 1 DISPATCH: RIDE TICKET BUTTON - WHEN CLICKED  --------- //
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
 

// --------- 1 DISPATCH: FOOD TICKET BUTTON - WHEN CLICKED  --------- //
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


// --------- 1 DISPATCH: GAME TICKET BUTTON - WHEN CLICKED  --------- //
eventHub.addEventListener("click", e => {
  if (e.target.id === "gameTicket") {
    const gameEvent = new CustomEvent("gameTicketPurchased", {
      detail: {
        gameButton: e.target.value
      }
    })
    eventHub.dispatchEvent(gameEvent)
  }
})

// --------- 1 DISPATCH: SIDESHOW TICKET BUTTON - WHEN CLICKED  --------- //
eventHub.addEventListener("click", e => {
  if (e.target.id === "sideshowTicket") {
    const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
      detail: {
        sideshowButton: e.target.value
      }
    })
    eventHub.dispatchEvent(sideshowEvent)
  }
})

// --------- 1 DISPATCH: FULL PACKAGE TICKET BUTTON - WHEN CLICKED  --------- //
eventHub.addEventListener("click", e => {
  if (e.target.id === "fullPackageTicket") {
    const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased", {
      detail: {
        fullPackageButton: e.target.value
      }
    })
    eventHub.dispatchEvent(fullPackageEvent)
  }
})

// --------- TICKETBOOTH BUTTONS --------- //
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
          <button id="rideTicket">Ride Ticket</button>
          <button id="foodTicket">Food Ticket</button>
          <button id="gameTicket">Game Ticket</button>
          <button id="sideshowTicket">Sideshow Ticket</button>
          <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}


