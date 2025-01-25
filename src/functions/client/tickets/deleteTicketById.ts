import validateDomain from "../../validate/validateDomain";

export default async function deleteTicketByIdClient (panel: string, apikey: string, ticketId: string) {
    validateDomain(panel);

    return await fetch(`${panel}/api/client/v1/tickets/${ticketId}/close`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        method: "DELETE"
    })
}