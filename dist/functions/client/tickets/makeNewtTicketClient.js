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
 * Create a new ticket as client
 * @param panel - The panel domain
 * @param apikey - The api key of the client
 * @param title - The title of the ticket
 * @param message - The first message sent to the ticket
 * @param priority - The priority of the ticket
 * @returns The data of the ticket created
 */
export default function makeNewTicketClient(panel, apikey, title, message, priority) {
    return __awaiter(this, void 0, void 0, function* () {
        validateDomain(panel);
        const body = JSON.stringify({
            "title": title,
            "message": message,
            "priority": priority
        });
        return yield fetch(`${panel}/api/client/v1/tickets`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: body,
            method: "POST"
        });
    });
}
