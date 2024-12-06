// "use client";

// import { useState } from "react";
// // import styles from "@/cmp.module.css";
// import styles from "@/components/cmp.module.css"

// const botResponses = {
//   greeting: "Welcome to the Museum Ticket Booking Chatbot! How can I assist you today?",
//   ticketOptions: "We have the following tickets available:\n1. Adult: $20\n2. Child: $10\n3. Senior: $15\nType the number to select.",
//   confirmBooking: "Your ticket has been booked. Thank you for visiting!",
//   default: "Sorry, I didn't understand that. Can you rephrase?",
// };

// export default function ChatBot() {
//   const [messages, setMessages] = useState([
//     { text: botResponses.greeting, sender: "bot" },
//   ]);
//   const [userInput, setUserInput] = useState("");

//   const getBotResponse = (userInput) => {
//     if (userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hi")) {
//       return botResponses.greeting;
//     } else if (userInput.toLowerCase().includes("ticket") || userInput.toLowerCase().includes("book")) {
//       return botResponses.ticketOptions;
//     } else if (["1", "2", "3"].includes(userInput)) {
//       return botResponses.confirmBooking;
//     } else {
//       return botResponses.default;
//     }
//   };

//   const handleSend = () => {
//     if (userInput.trim() === "") return;

//     const userMessage = { text: userInput, sender: "user" };
//     const botMessage = { text: getBotResponse(userInput), sender: "bot" };

//     setMessages([...messages, userMessage, botMessage]);
//     setUserInput(""); // Clear input field
//   };

//   return (
//     <div className={styles.chatContainer}>
//       <div className={styles.chatBox}>
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`${styles.message} ${msg.sender === "bot" ? styles.bot : styles.user}`}
//           >
//             {msg.sender === "bot" && <img className={styles.botAvatar} src="/bot.png" alt="Bot" />}
//             <span>{msg.text}</span>
//           </div>
//         ))}
//       </div>
//       <div className={styles.inputBox}>
//         <input
//           type="text"
//           value={userInput}
//           placeholder="Type your message here..."
//           onChange={(e) => setUserInput(e.target.value)}
//           className={styles.input}
//         />
//         <button onClick={handleSend} className={styles.sendButton}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
// import styles from "./ChatBot.module.css"; // Import your custom CSS
import styles from "@/components/cmp.module.css"
// Bot responses
const botResponses = {
  greeting: "Welcome to the Museum Ticket Booking Chatbot! How can I assist you today?",
  ticketOptions: "We have the following tickets available:\n1. Adult: $20\n2. Child: $10\n3. Senior: $15\nType the number to select.",
  confirmBooking: "Your ticket has been booked. Thank you for visiting!",
  thankYou: "You're welcome! Enjoy your visit to the museum!",
  greetingAsk: "Hello! How can I help you with booking your museum tickets today?",
  hoursOfOperation: "We are open daily from 9 AM to 6 PM. Please visit during these hours.",
  location: "Our museum is located at 123 Museum Lane, City Center.",
  refundPolicy: "We do not offer refunds once a ticket is booked. Please double-check your booking details before confirming.",
  availableDiscounts: "We offer a 10% discount for students and seniors. You can apply the discount at checkout.",
  ticketPrice: "The price for a ticket depends on the type. Adult tickets are $20, child tickets are $10, and senior tickets are $15.",
  adultTicket: "Adult tickets are priced at $20. Would you like to proceed with booking?",
  childTicket: "Child tickets are priced at $10. Would you like to proceed with booking?",
  seniorTicket: "Senior tickets are priced at $15. Would you like to proceed with booking?",
  bookingConfirmation: "Your booking is confirmed! Please enjoy your visit to the museum.",
  howToBook: "To book a ticket, just type 'book' and choose the ticket type (Adult, Child, Senior).",
  bookingSteps: "To book a ticket: 1. Choose the type of ticket. 2. Confirm your booking.",
  paymentOptions: "We accept payments via credit/debit card and PayPal.",
  acceptedCards: "We accept all major credit and debit cards, including Visa, MasterCard, and American Express.",
  bookingDetails: "Can you please provide your booking details, including the ticket type and number of tickets?",
  familyTicket: "We don't have a family ticket, but you can book multiple individual tickets. Would you like to proceed?",
  groupDiscount: "We offer discounts for large groups. Please contact our customer service for more details.",
  specialEvents: "We have special events on weekends. You can check the event schedule on our website.",
  promoCode: "You can apply a promo code at checkout for additional discounts.",
  cancellationPolicy: "We do not accept cancellations once a ticket is booked. Please double-check your booking before confirming.",
  checkBooking: "To check your booking, please provide your booking reference number.",
  bookingReference: "Your booking reference is a unique code that you will receive after confirming your ticket purchase.",
  seatingOptions: "We do not have specific seating arrangements for our museum tours. You are free to move around.",
  openDays: "The museum is open every day of the week from 9 AM to 6 PM.",
  closingTime: "The museum closes at 6 PM every day. Make sure to arrive before then!",
  visitDuration: "A typical visit to the museum lasts about 1 to 2 hours, depending on how much time you want to explore.",
  museumFacilities: "We offer free Wi-Fi, restrooms, and a cafe for your convenience.",
  parkingInfo: "We have free parking available at the museum. Parking is available on a first-come, first-served basis.",
  wheelchairAccess: "Our museum is wheelchair accessible. If you need assistance, please let us know.",
  giftShop: "We have a gift shop located inside the museum where you can buy souvenirs.",
  museumMap: "You can find a map of the museum at the entrance or on our website for easier navigation.",
  foodAndDrinks: "Food and drinks are not allowed inside the museum except for the cafe area.",
  parkingFee: "Parking is free at the museum for all visitors.",
  ticketAvailability: "Tickets are available for booking online and at the ticket counter during museum hours.",
  ticketBookingOnline: "You can book your tickets online through our website or by chatting with me here.",
  discountedTickets: "We offer a 10% discount for students, seniors, and military personnel.",
  seniorCitizenDiscount: "Seniors aged 60+ can avail a 10% discount on their ticket purchase.",
  studentDiscount: "Students can get a 10% discount on their tickets with valid student ID.",
  membershipBenefits: "Our membership includes free access to the museum for a year and other perks. Would you like to learn more?",
  ticketTransfer: "Unfortunately, we do not allow ticket transfers once the booking is complete.",
  ticketRefunds: "Once a ticket is purchased, it cannot be refunded. Please ensure your details are correct before confirming.",
  bookForOthers: "Yes, you can book tickets for others. Just let us know their details while booking.",
  museumSchedule: "Our museum is open 7 days a week from 9 AM to 6 PM. Special hours may apply on holidays.",
  holidayHours: "The museum operates on special hours during holidays. Please check our website for updates.",
  museumEvents: "We have a variety of events such as art exhibitions and guided tours. You can check the schedule on our website.",
  groupBooking: "For group bookings, please contact us directly to get a discount and confirm availability.",
  ticketTypes: "We offer three types of tickets: Adult, Child, and Senior. Choose the one that suits you best.",
  multipleBookings: "You can book multiple tickets at once. Please select the type and number of tickets.",
  availableTickets: "We have plenty of tickets available for today and the upcoming days.",
  soldOut: "Sorry, the tickets for today are sold out. Please choose another day or check availability for the upcoming days.",
  bookingLimit: "There is a limit of 10 tickets per person for online booking.",
  earlyBirdTickets: "We offer early bird discounts for booking tickets in advance. Check our website for details.",
  ticketValidity: "Tickets are valid only for the date selected at the time of booking.",
  specialTicketRequests: "If you have any special requests regarding your ticket, please contact us directly.",
  childAgeLimit: "Children aged 3 to 12 qualify for the child ticket. Under 3 is free.",
  familyGroupDiscount: "For family groups, we offer a special package. Please contact customer service for details.",
  lastMinuteTickets: "We offer last-minute tickets at the ticket counter depending on availability.",
  peakSeasonTickets: "During peak seasons, tickets may sell out quickly. We recommend booking early.",
  offSeasonTickets: "Tickets are generally easier to book during the off-season. You can visit us with less crowd.",
  VIPTicket: "VIP tickets offer special access to certain exhibitions and areas of the museum. Would you like to purchase a VIP ticket?",
  specialAccessTickets: "We offer special access tickets for certain exhibits. Please ask us for more details.",
  museumGuides: "We offer guided tours of the museum. Would you like to book one?",
  selfGuidedTour: "You are free to explore the museum at your own pace. We also offer audio guides for self-guided tours.",
  guidePrice: "Guided tours are available for $15 per person. Would you like to book one?",
  freeGuidedTour: "We offer free guided tours at specific times during the day. Please ask for availability.",
  tourAvailability: "Guided tours are available throughout the day. Check our schedule for specific times.",
  tourDuration: "A guided tour typically lasts 1 hour.",
  audioGuides: "We offer audio guides in multiple languages. They are available at the ticket counter.",
  museumEventsInfo: "Check our website for information about upcoming events, workshops, and exhibitions.",
  museumTicketsOnSale: "Tickets are currently on sale on our website. Would you like to proceed with booking?",
  ticketPrinting: "We do not print tickets. You can show your digital ticket on your mobile device at the entrance.",
  ticketConfirmationEmail: "You will receive a booking confirmation email with your ticket details.",
  eventBooking: "You can book tickets for special events through the website. Please check for available events.",
  tourBooking: "To book a tour, select the tour type (guided or self-guided) and the time slot.",
  customBookingRequest: "If you have a custom request for your booking, please let us know, and we will assist you.",
  openForAllAges: "The museum is open to visitors of all ages. There is no age restriction for entry.",
  ticketProcessingTime: "It usually takes a few minutes to process your ticket once you confirm your details.",
  availableLanguages: "We offer services in multiple languages. Please let us know if you need assistance in a specific language.",
  ticketUpgrade: "You can upgrade your ticket to a VIP or guided tour ticket at the time of booking.",
  holidayDiscount: "We offer holiday discounts during major holidays. Please check our website for more details.",
  groupRates: "For group bookings, we offer special rates. Please contact us for more information.",
  confirmationTime: "Your ticket will be confirmed within a few minutes after you complete the payment.",
  ticketChange: "Unfortunately, once a ticket is booked, changes cannot be made. Please ensure your details are correct.",
  closedHolidays: "The museum is closed on major holidays like Christmas and New Year. Please check our website for specific dates.",
  onlineBookingOnly: "Tickets are only available for online booking. We do not sell tickets at the museum entrance.",
  printAtHome: "Tickets can be printed at home if needed, but we prefer digital tickets for convenience.",
  seasonalDiscount: "During the off-season, we offer special discounts. Please check our website for seasonal offers.",
  lastMinuteBooking: "Last-minute bookings are available for tickets at the counter depending on availability."
};

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { text: botResponses.greeting, sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");

  const getBotResponse = (userInput) => {
    // Match different user queries with bot responses
    if (userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hi")) {
      return botResponses.greeting;
    } else if (userInput.toLowerCase().includes("ticket") || userInput.toLowerCase().includes("book")) {
      return botResponses.ticketOptions;
    } else if (["1", "2", "3"].includes(userInput)) {
      return botResponses.confirmBooking;
    } else if (userInput.toLowerCase().includes("hours")) {
      return botResponses.hoursOfOperation;
    } else if (userInput.toLowerCase().includes("location")) {
      return botResponses.location;
    } else if (userInput.toLowerCase().includes("refund")) {
      return botResponses.refundPolicy;
    } else {
      return botResponses.default || "Sorry, I didn't understand that. Can you rephrase?";
    }
  };

  const handleSend = () => {
    if (userInput.trim() === "") return;

    const userMessage = { text: userInput, sender: "user" };
    const botMessage = { text: getBotResponse(userInput), sender: "bot" };

    setMessages([...messages, userMessage, botMessage]);
    setUserInput(""); // Clear input field
  };

  return (
    // <div className={styles.chatContainer}>
    //   <div className={styles.chatBox}>
    //     {messages.map((msg, index) => (
    //       <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
    //         {msg.text}
    //       </div>
    //     ))}
    //   </div>
    //   <div className={styles.inputBox}>
    //     <input
    //       type="text"
    //       value={userInput}
    //       placeholder="Type your message here"
    //       onChange={(e) => setUserInput(e.target.value)}
    //     />
    //     <button onClick={handleSend}>Send</button>
    //   </div>
    // </div>
    <main className={styles.main}>
    <div className={styles.chatContainer}>
           <div className={styles.chatBox}>
             {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${msg.sender === "bot" ? styles.bot : styles.user}`}
              >
                {msg.sender === "bot" && <img className={styles.botAvatar} src="/bot.png" alt="Bot" />}
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              value={userInput}
              placeholder="Type your message here..."
              onChange={(e) => setUserInput(e.target.value)}
              className={styles.input}
            />
            <button onClick={handleSend} className={styles.sendButton}>
              Send
            </button>
          </div>
    </div>
    </main>
  );
}
