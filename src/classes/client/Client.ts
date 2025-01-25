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
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @param title - The title of the ticket.
     * @param description - The description of the ticket.
     * @returns The data from the API after creating the ticket.
     */
    static async create(
      panel: string,
      apikey: string,
      title: string,
      description: string,
      priority: "medium" | "low" | "high"
    ) {
      return await makeNewTicketClient(panel, apikey, title, description, priority);
    }

    /**
     * Retrieves ticket details by its ID.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket.
     * @returns The ticket details from the API.
     */
    static async getById(panel: string, apikey: string, ticketId: string) {
      return await getTicketByIdClient(panel, apikey, ticketId);
    }

    /**
     * Deletes a ticket by its ID.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket.
     * @returns The response data from the API after deleting the ticket.
     */
    static async deleteById(panel: string, apikey: string, ticketId: string) {
      return await deleteTicketByIdClient(panel, apikey, ticketId);
    }

    /**
     * Replies to a specific ticket.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket to reply to.
     * @param message - The content of the reply message.
     * @returns The response data from the API after sending the reply.
     */
    static async reply(
      panel: string,
      apikey: string,
      ticketId: string,
      message: string
    ) {
      return await replyToTicketAsClient(panel, apikey, ticketId, message);
    }

    /**
     * Retrieves all tickets from the system.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @returns The list of all tickets from the API.
     */
    static async getAll(panel: string, apikey: string) {
      return await getAllTicketsClient(panel, apikey);
    }

    /**
     * Retrieves all messages from a specific ticket.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @param ticketId - The ID of the ticket.
     * @returns The list of all messages from the API for the specified ticket.
     */
    static async getMessages(panel: string, apikey: string, ticketId: string) {
      return await getAllMessagesFromTicketClient(panel, apikey, ticketId);
    }
  };

  /**
   * Invoice-related operations for the client.
   */
  static Invoice = class {
    /**
     * Retrieves invoice details by its ID.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @param invoiceId - The ID of the invoice.
     * @returns The invoice details from the API.
     */
    static async getById(panel: string, apikey: string, invoiceId: string) {
      return await getInvoiceByIdClient(panel, apikey, invoiceId);
    }

    /**
     * Retrieves all invoices from the system.
     * @param panel - The panel URL for the API.
     * @param apikey - The API key for authentication.
     * @returns The list of all invoices from the API.
     */
    static async getAll(panel: string, apikey: string) {
      return await getAllInvoicesClient(panel, apikey);
    }
  };
}

export default Client;
