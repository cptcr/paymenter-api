import validateDomain from "../../validate/validateDomain";

/**
 * Gets the ticket data by the ticket id from a client
 * @param panel - The panel domain 
 * @param apikey - The client api key
 * @param ticket_id - The ticket id to fetch the data from
 * @returns The data of the ticket
 */
export default async function getTicketByIdClient (panel: string, apikey: string, ticket_id: string) {
    validateDomain(panel);

    return await fetch(`${panel}/api/client/v1/tickets/${ticket_id}`, {
        headers: {
            "Accept": "application/json",
            "Authroization": `Bearer ${apikey}`
        },
        method: "GET"
    })
}