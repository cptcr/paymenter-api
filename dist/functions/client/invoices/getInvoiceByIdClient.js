var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import validateDomain from "../../validate/validateDomain";
/**
 * Get all invoice data from a specific invoice id
 * @param panel - The panel domain
 * @param apikey - The api key
 * @param invoiceId - The invoice id
 * @returns All invoice data by the invoice id
 */
export default function getInvoiceByIdClient(panel, apikey, invoiceId) {
    return __awaiter(this, void 0, void 0, function* () {
        validateDomain(panel);
        return yield fetch(`${panel}/api/client/v1/invoices/${invoiceId}`, {
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            method: "GET"
        });
    });
}
