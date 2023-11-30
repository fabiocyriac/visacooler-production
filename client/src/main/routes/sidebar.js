/** Icons are imported separatly to reduce build time */
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import CurrencyPoundIcon from '@heroicons/react/24/outline/CurrencyPoundIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
import ListBulletIcon from '@heroicons/react/24/outline/ListBulletIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon'
import DocumentArrowUpIcon from '@heroicons/react/24/outline/DocumentArrowUpIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import SquaresPlusIcon from '@heroicons/react/24/outline/SquaresPlusIcon'
import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  {
    path: '/app/leads', // url
    icon: <InboxArrowDownIcon className={iconClasses}/>, // icon component
    name: 'Leads', // name that appear in Sidebar
  },
  {
    path: '/app/cases', // url
    icon: <ShoppingBagIcon className={iconClasses}/>, // icon component
    name: 'Cases', // name that appear in Sidebar
  },
  {
    path: '/app/partners', // url
    icon: <CircleStackIcon className={iconClasses}/>, // icon component
    name: 'Partners', // name that appear in Sidebar
  },
  {
    path: '/app/calendar', // url
    icon: <CalendarDaysIcon className={iconClasses}/>, // icon component
    name: 'Calendar', // name that appear in Sidebar
  },
  {
    path: '', //no url needed as this has submenu
    icon: <SquaresPlusIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Partner', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/services', // url
        icon: <ListBulletIcon className={submenuIconClasses}/>, // icon component
        name: 'Services', // name that appear in Sidebar
      },
      {
        path: '/app/cases', // url
        icon: <ShoppingBagIcon className={submenuIconClasses}/>, // icon component
        name: 'Cases', // name that appear in Sidebar
      },
      {
        path: '/app/users', // url
        icon: <UsersIcon className={submenuIconClasses}/>, // icon component
        name: 'Users', // name that appear in Sidebar
      },
      {
        path: '/app/configurations', // url
        icon: <SquaresPlusIcon className={submenuIconClasses}/>, // icon component
        name: 'Configurations', // name that appear in Sidebar
      },
      {
        path: '/app/documents', // url
        icon: <DocumentArrowUpIcon className={submenuIconClasses}/>, // icon component
        name: 'Documents', // name that appear in Sidebar
      },
      {
        path: '/app/transactions', // url
        icon: <CurrencyPoundIcon className={submenuIconClasses}/>, // icon component
        name: 'Transactions', // name that appear in Sidebar
      },
      {
        path: '/app/charts', // url
        icon: <ChartBarIcon className={submenuIconClasses}/>, // icon component
        name: 'Analytics', // name that appear in Sidebar
      },
      {
        path: '/app/integration', // url
        icon: <BoltIcon className={submenuIconClasses}/>, // icon component
        name: 'Integration', // name that appear in Sidebar
      },
    ]
  },
  {
    path: '', //no url needed as this has submenu
    icon: <CircleStackIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Admin', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/settings-profile', //url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Profile', // name that appear in Sidebar
      },
      {
        path: '/app/settings-billing',
        icon: <WalletIcon className={submenuIconClasses}/>,
        name: 'Billing',
      },
      {
        path: '/app/settings-team', // url
        icon: <UsersIcon className={submenuIconClasses}/>, // icon component
        name: 'Team Members', // name that appear in Sidebar
      },
    ]
  },
  {
    path: '', //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Settings', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/settings-profile', //url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Profile', // name that appear in Sidebar
      },
      {
        path: '/app/settings-billing',
        icon: <WalletIcon className={submenuIconClasses}/>,
        name: 'Billing',
      },
      {
        path: '/app/settings-team', // url
        icon: <UsersIcon className={submenuIconClasses}/>, // icon component
        name: 'Team Members', // name that appear in Sidebar
      },
    ]
  },
  {
    path: '', //no url needed as this has submenu
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Pages', // name that appear in Sidebar
    submenu : [
      {
        path: '/login',
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
        name: 'Login',
      },
      {
        path: '/register', //url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Register', // name that appear in Sidebar
      },
      {
        path: '/forgot-password',
        icon: <KeyIcon className={submenuIconClasses}/>,
        name: 'Forgot Password',
      },
      {
        path: '/app/blank',
        icon: <DocumentIcon className={submenuIconClasses}/>,
        name: 'Blank Page',
      },
      {
        path: '/app/404',
        icon: <ExclamationTriangleIcon className={submenuIconClasses}/>,
        name: '404',
      },
    ]
  },
  
]

export default routes


