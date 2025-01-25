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
 * Get all data from a specific ticket
 * @param panel - The panel domain
 * @param apikey - The api key
 * @param ticketid - The id of the ticket
 * @returns The data from the ticket
 */
export default function getTicketByIdAdmin(panel, apikey, ticketid) {
    return __awaiter(this, void 0, void 0, function* () {
        validateDomain(panel);
        return yield fetch(`${panel}/api/admin/v1/tickets/${ticketid}`, {
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            method: "GET"
        });
    });
}
