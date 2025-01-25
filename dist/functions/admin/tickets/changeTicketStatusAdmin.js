/**
 * Change the status of a ticket as admin
 * @param {string} apikey - The admin api key
 * @param {string} panel - The panel domain
 * @param {string} ticketId - The ticket id
 * @param {"open"| "closed"} status - The status of the ticket
 * @returns response data
 */
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
export default function changeTicketStatusAdmin(apikey, panel, ticketId, status) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = JSON.stringify({
            "status": status
        });
        validateDomain(panel);
        const response = yield fetch(`${panel}/api/admin/v1/tickets/${ticketId}/status`, {
            headers: {
                "Authorization": `Bearer ${ticketId}`,
                "Content-Type": "application/json"
            },
            body: body,
            method: "PUT"
        });
        return response;
    });
}
