// assets
import { DashboardOutlined , MoneyCollectFilled , UnorderedListOutlined, AuditOutlined  } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined , MoneyCollectFilled ,UnorderedListOutlined, AuditOutlined 
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'sale',
            title: 'Sale',
            type: 'item',
            url: '/sale',
            icon: icons.MoneyCollectFilled,
            breadcrumbs: false
        },
        {
            id: 'product',
            title: 'Product',
            type: 'item',
            url: '/product',
            icon: icons.UnorderedListOutlined,
            breadcrumbs: false
        },
        {
            id: 'bill',
            title: 'Bill',
            type: 'item',
            url: '/bill',
            icon: icons.AuditOutlined ,
            breadcrumbs: false
        }

    ]
};

export default dashboard;
