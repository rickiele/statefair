const contentTarget = document.querySelectorAll(".people")
const eventHub = document.querySelector("#state-fair")

// --------- 2 LISTEN EVENT: FULL PACKAGE TICKET BUTTON - WHEN CLICKED  --------- //
export const FullPackageTickerHolders = () => {
  eventHub.addEventListener("fullPackageTicketPurchased", event => {
    for (let element of contentTarget) {
      element.innerHTML += `
      <div class="person bigSpender"></div>
      `
    }
  })
}