import Home from '~/components/pages/Home';
import Following from '~/components/pages/Following';
import Update from '~/components/pages/Update';
import { ROUTES } from '~/config';

import { MainLayout, UpdateLayout } from '~/layouts';

export const publicRoutes = [
    { path: ROUTES.home, page: Home, layout: MainLayout },
    { path: ROUTES.profile, page: Following, layout: MainLayout },
    { path: ROUTES.update, page: Update, layout: UpdateLayout },
];

export const privateRoutes = [];
