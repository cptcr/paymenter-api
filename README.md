

# **Paymenter API Wrapper**

A Node.js API wrapper for interacting with the [Paymenter API](https://paymenter.org). This package provides an easy-to-use interface for managing tickets, invoices, and other related features for both clients and admins.

## **Official Documentation**
- [Client API Docs](https://paymenter.org/api/clients)
- [Admin API Docs](https://paymenter.org/api/admin)

## **Installation**

You can install this wrapper via npm:

```bash
npm install paymenter-api
```

## **Usage**

### TypeScript Example

```ts
import { Admin, Client } from "paymenter-api";

// Example: Create a new ticket as a client
const newTicket = await Client.Ticket.create(
    "https://yourshop.com",    // The domain for your Paymenter shop
    "clientApiKey",           // Your client API key
    "Test Ticket",            // The title of the ticket
    "Hello, this is a test ticket.",  // First message in the ticket
    "high"                    // Ticket priority (high, low, or medium)
);

console.log(newTicket);  // Logs the response from the API after creating the ticket
```

### JavaScript Example

```js
// Import the Paymenter API wrapper
const { Admin, Client } = require("paymenter-api");

// Example: Create a new ticket as a client
Client.Ticket.create(
    "https://yourshop.com",    // The domain for your Paymenter shop
    "clientApiKey",           // Your client API key
    "Test Ticket",            // The title of the ticket
    "Hello, this is a test ticket.",  // First message in the ticket
    "high"                    // Ticket priority (high, low, or medium)
).then(newTicket => {
    console.log(newTicket);  // Logs the response from the API
});
```

---

## **More Usage Examples**

### **Admin: Ticket Operations**

#### **1. Create a New Ticket (Admin)**

```ts
const newAdminTicket = await Admin.Ticket.create(
    "https://yourshop.com",    // Shop domain URL
    "adminApiKey",             // Admin API key
    "New Admin Ticket",       // Ticket title
    "This is an admin-created ticket.",  // First message
    "medium",                  // Priority level
    1234                       // User ID creating the ticket
);

console.log(newAdminTicket);  // Logs the response from the API
```

#### **2. Get Ticket by ID (Admin)**

```ts
const ticketDetails = await Admin.Ticket.getById(
    "https://yourshop.com",    // Shop domain URL
    "adminApiKey",             // Admin API key
    "ticket1234"               // Ticket ID to retrieve
);

console.log(ticketDetails);  // Logs ticket details retrieved from the API
```

#### **3. Reply to a Ticket (Admin)**

```ts
const replyResponse = await Admin.Ticket.reply(
    "https://yourshop.com",    // Shop domain URL
    "adminApiKey",             // Admin API key
    "ticket1234",              // Ticket ID to reply to
    "This is an admin reply."  // Message content
);

console.log(replyResponse);  // Logs the reply response from the API
```

#### **4. Change Ticket Status (Admin)**

```ts
const changeStatusResponse = await Admin.Ticket.changeStatus(
    "https://yourshop.com",    // Shop domain URL
    "adminApiKey",             // Admin API key
    "ticket1234",              // Ticket ID to change status
    "closed"                   // New status ("open" or "closed")
);

console.log(changeStatusResponse);  // Logs the response from the API
```

#### **5. Get All Tickets (Admin)**

```ts
const allTickets = await Admin.Ticket.getAll(
    "https://yourshop.com",    // Shop domain URL
    "adminApiKey"              // Admin API key
);

console.log(allTickets);  // Logs a list of all tickets from the API
```

#### **6. Get All Messages from a Ticket (Admin)**

```ts
const messages = await Admin.Ticket.getAllMessages(
    "https://yourshop.com",    // Shop domain URL
    "adminApiKey",             // Admin API key
    "ticket1234"               // Ticket ID
);

console.log(messages);  // Logs all messages from the ticket
```

---

### **Admin: Invoice Operations**

#### **1. Get Invoice by ID (Admin)**

```ts
const invoiceDetails = await Admin.Invoice.getById(
    "https://yourshop.com",    // Shop domain URL
    "adminApiKey",             // Admin API key
    "invoice5678"              // Invoice ID to retrieve
);

console.log(invoiceDetails);  // Logs the invoice details
```

#### **2. Pay an Invoice (Admin)**

```ts
const payInvoiceResponse = await Admin.Invoice.pay(
    "https://yourshop.com",    // Shop domain URL
    "adminApiKey",             // Admin API key
    "invoice5678",             // Invoice ID
    "credit card"              // Payment method (e.g., "credit card", "PayPal")
);

console.log(payInvoiceResponse);  // Logs the response from the API after paying the invoice
```

#### **3. Get All Invoices (Admin)**

```ts
const allInvoices = await Admin.Invoice.getAll(
    "https://yourshop.com",    // Shop domain URL
    "adminApiKey"              // Admin API key
);

console.log(allInvoices);  // Logs a list of all invoices
```

---

### **Client: Ticket Operations**

#### **1. Create a New Ticket (Client)**

```ts
const newClientTicket = await Client.Ticket.create(
    "https://yourshop.com",    // Shop domain URL
    "clientApiKey",            // Client API key
    "Client Ticket",           // Ticket title
    "This is a client-created ticket.",  // First message
    "low"                      // Priority level
);

console.log(newClientTicket);  // Logs the response from the API
```

#### **2. Get Ticket by ID (Client)**

```ts
const clientTicketDetails = await Client.Ticket.getById(
    "https://yourshop.com",    // Shop domain URL
    "clientApiKey",            // Client API key
    "ticket1234"               // Ticket ID to retrieve
);

console.log(clientTicketDetails);  // Logs ticket details retrieved from the API
```

#### **3. Reply to a Ticket (Client)**

```ts
const replyToClientTicket = await Client.Ticket.reply(
    "https://yourshop.com",    // Shop domain URL
    "clientApiKey",            // Client API key
    "ticket1234",              // Ticket ID to reply to
    "This is my reply."        // Message content
);

console.log(replyToClientTicket);  // Logs the response from the API after replying to the ticket
```

#### **4. Get All Tickets (Client)**

```ts
const clientTickets = await Client.Ticket.getAll(
    "https://yourshop.com",    // Shop domain URL
    "clientApiKey"             // Client API key
);

console.log(clientTickets);  // Logs a list of all tickets from the API
```

#### **5. Get All Messages from a Ticket (Client)**

```ts
const clientTicketMessages = await Client.Ticket.getAllMessages(
    "https://yourshop.com",    // Shop domain URL
    "clientApiKey",            // Client API key
    "ticket1234"               // Ticket ID
);

console.log(clientTicketMessages);  // Logs all messages from the ticket
```

---

### **Client: Invoice Operations**

#### **1. Get Invoice by ID (Client)**

```ts
const clientInvoiceDetails = await Client.Invoice.getById(
    "https://yourshop.com",    // Shop domain URL
    "clientApiKey",            // Client API key
    "invoice5678"              // Invoice ID
);

console.log(clientInvoiceDetails);  // Logs the invoice details retrieved from the API
```

#### **2. Get All Invoices (Client)**

```ts
const clientInvoices = await Client.Invoice.getAll(
    "https://yourshop.com",    // Shop domain URL
    "clientApiKey"             // Client API key
);

console.log(clientInvoices);  // Logs a list of all invoices for the client
```

---

## **Disclaimer**

This package is developed and maintained by **cptcr** and is **not affiliated** with the official [Paymenter API](https://paymenter.org).