import { Observable } from '@nativescript/core';

export function createViewModel() {
    const viewModel = new Observable();

    viewModel.locationName = "";
    viewModel.description = "";
    viewModel.categories = [
        "Domicile",
        "Bureau",
        "Commerce",
        "Service public",
        "Autre"
    ];
    viewModel.selectedCategoryIndex = 0;

    viewModel.onSaveMarker = () => {
        // Sauvegarder le marqueur
        const markerData = {
            name: viewModel.locationName,
            description: viewModel.description,
            category: viewModel.categories[viewModel.selectedCategoryIndex]
        };
        console.log("Sauvegarde du marqueur:", markerData);
    };

    return viewModel;
}