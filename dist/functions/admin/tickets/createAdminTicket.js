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
 * Create a ticket as admin on a user
 * @param {string} panel - The panel domain
 * @param {string} apikey - The api key
 * @param {string} title - The title for the ticket
 * @param {string} message - The first message sent into the ticket
 * @param {"medium" | "low" | "high"} priority
 * @param {number} user_id - The
 * @returns Response data
 */
export default function createAdminTicket(panel, apikey, title, message, priority, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        validateDomain(panel);
        const body = JSON.stringify({
            "title": title,
            "message": message,
            "priority": priority,
            "user_id": user_id
        });
        const response = yield fetch(`${panel}/api/admin/v1/tickets`, {
            headers: {
                "Authorization": `Bearer ${apikey}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: body,
            method: "POST"
        });
        return response;
    });
}
