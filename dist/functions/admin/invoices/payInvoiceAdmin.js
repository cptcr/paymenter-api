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
export default function payInvoiceAdmin(panel, apikey, invoiceId, payment_method) {
    return __awaiter(this, void 0, void 0, function* () {
        validateDomain(panel);
        const body = JSON.stringify({
            "payment_method": payment_method
        });
        return yield fetch(`${panel}/api/admin/v1/admin/${invoiceId}/pay`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: body,
            method: "POST"
        });
    });
}
