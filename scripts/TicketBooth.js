const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

// --------- DISPATCH EVENT: RIDE TICKET BUTTON - WHEN CLICKED  --------- //
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
 
// --------- RIDE TICKET BUTTON HTML --------- //
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
          <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

