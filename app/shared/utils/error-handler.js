export class ErrorHandler {
    static handleError(error, context = '') {
        console.error(`Error in ${context}:`, error);
        
        // Catégoriser les erreurs
        if (error.name === 'NetworkError') {
            return {
                message: 'Erreur de connexion. Veuillez vérifier votre connexion internet.',
                type: 'network'
            };
        }
        
        if (error.name === 'ValidationError') {
            return {
                message: 'Données invalides. Veuillez vérifier vos entrées.',
                type: 'validation'
            };
        }
        
        // Erreur par défaut
        return {
            message: 'Une erreur est survenue. Veuillez réessayer.',
            type: 'unknown'
        };
    }
}