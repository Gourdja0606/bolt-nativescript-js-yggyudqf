import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';
import { LocationService } from '../../shared/services/location.service';

export function createViewModel() {
    const viewModel = new Observable();
    
    viewModel.mapUrl = LocationService.getMapUrl();

    viewModel.onProfileTap = () => {
        Frame.topmost().navigate('modules/profile/profile-page');
    };

    viewModel.onSearchAddress = async (args) => {
        const searchBar = args.object;
        const results = await LocationService.searchAddress(searchBar.text);
        viewModel.set('searchResults', results);
    };

    viewModel.onMarkLocation = () => {
        Frame.topmost().navigate('modules/map/mark-location-page');
    };

    viewModel.onGetDirections = () => {
        Frame.topmost().navigate('modules/map/directions-page');
    };

    return viewModel;
}