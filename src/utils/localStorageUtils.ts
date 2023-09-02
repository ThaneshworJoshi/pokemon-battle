export function saveDataToLocalStorage(dataToSave: any): void {
    try {
        // Get existing data from localStorage
        const existingDataJSON = localStorage.getItem('history');
        const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];

        // Append the new data
        const updatedData = [dataToSave, ...existingData,];

        // Convert the updated data to a JSON string and save it in localStorage
        const updatedDataJSON = JSON.stringify(updatedData);
        localStorage.setItem('history', updatedDataJSON);
    } catch (error) {
        // Handle errors if there's an issue with saving data
        console.error('Error saving data to localStorage:', error);
    }
}
