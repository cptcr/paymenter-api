import getTicketByIdClient from "../../functions/client/tickets/getTicketByIdClient";
import deleteTicketByIdClient from "../../functions/client/tickets/deleteTicketById";
import getAllTicketsClient from "../../functions/client/tickets/getAllTicketsClient";
import replyToTicketAsClient from "../../functions/client/tickets/replyToTicketClient";
import makeNewTicketClient from "../../functions/client/tickets/makeNewtTicketClient";
import getAllMessagesFromTicketClient from "../../functions/client/tickets/getAllMessagesFromTicketClient";

import getInvoiceByIdClient from "../../functions/client/invoices/getInvoiceByIdClient";
import getAllInvoicesClient from "../../functions/client/invoices/getAllInvoicesClient";

class Client {
  /**
   * Ticket-related operations for the client.
   */
  static Ticket = class {
    /**
     * Creates a new ticket.
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @param options.title - The title of the ticket.
     * @param options.description - The description of the ticket.
     * @param options.priority - Priority of the ticket ('low', 'medium', 'high').
     * @returns The data from the API after creating the ticket.
     */
    static async create(options: {
      panel: string;
      apikey: string;
      title: string;
      description: string;
      priority: "medium" | "low" | "high";
    }) {
      return await makeNewTicketClient(
        options.panel,
        options.apikey,
        options.title,
        options.description,
        options.priority
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
      return await getTicketByIdClient(options.panel, options.apikey, options.ticketId);
    }

    /**
     * Deletes a ticket by its ID.
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @param options.ticketId - The ID of the ticket.
     * @returns The response data from the API after deleting the ticket.
     */
    static async deleteById(options: { panel: string; apikey: string; ticketId: string }) {
      return await deleteTicketByIdClient(options.panel, options.apikey, options.ticketId);
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
      return await replyToTicketAsClient(options.panel, options.apikey, options.ticketId, options.message);
    }

    /**
     * Retrieves all tickets from the system.
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @returns The list of all tickets from the API.
     */
    static async getAll(options: { panel: string; apikey: string }) {
      return await getAllTicketsClient(options.panel, options.apikey);
    }

    /**
     * Retrieves all messages from a specific ticket.
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @param options.ticketId - The ID of the ticket.
     * @returns The list of all messages from the API for the specified ticket.
     */
    static async getMessages(options: { panel: string; apikey: string; ticketId: string }) {
      return await getAllMessagesFromTicketClient(options.panel, options.apikey, options.ticketId);
    }
  };

  /**
   * Invoice-related operations for the client.
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
      return await getInvoiceByIdClient(options.panel, options.apikey, options.invoiceId);
    }

    /**
     * Retrieves all invoices from the system.
     * @param options - An object containing all parameters.
     * @param options.panel - The panel URL.
     * @param options.apikey - The API key for authentication.
     * @returns The list of all invoices from the API.
     */
    static async getAll(options: { panel: string; apikey: string }) {
      return await getAllInvoicesClient(options.panel, options.apikey);
    }
  };
}

export default Client;