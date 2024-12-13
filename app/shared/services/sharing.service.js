export class SharingService {
    static async shareAddress(address, recipients) {
        try {
            // Logique de partage d'adresse
            console.log('Partage d\'adresse avec:', recipients);
            return true;
        } catch (error) {
            console.error('Erreur lors du partage:', error);
            return false;
        }
    }

    static async getSharedAddresses() {
        // Récupérer les adresses partagées
        return [];
    }
}