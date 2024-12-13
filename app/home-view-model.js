import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';

export function createViewModel() {
    const viewModel = new Observable();

    viewModel.onImmobilierTap = () => {
        Frame.topmost().navigate('modules/immobilier/immobilier-page');
    };

    viewModel.onMobileTap = () => {
        Frame.topmost().navigate('modules/mobile/mobile-page');
    };

    viewModel.onAutoTap = () => {
        Frame.topmost().navigate('modules/auto/auto-page');
    };

    viewModel.onMapTap = () => {
        Frame.topmost().navigate('modules/map/map-page');
    };

    return viewModel;
}