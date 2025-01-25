import validateDomain from "../../validate/validateDomain";

/**
 * Get all invoice data from a specific invoice id
 * @param panel - The panel domain
 * @param apikey - The api key
 * @param invoiceId - The invoice id
 * @returns All invoice data by the invoice id
 */
export default async function getInvoiceByIdClient (panel: string, apikey: string, invoiceId: string) {
    validateDomain(panel);

    return await fetch(`${panel}/api/client/v1/invoices/${invoiceId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        method: "GET"
    })
}