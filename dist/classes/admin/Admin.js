var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import createAdminTicket from "../../functions/admin/tickets/createAdminTicket";
import getTicketByIdAdmin from "../../functions/admin/tickets/getTicketByIdAdmin";
import replyToTicketAsAdmin from "../../functions/admin/tickets/replyAdminTicket";
import changeTicketStatusAdmin from "../../functions/admin/tickets/changeTicketStatusAdmin";
import getAllTickets from "../../functions/admin/tickets/getAllAdminTickets";
import getAllTicketMessages from "../../functions/admin/tickets/getAllTicketMessagesAdmin";
import getInvoiceDatabyIdAdmin from "../../functions/admin/invoices/getInvoiceDataAdmin";
import payInvoiceAdmin from "../../functions/admin/invoices/payInvoiceAdmin";
import getAllInvoicesAdmin from "../../functions/admin/invoices/getAllInvoices";
class Admin {
}
/**
 * Ticket-related operations
 */
Admin.Ticket = class {
    /**
     * Creates a new ticket.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @param title - The title of the ticket.
     * @param message - The content of the ticket message.
     * @param priority - Priority of the ticket ('low', 'medium', 'high').
     * @param userid - ID of the user creating the ticket.
     * @returns The data from the API after creating the ticket.
     */
    static create(panel, apikey, title, message, priority, userid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield createAdminTicket(panel, apikey, title, message, priority, userid);
        });
    }
    /**
     * Retrieves ticket details by its ID.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket.
     * @returns The ticket details from the API.
     */
    static getById(panel, apikey, ticketId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getTicketByIdAdmin(panel, apikey, ticketId);
        });
    }
    /**
     * Replies to a specific ticket.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket to reply to.
     * @param message - The content of the reply message.
     * @returns The response data from the API after sending the reply.
     */
    static reply(panel, apikey, ticketId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield replyToTicketAsAdmin(panel, apikey, ticketId, message);
        });
    }
    /**
     * Changes the status of a specific ticket.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket.
     * @param status - The new status of the ticket ('open' or 'closed').
     * @returns The response data from the API after changing the status.
     */
    static changeStatus(panel, apikey, ticketId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield changeTicketStatusAdmin(panel, apikey, ticketId, status);
        });
    }
    /**
     * Retrieves all tickets from the system.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @returns The list of all tickets from the API.
     */
    static getAll(panel, apikey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getAllTickets(panel, apikey);
        });
    }
    /**
     * Retrieves all messages from a specific ticket.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket.
     * @returns The list of all messages from the API for the specified ticket.
     */
    static getAllMessages(panel, apikey, ticketId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getAllTicketMessages(panel, apikey, ticketId);
        });
    }
};
/**
 * Invoice-related operations
 */
Admin.Invoice = class {
    /**
     * Retrieves invoice details by its ID.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @param invoiceId - The ID of the invoice.
     * @returns The invoice details from the API.
     */
    static getById(panel, apikey, invoiceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getInvoiceDatabyIdAdmin(panel, apikey, invoiceId);
        });
    }
    /**
     * Marks an invoice as paid.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @param invoiceId - The ID of the invoice to pay.
     * @param payment_method - The method of payment.
     * @returns The response data from the API after paying the invoice.
     */
    static pay(panel, apikey, invoiceId, payment_method) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield payInvoiceAdmin(panel, apikey, invoiceId, payment_method);
        });
    }
    /**
     * Retrieves all invoices from the system.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @returns The list of all invoices from the API.
     */
    static getAll(panel, apikey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield getAllInvoicesAdmin(panel, apikey);
        });
    }
};
export default Admin;
