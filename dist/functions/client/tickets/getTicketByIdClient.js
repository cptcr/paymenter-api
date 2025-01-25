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
 * Gets the ticket data by the ticket id from a client
 * @param panel - The panel domain
 * @param apikey - The client api key
 * @param ticket_id - The ticket id to fetch the data from
 * @returns The data of the ticket
 */
export default function getTicketByIdClient(panel, apikey, ticket_id) {
    return __awaiter(this, void 0, void 0, function* () {
        validateDomain(panel);
        return yield fetch(`${panel}/api/client/v1/tickets/${ticket_id}`, {
            headers: {
                "Accept": "application/json",
                "Authroization": `Bearer ${apikey}`
            },
            method: "GET"
        });
    });
}
