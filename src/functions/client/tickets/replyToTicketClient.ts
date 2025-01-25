import validateDomain from "../../validate/validateDomain";

/**
 * Reply to a ticket as client
 * @param panel - The panel domain
 * @param apikey - The api key of the client
 * @param message - The message to send in the ticket
 * @param ticketId -The id of the ticket
 * @returns The ticket messages
 */
export default async function replyToTicketAsClient (panel: string, apikey: string, message: string, ticketId: string) {
    validateDomain(panel);

    const body = JSON.stringify({
        "message": message
    });

    return await fetch(`${panel}/api/client/v1/tickets/${ticketId}/reply`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        body: body,
        method: "POST"
    })
}