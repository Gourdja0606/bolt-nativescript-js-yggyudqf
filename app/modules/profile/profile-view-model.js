import { Observable } from '@nativescript/core';
import { CONFIG } from '../../shared/config';

export function createViewModel() {
    const viewModel = new Observable();

    // Données utilisateur (à remplacer par des données réelles)
    viewModel.userName = "";
    viewModel.physicalAddress = "";
    viewModel.phone = "";
    viewModel.email = "";
    viewModel.sharedAddresses = [];

    viewModel.onSave = () => {
        // Sauvegarder les informations du profil
        console.log("Sauvegarde du profil");
    };

    viewModel.onShareAddress = () => {
        // Implémenter le partage d'adresse
        console.log("Partage d'adresse");
    };

    viewModel.onDeleteAddress = (args) => {
        const index = args.object.bindingContext.index;
        const addresses = viewModel.get("sharedAddresses");
        addresses.splice(index, 1);
        viewModel.set("sharedAddresses", addresses);
    };

    return viewModel;
}