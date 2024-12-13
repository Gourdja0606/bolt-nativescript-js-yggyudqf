export class StorageService {
    static async saveData(key, data) {
        try {
            const jsonData = JSON.stringify(data);
            // Implémenter la sauvegarde locale
            console.log(`Saving data for key: ${key}`, jsonData);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    static async getData(key) {
        try {
            // Implémenter la récupération locale
            return null;
        } catch (error) {
            console.error('Error getting data:', error);
            return null;
        }
    }
}