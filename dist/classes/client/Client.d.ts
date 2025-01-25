declare class Client {
    /**
     * Ticket-related operations for the client.
     */
    static Ticket: {
        new (): {};
        /**
         * Creates a new ticket.
         * @param panel - The panel URL for the API.
         * @param apikey - The API key for authentication.
         * @param title - The title of the ticket.
         * @param description - The description of the ticket.
         * @returns The data from the API after creating the ticket.
         */
        create(panel: string, apikey: string, title: string, description: string, priority: "medium" | "low" | "high"): Promise<Response>;
        /**
         * Retrieves ticket details by its ID.
         * @param panel - The panel URL for the API.
         * @param apikey - The API key for authentication.
         * @param ticketId - The ID of the ticket.
         * @returns The ticket details from the API.
         */
        getById(panel: string, apikey: string, ticketId: string): Promise<Response>;
        /**
         * Deletes a ticket by its ID.
         * @param panel - The panel URL for the API.
         * @param apikey - The API key for authentication.
         * @param ticketId - The ID of the ticket.
         * @returns The response data from the API after deleting the ticket.
         */
        deleteById(panel: string, apikey: string, ticketId: string): Promise<Response>;
        /**
         * Replies to a specific ticket.
         * @param panel - The panel URL for the API.
         * @param apikey - The API key for authentication.
         * @param ticketId - The ID of the ticket to reply to.
         * @param message - The content of the reply message.
         * @returns The response data from the API after sending the reply.
         */
        reply(panel: string, apikey: string, ticketId: string, message: string): Promise<Response>;
        /**
         * Retrieves all tickets from the system.
         * @param panel - The panel URL for the API.
         * @param apikey - The API key for authentication.
         * @returns The list of all tickets from the API.
         */
        getAll(panel: string, apikey: string): Promise<Response>;
        /**
         * Retrieves all messages from a specific ticket.
         * @param panel - The panel URL for the API.
         * @param apikey - The API key for authentication.
         * @param ticketId - The ID of the ticket.
         * @returns The list of all messages from the API for the specified ticket.
         */
        getMessages(panel: string, apikey: string, ticketId: string): Promise<Response>;
    };
    /**
     * Invoice-related operations for the client.
     */
    static Invoice: {
        new (): {};
        /**
         * Retrieves invoice details by its ID.
         * @param panel - The panel URL for the API.
         * @param apikey - The API key for authentication.
         * @param invoiceId - The ID of the invoice.
         * @returns The invoice details from the API.
         */
        getById(panel: string, apikey: string, invoiceId: string): Promise<Response>;
        /**
         * Retrieves all invoices from the system.
         * @param panel - The panel URL for the API.
         * @param apikey - The API key for authentication.
         * @returns The list of all invoices from the API.
         */
        getAll(panel: string, apikey: string): Promise<Response>;
    };
}
export default Client;
