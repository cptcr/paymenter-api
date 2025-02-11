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
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @param options.title - The title of the ticket.
     * @param options.message - The content of the ticket message.
     * @param options.priority - Priority of the ticket ('low', 'medium', 'high').
     * @param options.userId - ID of the user creating the ticket.
     * @returns The data from the API after creating the ticket.
     */
    static async create(options: {
      panel: string;
      apikey: string;
      title: string;
      message: string;
      priority: "medium" | "low" | "high";
      userId: number;
    }) {
      return await createAdminTicket(
        options.panel,
        options.apikey,
        options.title,
        options.message,
        options.priority,
        options.userId
      );
    }

    /**
     * Retrieves ticket details by its ID.
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @param options.ticketId - The ID of the ticket.
     * @returns The ticket details from the API.
     */
    static async getById(options: { panel: string; apikey: string; ticketId: string }) {
      return await getTicketByIdAdmin(options.panel, options.apikey, options.ticketId);
    }

    /**
     * Replies to a specific ticket.
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @param options.ticketId - The ID of the ticket to reply to.
     * @param options.message - The content of the reply message.
     * @returns The response data from the API after sending the reply.
     */
    static async reply(options: { panel: string; apikey: string; ticketId: string; message: string }) {
      return await replyToTicketAsAdmin(options.panel, options.apikey, options.ticketId, options.message);
    }

    /**
     * Changes the status of a specific ticket.
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @param options.ticketId - The ID of the ticket.
     * @param options.status - The new status of the ticket ('open' or 'closed').
     * @returns The response data from the API after changing the status.
     */
    static async changeStatus(options: { panel: string; apikey: string; ticketId: string; status: "open" | "closed" }) {
      return await changeTicketStatusAdmin(options.panel, options.apikey, options.ticketId, options.status);
    }

    /**
     * Retrieves all tickets from the system.
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @returns The list of all tickets from the API.
     */
    static async getAll(options: { panel: string; apikey: string }) {
      return await getAllTickets(options.panel, options.apikey);
    }

    /**
     * Retrieves all messages from a specific ticket.
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @param options.ticketId - The ID of the ticket.
     * @returns The list of all messages from the API for the specified ticket.
     */
    static async getAllMessages(options: { panel: string; apikey: string; ticketId: string }) {
      return await getAllTicketMessages(options.panel, options.apikey, options.ticketId);
    }
  };

  /**
   * Invoice-related operations
   */
  static Invoice = class {
    /**
     * Retrieves invoice details by its ID.
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @param options.invoiceId - The ID of the invoice.
     * @returns The invoice details from the API.
     */
    static async getById(options: { panel: string; apikey: string; invoiceId: string }) {
      return await getInvoiceDatabyIdAdmin(options.panel, options.apikey, options.invoiceId);
    }

    /**
     * Marks an invoice as paid.
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @param options.invoiceId - The ID of the invoice to pay.
     * @param options.payment_method - The method of payment.
     * @returns The response data from the API after paying the invoice.
     */
    static async pay(options: { panel: string; apikey: string; invoiceId: string; payment_method: string }) {
      return await payInvoiceAdmin(options.panel, options.apikey, options.invoiceId, options.payment_method);
    }

    /**
     * Retrieves all invoices from the system.
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @returns The list of all invoices from the API.
     */
    static async getAll(options: { panel: string; apikey: string }) {
      return await getAllInvoicesAdmin(options.panel, options.apikey);
    }
  };
}

export default Admin;
/*
How to make it so i write await Admin.Ticket.create({ panel: "https://panel.com/", userId: 21 }) instead of Admin.Ticket.create("panelUrl", other stuff)??
*/