import validateDomain from "../../validate/validateDomain";

export default async function getInvoiceDatabyIdAdmin (panel: string, apikey: string, invoiceId: string) {
    validateDomain(panel);

    return await fetch(`${panel}/api/admin/v1/admin/${invoiceId}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        method: "GET"
    })
}