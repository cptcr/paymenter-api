import validateDomain from "../../validate/validateDomain";

/**
 * Get all invoices on the panel
 * @param panel - The panel domain
 * @param apikey - The api key
 * @returns All invoice data
 */
export default async function getAllInvoicesAdmin (panel: string, apikey: string) {
    validateDomain(panel);

    return await fetch(`${panel}/api/admin/v1/invoices`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        method: "GET"
    });
}