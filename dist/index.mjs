// src/functions/validate/validateDomain.ts
function validateDomain(panelDomain) {
  const panel = `${panelDomain}`;
  if (!panel.startsWith("https") || !panel.startsWith("http")) {
    throw new TypeError("Panel domain must start with https or http!");
  }
}

// src/functions/client/tickets/getTicketByIdClient.ts
async function getTicketByIdClient(panel, apikey, ticket_id) {
  validateDomain(panel);
  return await fetch(`${panel}/api/client/v1/tickets/${ticket_id}`, {
    headers: {
      "Accept": "application/json",
      "Authroization": `Bearer ${apikey}`
    },
    method: "GET"
  });
}

// src/functions/client/tickets/deleteTicketById.ts
async function deleteTicketByIdClient(panel, apikey, ticketId) {
  validateDomain(panel);
  return await fetch(`${panel}/api/client/v1/tickets/${ticketId}/close`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    method: "DELETE"
  });
}

// src/functions/client/tickets/getAllTicketsClient.ts
async function getAllTicketsClient(panel, apiKey) {
  validateDomain(panel);
  return await fetch(`${panel}/api/client/v1/tickets`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    method: "GET"
  });
}

// src/functions/client/tickets/replyToTicketClient.ts
async function replyToTicketAsClient(panel, apikey, message, ticketId) {
  validateDomain(panel);
  const body = JSON.stringify({
    "message": message
  });
  return await fetch(`${panel}/api/client/v1/tickets/${ticketId}/reply`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    body,
    method: "POST"
  });
}

// src/functions/client/tickets/makeNewtTicketClient.ts
async function makeNewTicketClient(panel, apikey, title, message, priority) {
  validateDomain(panel);
  const body = JSON.stringify({
    "title": title,
    "message": message,
    "priority": priority
  });
  return await fetch(`${panel}/api/client/v1/tickets`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    body,
    method: "POST"
  });
}

// src/functions/client/tickets/getAllMessagesFromTicketClient.ts
async function getAllMessagesFromTicketClient(panel, apikey, ticketId) {
  validateDomain(panel);
  return await fetch(`${panel}/api/client/v1/tickets/${ticketId}/messages`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    method: "GET"
  });
}

// src/functions/client/invoices/getInvoiceByIdClient.ts
async function getInvoiceByIdClient(panel, apikey, invoiceId) {
  validateDomain(panel);
  return await fetch(`${panel}/api/client/v1/invoices/${invoiceId}`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    method: "GET"
  });
}

// src/functions/client/invoices/getAllInvoicesClient.ts
async function getAllInvoicesClient(panel, apikey) {
  validateDomain(panel);
  return await fetch(`${panel}/api/client/v1/invoices/`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    method: "GET"
  });
}

// src/classes/client/Client.ts
var Client = class {
};
/**
 * Ticket-related operations for the client.
 */
Client.Ticket = class {
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
  static async create(options) {
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
  static async getById(options) {
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
  static async deleteById(options) {
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
  static async reply(options) {
    return await replyToTicketAsClient(options.panel, options.apikey, options.ticketId, options.message);
  }
  /**
   * Retrieves all tickets from the system.
   * @param options - An object containing all parameters.
   * @param options.panel - The panel URL.
   * @param options.apikey - The API key for authentication.
   * @returns The list of all tickets from the API.
   */
  static async getAll(options) {
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
  static async getMessages(options) {
    return await getAllMessagesFromTicketClient(options.panel, options.apikey, options.ticketId);
  }
};
/**
 * Invoice-related operations for the client.
 */
Client.Invoice = class {
  /**
   * Retrieves invoice details by its ID.
   * @param options - An object containing all parameters.
   * @param options.panel - The panel URL.
   * @param options.apikey - The API key for authentication.
   * @param options.invoiceId - The ID of the invoice.
   * @returns The invoice details from the API.
   */
  static async getById(options) {
    return await getInvoiceByIdClient(options.panel, options.apikey, options.invoiceId);
  }
  /**
   * Retrieves all invoices from the system.
   * @param options - An object containing all parameters.
   * @param options.panel - The panel URL.
   * @param options.apikey - The API key for authentication.
   * @returns The list of all invoices from the API.
   */
  static async getAll(options) {
    return await getAllInvoicesClient(options.panel, options.apikey);
  }
};
var Client_default = Client;

// src/functions/admin/tickets/createAdminTicket.ts
async function createAdminTicket(panel, apikey, title, message, priority, user_id) {
  validateDomain(panel);
  const body = JSON.stringify({
    "title": title,
    "message": message,
    "priority": priority,
    "user_id": user_id
  });
  const response = await fetch(`${panel}/api/admin/v1/tickets`, {
    headers: {
      "Authorization": `Bearer ${apikey}`,
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body,
    method: "POST"
  });
  return response;
}

// src/functions/admin/tickets/getTicketByIdAdmin.ts
async function getTicketByIdAdmin(panel, apikey, ticketid) {
  validateDomain(panel);
  return await fetch(`${panel}/api/admin/v1/tickets/${ticketid}`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    method: "GET"
  });
}

// src/functions/admin/tickets/replyAdminTicket.ts
async function replyToTicketAsAdmin(panel, apikey, ticketId, message) {
  validateDomain(panel);
  const body = JSON.stringify({
    "message": message
  });
  return await fetch(`${panel}/api/v1/tickets/${ticketId}/reply`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    body,
    method: "POST"
  });
}

// src/functions/admin/tickets/changeTicketStatusAdmin.ts
async function changeTicketStatusAdmin(apikey, panel, ticketId, status) {
  const body = JSON.stringify({
    "status": status
  });
  validateDomain(panel);
  const response = await fetch(`${panel}/api/admin/v1/tickets/${ticketId}/status`, {
    headers: {
      "Authorization": `Bearer ${ticketId}`,
      "Content-Type": "application/json"
    },
    body,
    method: "PUT"
  });
  return response;
}

// src/functions/admin/tickets/getAllAdminTickets.ts
async function getAllTickets(panel, apikey) {
  validateDomain(panel);
  return await fetch(`${panel}/api/admin/v1/tickets`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    method: "GET"
  });
}

// src/functions/admin/tickets/getAllTicketMessagesAdmin.ts
async function getAllTicketMessages(panel, apikey, ticketId) {
  validateDomain(panel);
  return await fetch(`${panel}/api/v1/tickets/${ticketId}`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    method: "GET"
  });
}

// src/functions/admin/invoices/getInvoiceDataAdmin.ts
async function getInvoiceDatabyIdAdmin(panel, apikey, invoiceId) {
  validateDomain(panel);
  return await fetch(`${panel}/api/admin/v1/admin/${invoiceId}`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    method: "GET"
  });
}

// src/functions/admin/invoices/payInvoiceAdmin.ts
async function payInvoiceAdmin(panel, apikey, invoiceId, payment_method) {
  validateDomain(panel);
  const body = JSON.stringify({
    "payment_method": payment_method
  });
  return await fetch(`${panel}/api/admin/v1/admin/${invoiceId}/pay`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    body,
    method: "POST"
  });
}

// src/functions/admin/invoices/getAllInvoices.ts
async function getAllInvoicesAdmin(panel, apikey) {
  validateDomain(panel);
  return await fetch(`${panel}/api/admin/v1/invoices`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    method: "GET"
  });
}

// src/classes/admin/Admin.ts
var Admin = class {
};
/**
 * Ticket-related operations
 */
Admin.Ticket = class {
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
  static async create(options) {
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
  static async getById(options) {
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
  static async reply(options) {
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
  static async changeStatus(options) {
    return await changeTicketStatusAdmin(options.panel, options.apikey, options.ticketId, options.status);
  }
  /**
   * Retrieves all tickets from the system.
   * @param options - An object containing all parameters.
   * @param options.panel - The panel URL.
   * @param options.apikey - The API key for authentication.
   * @returns The list of all tickets from the API.
   */
  static async getAll(options) {
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
  static async getAllMessages(options) {
    return await getAllTicketMessages(options.panel, options.apikey, options.ticketId);
  }
};
/**
 * Invoice-related operations
 */
Admin.Invoice = class {
  /**
   * Retrieves invoice details by its ID.
   * @param options - An object containing all parameters.
   * @param options.panel - The panel URL.
   * @param options.apikey - The API key for authentication.
   * @param options.invoiceId - The ID of the invoice.
   * @returns The invoice details from the API.
   */
  static async getById(options) {
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
  static async pay(options) {
    return await payInvoiceAdmin(options.panel, options.apikey, options.invoiceId, options.payment_method);
  }
  /**
   * Retrieves all invoices from the system.
   * @param options - An object containing all parameters.
   * @param options.panel - The panel URL.
   * @param options.apikey - The API key for authentication.
   * @returns The list of all invoices from the API.
   */
  static async getAll(options) {
    return await getAllInvoicesAdmin(options.panel, options.apikey);
  }
};
var Admin_default = Admin;
export {
  Admin_default as Admin,
  Client_default as Client
};
//# sourceMappingURL=index.mjs.map