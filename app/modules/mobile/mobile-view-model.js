import { Observable } from '@nativescript/core';

export function createViewModel() {
    const viewModel = new Observable();

    viewModel.phones = [
        { model: "iPhone 13", brand: "Apple", price: "800 000 FCFA" },
        { model: "Galaxy S21", brand: "Samsung", price: "600 000 FCFA" },
        { model: "Redmi Note 10", brand: "Xiaomi", price: "150 000 FCFA" }
    ];

    return viewModel;
}