import validateDomain from "../../validate/validateDomain";
/**
 * Get all tickets from the panel
 * @param panel - The panel domain
 * @param apikey - The api key
 * @returns The response data
 */
export default async function getAllTickets (panel: string, apikey: string) {
    validateDomain(panel);

    return await fetch(`${panel}/api/admin/v1/tickets`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        method: "GET"
    });
}