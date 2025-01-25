import validateDomain from "../../validate/validateDomain";

/**
 * Create a ticket as admin on a user
 * @param {string} panel - The panel domain 
 * @param {string} apikey - The api key
 * @param {string} title - The title for the ticket
 * @param {string} message - The first message sent into the ticket
 * @param {"medium" | "low" | "high"} priority 
 * @param {number} user_id - The 
 * @returns Response data
 */
export default async function createAdminTicket (panel: string, apikey: string, title: string, message: string, priority: "medium"| "low" | "high", user_id: number) {
    validateDomain(panel);

    const body = JSON.stringify({
        "title": title,
        "message": message,
        "priority": priority,
        "user_id": user_id
    });

    const response = await fetch(`${panel}/api/admin/v1/tickets`, {
        headers: {
            "Authorization": `Bearer ${apikey}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: body,
        method: "POST"
    });

    return response;
}