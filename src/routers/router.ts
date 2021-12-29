import Dashboard from '@/views/Dashboard';
import Document from '@/views/Document';

const routes = [
      {
        path: "/",
        exact: true,
        component: Dashboard
      },
      {
        path: "/dashboard",
        exact: true,
        component: Dashboard
      },
      {
        path: "/document",
        exact: true,
        component: Document
      },
 ];
 export default routes;