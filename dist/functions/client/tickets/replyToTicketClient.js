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
 * Reply to a ticket as client
 * @param panel - The panel domain
 * @param apikey - The api key of the client
 * @param message - The message to send in the ticket
 * @param ticketId -The id of the ticket
 * @returns The ticket messages
 */
export default function replyToTicketAsClient(panel, apikey, message, ticketId) {
    return __awaiter(this, void 0, void 0, function* () {
        validateDomain(panel);
        const body = JSON.stringify({
            "message": message
        });
        return yield fetch(`${panel}/api/client/v1/tickets/${ticketId}/reply`, {
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: body,
            method: "POST"
        });
    });
}
