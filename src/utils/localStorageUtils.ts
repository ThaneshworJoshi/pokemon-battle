/**
 * Saves data to local storage by appending it to an existing history array.
 * If the history key does not exist, it creates a new history array.
 * @param dataToSave The data to be saved to local storage.
 */

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

/**
 * Retrieves data from local storage with the specified key.
 * @param key The name of the key used to store data in local storage.
 * @returns The retrieved data or null if the key is not found or an error occurs.
 */
export function getDataFromLocalStorage(key: string): any | null {
    try {
        const dataJSON = localStorage.getItem(key);
        if (dataJSON === null) {
            return null; // Key not found in local storage
        }
        return JSON.parse(dataJSON);
    } catch (error) {
        console.error(`Error retrieving data from local storage for key "${key}":`, error);
        return null; // Handle errors gracefully
    }
}