export function getCurrentTime() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format

    const timeString = `${formattedHours}:${String(minutes).padStart(2, '0')} ${ampm}`;

    return timeString;
}

export function getCurrentDate(): string {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const dateString: string = now.toLocaleDateString('en-US', options);
    return dateString;
}