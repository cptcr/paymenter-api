declare class Client {
    /**
     * Ticket-related operations for the client.
     */
    static Ticket: {
        new (): {};
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
        create(options: {
            panel: string;
            apikey: string;
            title: string;
            description: string;
            priority: "medium" | "low" | "high";
        }): Promise<Response>;
        /**
         * Retrieves ticket details by its ID.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @param options.ticketId - The ID of the ticket.
         * @returns The ticket details from the API.
         */
        getById(options: {
            panel: string;
            apikey: string;
            ticketId: string;
        }): Promise<Response>;
        /**
         * Deletes a ticket by its ID.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @param options.ticketId - The ID of the ticket.
         * @returns The response data from the API after deleting the ticket.
         */
        deleteById(options: {
            panel: string;
            apikey: string;
            ticketId: string;
        }): Promise<Response>;
        /**
         * Replies to a specific ticket.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @param options.ticketId - The ID of the ticket to reply to.
         * @param options.message - The content of the reply message.
         * @returns The response data from the API after sending the reply.
         */
        reply(options: {
            panel: string;
            apikey: string;
            ticketId: string;
            message: string;
        }): Promise<Response>;
        /**
         * Retrieves all tickets from the system.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @returns The list of all tickets from the API.
         */
        getAll(options: {
            panel: string;
            apikey: string;
        }): Promise<Response>;
        /**
         * Retrieves all messages from a specific ticket.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @param options.ticketId - The ID of the ticket.
         * @returns The list of all messages from the API for the specified ticket.
         */
        getMessages(options: {
            panel: string;
            apikey: string;
            ticketId: string;
        }): Promise<Response>;
    };
    /**
     * Invoice-related operations for the client.
     */
    static Invoice: {
        new (): {};
        /**
         * Retrieves invoice details by its ID.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @param options.invoiceId - The ID of the invoice.
         * @returns The invoice details from the API.
         */
        getById(options: {
            panel: string;
            apikey: string;
            invoiceId: string;
        }): Promise<Response>;
        /**
         * Retrieves all invoices from the system.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @returns The list of all invoices from the API.
         */
        getAll(options: {
            panel: string;
            apikey: string;
        }): Promise<Response>;
    };
}

declare class Admin {
    /**
     * Ticket-related operations
     */
    static Ticket: {
        new (): {};
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
        create(options: {
            panel: string;
            apikey: string;
            title: string;
            message: string;
            priority: "medium" | "low" | "high";
            userId: number;
        }): Promise<Response>;
        /**
         * Retrieves ticket details by its ID.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @param options.ticketId - The ID of the ticket.
         * @returns The ticket details from the API.
         */
        getById(options: {
            panel: string;
            apikey: string;
            ticketId: string;
        }): Promise<Response>;
        /**
         * Replies to a specific ticket.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @param options.ticketId - The ID of the ticket to reply to.
         * @param options.message - The content of the reply message.
         * @returns The response data from the API after sending the reply.
         */
        reply(options: {
            panel: string;
            apikey: string;
            ticketId: string;
            message: string;
        }): Promise<Response>;
        /**
         * Changes the status of a specific ticket.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @param options.ticketId - The ID of the ticket.
         * @param options.status - The new status of the ticket ('open' or 'closed').
         * @returns The response data from the API after changing the status.
         */
        changeStatus(options: {
            panel: string;
            apikey: string;
            ticketId: string;
            status: "open" | "closed";
        }): Promise<Response>;
        /**
         * Retrieves all tickets from the system.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @returns The list of all tickets from the API.
         */
        getAll(options: {
            panel: string;
            apikey: string;
        }): Promise<Response>;
        /**
         * Retrieves all messages from a specific ticket.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @param options.ticketId - The ID of the ticket.
         * @returns The list of all messages from the API for the specified ticket.
         */
        getAllMessages(options: {
            panel: string;
            apikey: string;
            ticketId: string;
        }): Promise<Response>;
    };
    /**
     * Invoice-related operations
     */
    static Invoice: {
        new (): {};
        /**
         * Retrieves invoice details by its ID.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @param options.invoiceId - The ID of the invoice.
         * @returns The invoice details from the API.
         */
        getById(options: {
            panel: string;
            apikey: string;
            invoiceId: string;
        }): Promise<Response>;
        /**
         * Marks an invoice as paid.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @param options.invoiceId - The ID of the invoice to pay.
         * @param options.payment_method - The method of payment.
         * @returns The response data from the API after paying the invoice.
         */
        pay(options: {
            panel: string;
            apikey: string;
            invoiceId: string;
            payment_method: string;
        }): Promise<Response>;
        /**
         * Retrieves all invoices from the system.
         * @param options - An object containing all parameters.
         * @param options.panel - The panel URL.
         * @param options.apikey - The API key for authentication.
         * @returns The list of all invoices from the API.
         */
        getAll(options: {
            panel: string;
            apikey: string;
        }): Promise<Response>;
    };
}

export { Admin, Client };
