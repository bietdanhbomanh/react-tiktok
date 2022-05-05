import Home from '~/components/pages/Home';
import Following from '~/components/pages/Following';
import Update from '~/components/pages/Update';

import { MainLayout, UpdateLayout } from '~/components/layout/';

export const publicRoutes = [
    { path: '/', page: Home, layout: MainLayout },
    { path: 'Following', page: Following, layout: MainLayout },
    { path: 'Update', page: Update, layout: UpdateLayout },
];

export const privateRoutes = [];
