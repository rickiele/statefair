// Import and invoke the ticket booth component function
import { FoodTicketHolders } from "./food/FoodTicketHolder.js";
import { FullPackageTickerHolders } from "./fullpackage/FullPackageTicketHolder.js";
import { GameTicketHolders } from "./games/GameTicketHolder.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { SideshowTicketHolders } from "./sideshows/SideshowTickerHolders.js";
import { TicketBooth } from "./TicketBooth.js"


TicketBooth();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
SideshowTicketHolders();
FullPackageTickerHolders();
