/**
 * Gets the ticket data by the ticket id from a client
 * @param panel - The panel domain
 * @param apikey - The client api key
 * @param ticket_id - The ticket id to fetch the data from
 * @returns The data of the ticket
 */
export default function getTicketByIdClient(panel: string, apikey: string, ticket_id: string): Promise<Response>;
