import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Update from '~/pages/Update';
import { ROUTES } from '~/config';

import { MainLayout, UpdateLayout } from '~/layouts';

export const publicRoutes = [
    { path: ROUTES.home, page: Home, layout: MainLayout },
    { path: ROUTES.profile, page: Following, layout: MainLayout },
    { path: ROUTES.update, page: Update, layout: UpdateLayout },
];

export const privateRoutes = [];
