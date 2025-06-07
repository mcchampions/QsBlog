export async function setClipBoardText(text: string): Promise<void> {
    await navigator.clipboard.writeText(text)
}

export function isMobile(): boolean {
    if (window.screen.width < 500) {
        return true;
    }
}