import validateDomain from "../../validate/validateDomain";

export default async function getAllMessagesFromTicketClient (panel: string, apikey: string, ticketId: string) {
    validateDomain(panel);

    return await fetch(`${panel}/api/client/v1/tickets/${ticketId}/messages`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        method: "GET"
    })
}