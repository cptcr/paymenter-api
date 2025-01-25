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
  /**
   * Ticket-related operations
   */
  static Ticket = class {
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
    static async create(
      panel: string,
      apikey: string,
      title: string,
      message: string,
      priority: "medium" | "low" | "high",
      userid: number
    ) {
      return await createAdminTicket(panel, apikey, title, message, priority, userid);
    }

    /**
     * Retrieves ticket details by its ID.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket.
     * @returns The ticket details from the API.
     */
    static async getById(panel: string, apikey: string, ticketId: string) {
      return await getTicketByIdAdmin(panel, apikey, ticketId);
    }

    /**
     * Replies to a specific ticket.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket to reply to.
     * @param message - The content of the reply message.
     * @returns The response data from the API after sending the reply.
     */
    static async reply(panel: string, apikey: string, ticketId: string, message: string) {
      return await replyToTicketAsAdmin(panel, apikey, ticketId, message);
    }

    /**
     * Changes the status of a specific ticket.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket.
     * @param status - The new status of the ticket ('open' or 'closed').
     * @returns The response data from the API after changing the status.
     */
    static async changeStatus(panel: string, apikey: string, ticketId: string, status: "open" | "closed") {
      return await changeTicketStatusAdmin(panel, apikey, ticketId, status);
    }

    /**
     * Retrieves all tickets from the system.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @returns The list of all tickets from the API.
     */
    static async getAll(panel: string, apikey: string) {
      return await getAllTickets(panel, apikey);
    }

    /**
     * Retrieves all messages from a specific ticket.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket.
     * @returns The list of all messages from the API for the specified ticket.
     */
    static async getAllMessages(panel: string, apikey: string, ticketId: string) {
      return await getAllTicketMessages(panel, apikey, ticketId);
    }
  };

  /**
   * Invoice-related operations
   */
  static Invoice = class {
    /**
     * Retrieves invoice details by its ID.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @param invoiceId - The ID of the invoice.
     * @returns The invoice details from the API.
     */
    static async getById(panel: string, apikey: string, invoiceId: string) {
      return await getInvoiceDatabyIdAdmin(panel, apikey, invoiceId);
    }

    /**
     * Marks an invoice as paid.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @param invoiceId - The ID of the invoice to pay.
     * @param payment_method - The method of payment.
     * @returns The response data from the API after paying the invoice.
     */
    static async pay(panel: string, apikey: string, invoiceId: string, payment_method: string) {
      return await payInvoiceAdmin(panel, apikey, invoiceId, payment_method);
    }

    /**
     * Retrieves all invoices from the system.
     * @param panel - The panel URL.
     * @param apikey - The API key for authentication.
     * @returns The list of all invoices from the API.
     */
    static async getAll(panel: string, apikey: string) {
      return await getAllInvoicesAdmin(panel, apikey);
    }
  };
}

export default Admin;