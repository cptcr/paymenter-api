import validateDomain from "../../validate/validateDomain";

/**
 * Gets all invoices from a client
 * @param panel - The panel domain
 * @param apikey - the api key of the client
 * @returns all invoice data
 */
export default async function getAllInvoicesClient (panel: string, apikey: string) {
    validateDomain(panel);

    return await fetch(`${panel}/api/client/v1/invoices/`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        method: "GET"
    })
}