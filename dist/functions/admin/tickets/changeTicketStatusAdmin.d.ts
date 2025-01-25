/**
 * Change the status of a ticket as admin
 * @param {string} apikey - The admin api key
 * @param {string} panel - The panel domain
 * @param {string} ticketId - The ticket id
 * @param {"open"| "closed"} status - The status of the ticket
 * @returns response data
 */
export default function changeTicketStatusAdmin(apikey: string, panel: string, ticketId: string, status: "open" | "closed"): Promise<Response>;
