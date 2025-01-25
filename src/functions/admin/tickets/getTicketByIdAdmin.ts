import validateDomain from "../../validate/validateDomain";

/**
 * Get all data from a specific ticket
 * @param panel - The panel domain
 * @param apikey - The api key
 * @param ticketid - The id of the ticket
 * @returns The data from the ticket
 */
export default async function getTicketByIdAdmin (panel: string, apikey: string, ticketid: string) {
    validateDomain(panel);

    return await fetch(`${panel}/api/admin/v1/tickets/${ticketid}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        method: "GET"
    })
}