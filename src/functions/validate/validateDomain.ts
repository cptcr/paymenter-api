export default function validateDomain (panelDomain: string) {
    const panel = `${panelDomain}`;
    if (!panel.startsWith("https") || !panel.startsWith("http")) {
        throw new TypeError("Panel domain must start with https or http!")
    }
}