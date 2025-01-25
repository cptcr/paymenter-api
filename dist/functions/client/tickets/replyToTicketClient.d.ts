/**
 * Reply to a ticket as client
 * @param panel - The panel domain
 * @param apikey - The api key of the client
 * @param message - The message to send in the ticket
 * @param ticketId -The id of the ticket
 * @returns The ticket messages
 */
export default function replyToTicketAsClient(panel: string, apikey: string, message: string, ticketId: string): Promise<Response>;
