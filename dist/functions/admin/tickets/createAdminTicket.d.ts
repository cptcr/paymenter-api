/**
 * Create a ticket as admin on a user
 * @param {string} panel - The panel domain
 * @param {string} apikey - The api key
 * @param {string} title - The title for the ticket
 * @param {string} message - The first message sent into the ticket
 * @param {"medium" | "low" | "high"} priority
 * @param {number} user_id - The
 * @returns Response data
 */
export default function createAdminTicket(panel: string, apikey: string, title: string, message: string, priority: "medium" | "low" | "high", user_id: number): Promise<Response>;
