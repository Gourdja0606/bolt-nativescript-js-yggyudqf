import { StorageService } from './storage.service';

export class AuthService {
    static async getCurrentUser() {
        return await StorageService.getData('currentUser');
    }

    static async saveUser(userData) {
        await StorageService.saveData('currentUser', userData);
    }

    static async logout() {
        await StorageService.saveData('currentUser', null);
    }
}