const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

// --------- LISTEN EVENT: FOOD TICKET BUTTON - WHEN CLICKED  --------- //
export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", foo => {
        contentTarget.innerHTML += `
        <div class="person eater"> </div>
        `
    })
}