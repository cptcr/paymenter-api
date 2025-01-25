import validateDomain from "../../validate/validateDomain";

export default async function payInvoiceAdmin (panel: string, apikey: string, invoiceId: string, payment_method: string) {
    validateDomain(panel);

    const body = JSON.stringify({
        "payment_method": payment_method
    })

    return await fetch(`${panel}/api/admin/v1/admin/${invoiceId}/pay`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        body: body,
        method: "POST"
    })
} 