/**
 * Get all messages from a ticket
 * @param panel - The panel domain
 * @param apikey - The admin apikey
 * @param ticketId - The id of the ticket
 * @returns All ticket messages
 */
export default function getAllTicketMessages(panel: string, apikey: string, ticketId: string): Promise<Response>;
