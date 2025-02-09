// src/functions/validate/validateDomain.ts
function validateDomain(panel) {
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
   * @param panel - The panel URL for the API.
   * @param apikey - The API key for authentication.
   * @param title - The title of the ticket.
   * @param description - The description of the ticket.
   * @returns The data from the API after creating the ticket.
   */
  static async create(panel, apikey, title, description, priority) {
    return await makeNewTicketClient(panel, apikey, title, description, priority);
  }
  /**
   * Retrieves ticket details by its ID.
   * @param panel - The panel URL for the API.
   * @param apikey - The API key for authentication.
   * @param ticketId - The ID of the ticket.
   * @returns The ticket details from the API.
   */
  static async getById(panel, apikey, ticketId) {
    return await getTicketByIdClient(panel, apikey, ticketId);
  }
  /**
   * Deletes a ticket by its ID.
   * @param panel - The panel URL for the API.
   * @param apikey - The API key for authentication.
   * @param ticketId - The ID of the ticket.
   * @returns The response data from the API after deleting the ticket.
   */
  static async deleteById(panel, apikey, ticketId) {
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
  static async reply(panel, apikey, ticketId, message) {
    return await replyToTicketAsClient(panel, apikey, ticketId, message);
  }
  /**
   * Retrieves all tickets from the system.
   * @param panel - The panel URL for the API.
   * @param apikey - The API key for authentication.
   * @returns The list of all tickets from the API.
   */
  static async getAll(panel, apikey) {
    return await getAllTicketsClient(panel, apikey);
  }
  /**
   * Retrieves all messages from a specific ticket.
   * @param panel - The panel URL for the API.
   * @param apikey - The API key for authentication.
   * @param ticketId - The ID of the ticket.
   * @returns The list of all messages from the API for the specified ticket.
   */
  static async getMessages(panel, apikey, ticketId) {
    return await getAllMessagesFromTicketClient(panel, apikey, ticketId);
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
  static async getById(panel, apikey, invoiceId) {
    return await getInvoiceByIdClient(panel, apikey, invoiceId);
  }
  /**
   * Retrieves all invoices from the system.
   * @param panel - The panel URL for the API.
   * @param apikey - The API key for authentication.
   * @returns The list of all invoices from the API.
   */
  static async getAll(panel, apikey) {
    return await getAllInvoicesClient(panel, apikey);
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
      "Accpet": "application/json",
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
   * @param panel - The panel URL.
   * @param apikey - The API key for authentication.
   * @param title - The title of the ticket.
   * @param message - The content of the ticket message.
   * @param priority - Priority of the ticket ('low', 'medium', 'high').
   * @param userid - ID of the user creating the ticket.
   * @returns The data from the API after creating the ticket.
   */
  static async create(panel, apikey, title, message, priority, userid) {
    return await createAdminTicket(panel, apikey, title, message, priority, userid);
  }
  /**
   * Retrieves ticket details by its ID.
   * @param panel - The panel URL.
   * @param apikey - The API key for authentication.
   * @param ticketId - The ID of the ticket.
   * @returns The ticket details from the API.
   */
  static async getById(panel, apikey, ticketId) {
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
  static async reply(panel, apikey, ticketId, message) {
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
  static async changeStatus(panel, apikey, ticketId, status) {
    return await changeTicketStatusAdmin(panel, apikey, ticketId, status);
  }
  /**
   * Retrieves all tickets from the system.
   * @param panel - The panel URL.
   * @param apikey - The API key for authentication.
   * @returns The list of all tickets from the API.
   */
  static async getAll(panel, apikey) {
    return await getAllTickets(panel, apikey);
  }
  /**
   * Retrieves all messages from a specific ticket.
   * @param panel - The panel URL.
   * @param apikey - The API key for authentication.
   * @param ticketId - The ID of the ticket.
   * @returns The list of all messages from the API for the specified ticket.
   */
  static async getAllMessages(panel, apikey, ticketId) {
    return await getAllTicketMessages(panel, apikey, ticketId);
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
  static async getById(panel, apikey, invoiceId) {
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
  static async pay(panel, apikey, invoiceId, payment_method) {
    return await payInvoiceAdmin(panel, apikey, invoiceId, payment_method);
  }
  /**
   * Retrieves all invoices from the system.
   * @param panel - The panel URL.
   * @param apikey - The API key for authentication.
   * @returns The list of all invoices from the API.
   */
  static async getAll(panel, apikey) {
    return await getAllInvoicesAdmin(panel, apikey);
  }
};
var Admin_default = Admin;
export {
  Admin_default as Admin,
  Client_default as Client
};
//# sourceMappingURL=index.mjs.map