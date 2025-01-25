import validateDomain from "../../validate/validateDomain";

/**
 * Get all tickets as client
 * @param panel - the panel domain 
 * @param apiKey - the api key of the client
 * @returns the response data
 */
export default async function getAllTicketsClient (panel: string, apiKey: string) {
    validateDomain(panel);

    return await fetch(`${panel}/api/client/v1/tickets`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        method: "GET"
    })
}