export default function validateDomain (panel: string) {
    if (!panel.startsWith("https") || !panel.startsWith("http")) {
        throw new TypeError("Panel domain must start with https or http!")
    }
}