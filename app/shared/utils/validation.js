export const Validation = {
    isValidEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    isValidPhone: (phone) => {
        const phoneRegex = /^(\+235|235)?[0-9]{8}$/;
        return phoneRegex.test(phone);
    },

    isValidPrice: (price) => {
        return typeof price === 'number' && price >= 0;
    }
};