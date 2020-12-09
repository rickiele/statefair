const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

// --------- LISTEN EVENT: RIDE TICKET BUTTON - WHEN CLICKED  --------- //
export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", e => {
        contentTarget.innerHTML += ` 
        <div class="person rider"></div>
        `
    })
}

