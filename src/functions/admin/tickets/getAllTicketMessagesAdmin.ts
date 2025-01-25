import validateDomain from "../../validate/validateDomain";

/**
 * Get all messages from a ticket
 * @param panel - The panel domain
 * @param apikey - The admin apikey
 * @param ticketId - The id of the ticket
 * @returns All ticket messages
 */
export default async function getAllTicketMessages (panel: string, apikey: string, ticketId: string) {
    validateDomain(panel);

    return await fetch(`${panel}/api/v1/tickets/${ticketId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        method: "GET"
    })
}