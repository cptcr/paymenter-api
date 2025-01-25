/**
 * Get all invoice data from a specific invoice id
 * @param panel - The panel domain
 * @param apikey - The api key
 * @param invoiceId - The invoice id
 * @returns All invoice data by the invoice id
 */
export default function getInvoiceByIdClient(panel: string, apikey: string, invoiceId: string): Promise<Response>;
