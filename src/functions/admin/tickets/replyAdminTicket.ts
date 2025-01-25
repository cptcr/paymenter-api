import validateDomain from "../../validate/validateDomain";
/**
 * Reply to a ticket as admin
 * @param panel - The panel domain
 * @param apikey - The api key
 * @param ticketId - The ticket id to reply to
 * @param message - The message to send
 * @returns The data from the fetch
 */

export default async function replyToTicketAsAdmin (panel: string, apikey: string, ticketId: string, message: string) {
    validateDomain(panel);
    const body = JSON.stringify({
        "message": message
    });

    return await fetch(`${panel}/api/v1/tickets/${ticketId}/reply`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        body: body,
        method: "POST"
    })
}