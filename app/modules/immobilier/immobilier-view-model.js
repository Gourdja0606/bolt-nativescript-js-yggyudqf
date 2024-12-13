import { Observable } from '@nativescript/core';
import { PropertyService } from './services/property.service';

export function createViewModel() {
    const viewModel = new Observable();
    viewModel.properties = PropertyService.getProperties();
    return viewModel;
}