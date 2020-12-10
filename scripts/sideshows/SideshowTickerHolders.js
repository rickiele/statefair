const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

// --------- 2 LISTEN EVENT: SIDESHOW TICKET BUTTON - WHEN CLICKED  --------- //
export const SideshowTicketHolders = () => {
  eventHub.addEventListener("sideshowTicketPurchased", event => {
    contentTarget.innerHTML += `
    <div class="person gawker"></div>
    `
  })
}
