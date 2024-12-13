import { createViewModel } from './mobile-view-model';

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = createViewModel();
}