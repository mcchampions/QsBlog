export async function setClipBoardText(text: string): Promise<void> {
    await navigator.clipboard.writeText(text)
}

export function isMobile(): boolean {
    const userAgent: string = navigator.userAgent.toUpperCase()
    if (/IPHONE|IPOD/.test(userAgent) && /MOBILE/.test(userAgent)) {
        return true
    }
    if (/ANDROID/.test(userAgent) && /MOBILE/.test(userAgent)) {
        return true
    }
    if (/IPAD/.test(userAgent) && /MOBILE/.test(userAgent)) {
        return false
    }
    return false
}