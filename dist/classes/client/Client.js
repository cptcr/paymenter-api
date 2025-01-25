var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getTicketByIdClient from "../../functions/client/tickets/getTicketByIdClient";
import deleteTicketByIdClient from "../../functions/client/tickets/deleteTicketById";
import getAllTicketsClient from "../../functions/client/tickets/getAllTicketsClient";
import replyToTicketAsClient from "../../functions/client/tickets/replyToTicketClient";
import makeNewTicketClient from "../../functions/client/tickets/makeNewtTicketClient";
import getAllMessagesFromTicketClient from "../../functions/client/tickets/getAllMessagesFromTicketClient";
import getInvoiceByIdClient from "../../functions/client/invoices/getInvoiceByIdClient";
import getAllInvoicesClient from "../../functions/client/invoices/getAllInvoicesClient";
class Client {
}
/**
 * Ticket-related operations for the client.
 */
Client.Ticket = class {
    /**
     * Creates a new ticket.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @param title - The title of the ticket.
     * @param description - The description of the ticket.
     * @returns The data from the API after creating the ticket.
     */
    static create(panel, apikey, title, description, priority) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield makeNewTicketClient(panel, apikey, title, description, priority);
        });
    }
    /**
     * Retrieves ticket details by its ID.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket.
     * @returns The ticket details from the API.
     */
    static getById(panel, apikey, ticketId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getTicketByIdClient(panel, apikey, ticketId);
        });
    }
    /**
     * Deletes a ticket by its ID.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket.
     * @returns The response data from the API after deleting the ticket.
     */
    static deleteById(panel, apikey, ticketId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield deleteTicketByIdClient(panel, apikey, ticketId);
        });
    }
    /**
     * Replies to a specific ticket.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket to reply to.
     * @param message - The content of the reply message.
     * @returns The response data from the API after sending the reply.
     */
    static reply(panel, apikey, ticketId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield replyToTicketAsClient(panel, apikey, ticketId, message);
        });
    }
    /**
     * Retrieves all tickets from the system.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @returns The list of all tickets from the API.
     */
    static getAll(panel, apikey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getAllTicketsClient(panel, apikey);
        });
    }
    /**
     * Retrieves all messages from a specific ticket.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket.
     * @returns The list of all messages from the API for the specified ticket.
     */
    static getMessages(panel, apikey, ticketId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getAllMessagesFromTicketClient(panel, apikey, ticketId);
        });
    }
};
/**
 * Invoice-related operations for the client.
 */
Client.Invoice = class {
    /**
     * Retrieves invoice details by its ID.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @param invoiceId - The ID of the invoice.
     * @returns The invoice details from the API.
     */
    static getById(panel, apikey, invoiceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getInvoiceByIdClient(panel, apikey, invoiceId);
        });
    }
    /**
     * Retrieves all invoices from the system.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @returns The list of all invoices from the API.
     */
    static getAll(panel, apikey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getAllInvoicesClient(panel, apikey);
        });
    }
};
export default Client;
