export const Formatter = {
    formatPrice: (price) => {
        return new Intl.NumberFormat('fr-TD', {
            style: 'currency',
            currency: 'XAF'
        }).format(price);
    },

    formatDate: (date) => {
        return new Intl.DateTimeFormat('fr-TD', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    },

    formatPhoneNumber: (phone) => {
        if (!phone) return '';
        return phone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4');
    }
};