/**
 * Reply to a ticket as admin
 * @param panel - The panel domain
 * @param apikey - The api key
 * @param ticketId - The ticket id to reply to
 * @param message - The message to send
 * @returns The data from the fetch
 */
export default function replyToTicketAsAdmin(panel: string, apikey: string, ticketId: string, message: string): Promise<Response>;
