const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

// --------- 2 LISTEN EVENT: GAME TICKET BUTTON - WHEN CLICKED  --------- //
export const GameTicketHolders = () => {
  eventHub.addEventListener("gameTicketPurchased", event => {
    contentTarget.innerHTML += `
    <div class="person player"></div>
    `
  })
}


export const RideTicketHolders = () => {
  eventHub.addEventListener("rideTicketPurchased", e => {
      contentTarget.innerHTML += ` 
      <div class="person rider"></div>
      `
  })
}
