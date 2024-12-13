import { Observable } from '@nativescript/core';

export function createViewModel() {
    const viewModel = new Observable();

    viewModel.vehicles = [
        { model: "Land Cruiser", brand: "Toyota", year: "2022", price: "45 000 000 FCFA" },
        { model: "Hilux", brand: "Toyota", year: "2023", price: "35 000 000 FCFA" },
        { model: "Prado", brand: "Toyota", year: "2021", price: "40 000 000 FCFA" }
    ];

    return viewModel;
}