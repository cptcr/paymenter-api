declare class Admin {
    /**
     * Ticket-related operations
     */
    static Ticket: {
        new (): {};
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
        create(panel: string, apikey: string, title: string, message: string, priority: "medium" | "low" | "high", userid: number): Promise<Response>;
        /**
         * Retrieves ticket details by its ID.
         * @param panel - The panel URL.
         * @param apikey - The API key for authentication.
         * @param ticketId - The ID of the ticket.
         * @returns The ticket details from the API.
         */
        getById(panel: string, apikey: string, ticketId: string): Promise<Response>;
        /**
         * Replies to a specific ticket.
         * @param panel - The panel URL.
         * @param apikey - The API key for authentication.
         * @param ticketId - The ID of the ticket to reply to.
         * @param message - The content of the reply message.
         * @returns The response data from the API after sending the reply.
         */
        reply(panel: string, apikey: string, ticketId: string, message: string): Promise<Response>;
        /**
         * Changes the status of a specific ticket.
         * @param panel - The panel URL.
         * @param apikey - The API key for authentication.
         * @param ticketId - The ID of the ticket.
         * @param status - The new status of the ticket ('open' or 'closed').
         * @returns The response data from the API after changing the status.
         */
        changeStatus(panel: string, apikey: string, ticketId: string, status: "open" | "closed"): Promise<Response>;
        /**
         * Retrieves all tickets from the system.
         * @param panel - The panel URL.
         * @param apikey - The API key for authentication.
         * @returns The list of all tickets from the API.
         */
        getAll(panel: string, apikey: string): Promise<Response>;
        /**
         * Retrieves all messages from a specific ticket.
         * @param panel - The panel URL.
         * @param apikey - The API key for authentication.
         * @param ticketId - The ID of the ticket.
         * @returns The list of all messages from the API for the specified ticket.
         */
        getAllMessages(panel: string, apikey: string, ticketId: string): Promise<Response>;
    };
    /**
     * Invoice-related operations
     */
    static Invoice: {
        new (): {};
        /**
         * Retrieves invoice details by its ID.
         * @param panel - The panel URL.
         * @param apikey - The API key for authentication.
         * @param invoiceId - The ID of the invoice.
         * @returns The invoice details from the API.
         */
        getById(panel: string, apikey: string, invoiceId: string): Promise<Response>;
        /**
         * Marks an invoice as paid.
         * @param panel - The panel URL.
         * @param apikey - The API key for authentication.
         * @param invoiceId - The ID of the invoice to pay.
         * @param payment_method - The method of payment.
         * @returns The response data from the API after paying the invoice.
         */
        pay(panel: string, apikey: string, invoiceId: string, payment_method: string): Promise<Response>;
        /**
         * Retrieves all invoices from the system.
         * @param panel - The panel URL.
         * @param apikey - The API key for authentication.
         * @returns The list of all invoices from the API.
         */
        getAll(panel: string, apikey: string): Promise<Response>;
    };
}
export default Admin;
