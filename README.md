**# **Paymenter API Wrapper**

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
const newTicket = await Client.Ticket.create({
    panel: "https://yourshop.com",    // The domain for your Paymenter shop
    apikey: "clientApiKey",           // Your client API key
    title: "Test Ticket",            // The title of the ticket
    description: "Hello, this is a test ticket.",  // First message in the ticket
    priority: "high"                    // Ticket priority (high, low, or medium)
});

console.log(newTicket);  // Logs the response from the API after creating the ticket
```

### JavaScript Example

```js
// Import the Paymenter API wrapper
const { Admin, Client } = require("paymenter-api");

// Example: Create a new ticket as a client
Client.Ticket.create({
    panel: "https://yourshop.com",    // The domain for your Paymenter shop
    apikey: "clientApiKey",           // Your client API key
    title: "Test Ticket",            // The title of the ticket
    description: "Hello, this is a test ticket.",  // First message in the ticket
    priority: "high"                    // Ticket priority (high, low, or medium)
}).then(newTicket => {
    console.log(newTicket);  // Logs the response from the API
});
```

---

## **More Usage Examples**

### **Admin: Ticket Operations**

#### **1. Create a New Ticket (Admin)**

```ts
const newAdminTicket = await Admin.Ticket.create({
    panel: "https://yourshop.com",    // Shop domain URL
    apikey: "adminApiKey",             // Admin API key
    title: "New Admin Ticket",       // Ticket title
    message: "This is an admin-created ticket.",  // First message
    priority: "medium",                  // Priority level
    userId: 1234                       // User ID creating the ticket
});

console.log(newAdminTicket);  // Logs the response from the API
```

#### **2. Get Ticket by ID (Admin)**

```ts
const ticketDetails = await Admin.Ticket.getById({
    panel: "https://yourshop.com",    // Shop domain URL
    apikey: "adminApiKey",             // Admin API key
    ticketId: "ticket1234"               // Ticket ID to retrieve
});

console.log(ticketDetails);  // Logs ticket details retrieved from the API
```

#### **3. Reply to a Ticket (Admin)**

```ts
const replyResponse = await Admin.Ticket.reply({
    panel: "https://yourshop.com",    // Shop domain URL
    apikey: "adminApiKey",             // Admin API key
    ticketId: "ticket1234",              // Ticket ID to reply to
    message: "This is an admin reply."  // Message content
});

console.log(replyResponse);  // Logs the reply response from the API
```

#### **4. Change Ticket Status (Admin)**

```ts
const changeStatusResponse = await Admin.Ticket.changeStatus({
    panel: "https://yourshop.com",    // Shop domain URL
    apikey: "adminApiKey",             // Admin API key
    ticketId: "ticket1234",              // Ticket ID to change status
    status: "closed"                   // New status ("open" or "closed")
});

console.log(changeStatusResponse);  // Logs the response from the API
```

#### **5. Get All Tickets (Admin)**

```ts
const allTickets = await Admin.Ticket.getAll({
    panel: "https://yourshop.com",    // Shop domain URL
    apikey: "adminApiKey"              // Admin API key
});

console.log(allTickets);  // Logs a list of all tickets from the API
```

#### **6. Get All Messages from a Ticket (Admin)**

```ts
const messages = await Admin.Ticket.getAllMessages({
    panel: "https://yourshop.com",    // Shop domain URL
    apikey: "adminApiKey",             // Admin API key
    ticketId: "ticket1234"               // Ticket ID
});

console.log(messages);  // Logs all messages from the ticket
```

---

## **Disclaimer**

This package is developed and maintained by **cptcr** and is **not affiliated** with the official [Paymenter API](https://paymenter.org).**
