import validateDomain from "../../validate/validateDomain";

/**
 * Create a new ticket as client
 * @param panel - The panel domain
 * @param apikey - The api key of the client
 * @param title - The title of the ticket
 * @param message - The first message sent to the ticket
 * @param priority - The priority of the ticket
 * @returns The data of the ticket created
 */
export default async function makeNewTicketClient (panel: string, apikey: string, title: string, message: string, priority: "low" | "medium" | "high") {
    validateDomain(panel);

    const body = JSON.stringify({
        "title": title,
        "message": message,
        "priority": priority
    });

    return await fetch(`${panel}/api/client/v1/tickets`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        body: body,
        method: "POST"
    })
}