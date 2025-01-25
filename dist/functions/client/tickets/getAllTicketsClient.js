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
 * Get all tickets as client
 * @param panel - the panel domain
 * @param apiKey - the api key of the client
 * @returns the response data
 */
export default function getAllTicketsClient(panel, apiKey) {
    return __awaiter(this, void 0, void 0, function* () {
        validateDomain(panel);
        return yield fetch(`${panel}/api/client/v1/tickets`, {
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            method: "GET"
        });
    });
}
