/**
 * Change the status of a ticket as admin
 * @param {string} apikey - The admin api key
 * @param {string} panel - The panel domain
 * @param {string} ticketId - The ticket id
 * @param {"open"| "closed"} status - The status of the ticket
 * @returns response data
 */

import validateDomain from "../../validate/validateDomain";

export default async function changeTicketStatusAdmin (apikey: string, panel: string, ticketId: string, status: "open" | "closed") {
    const body = JSON.stringify({
        "status": status
    });

    validateDomain(panel);

    const response = await fetch(`${panel}/api/admin/v1/tickets/${ticketId}/status`, {
        headers: {
            "Authorization": `Bearer ${ticketId}`,
            "Content-Type": "application/json"
        },
        body: body,
        method: "PUT"
    });
    
    return response;
}