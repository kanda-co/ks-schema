import type { FunctionComponent } from 'react';
import type { StringIndexedObject } from '~/types';
import Dashboard from '../../assets/icons/dashboard.svg';
import DashboardColor from '../../assets/icons/dashboard-color.svg';
import Home from '../../assets/icons/home.svg';
import HomeColor from '../../assets/icons/home-color.svg';
import Job from '../../assets/icons/job.svg';
import JobColor from '../../assets/icons/job-color.svg';
import SendQuote from '../../assets/icons/send-quote.svg';
import SendQuoteColor from '../../assets/icons/send-quote-color.svg';
import CheckCircle from '../../assets/icons/check-circle.svg';
import CheckCircleColor from '../../assets/icons/check-circle-color.svg';
import Payment from '../../assets/icons/payment.svg';
import PaymentColor from '../../assets/icons/payment-color.svg';
import Account from '../../assets/icons/account.svg';
import AccountColor from '../../assets/icons/account-color.svg';
import Verification from '../../assets/icons/verification.svg';
import VerificationColor from '../../assets/icons/verification-color.svg';
import UserSquare from '../../assets/icons/user-square.svg';
import UserSquareColor from '../../assets/icons/user-square-color.svg';
import SearchFile from '../../assets/icons/search-file.svg';
import SearchFileColor from '../../assets/icons/search-file-color.svg';
import Alarm from '../../assets/icons/alarm.svg';
import AlarmColor from '../../assets/icons/alarm-color.svg';
import Menu from '../../assets/icons/menu.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import Notification from '../../assets/icons/notification.svg';
import Plus from '../../assets/icons/plus.svg';
import Toolbox from '../../assets/icons/toolbox.svg';
import Load from '../../assets/icons/load.svg';
import Check from '../../assets/icons/check.svg';
import ChevronUp from '../../assets/icons/chevron-up.svg';
import Close from '../../assets/icons/close.svg';
import CreditCard from '../../assets/icons/credit-card.svg';
import Paypal from '../../assets/icons/paypal.svg';
import Currency from '../../assets/icons/currency.svg';
import Instalments from '../../assets/icons/instalments.svg';
import More from '../../assets/icons/more.svg';
import Send from '../../assets/icons/send.svg';
import Remove from '../../assets/icons/remove.svg';
import Phone from '../../assets/icons/phone.svg';
import Email from '../../assets/icons/email.svg';
import Filter from '../../assets/icons/filter.svg';
import Minus from '../../assets/icons/minus.svg';
import Copy from '../../assets/icons/copy.svg';
import FileUpload from '../../assets/icons/file-upload.svg';
import File from '../../assets/icons/file.svg';
import Search from '../../assets/icons/search.svg';
import Edit from '../../assets/icons/edit.svg';
import Info from '../../assets/icons/info.svg';
import Sms from '../../assets/icons/sms.svg';
import Attachement from '../../assets/icons/attachement.svg';
import Note from '../../assets/icons/note.svg';
import ChevronLeft from '../../assets/icons/chevron-left.svg';
import ChevronDown from '../../assets/icons/chevron-down.svg';
import Eye from '../../assets/icons/eye.svg';
import Location from '../../assets/icons/location.svg';
import SpecialCheck from '../../assets/icons/special-check.svg';
import Financed from '../../assets/icons/financed.svg';
import FinancedColor from '../../assets/icons/financed-color.svg';
import ArrowUp from '../../assets/icons/arrow-up.svg';
import Image from '../../assets/icons/image.svg';
import Wallet from '../../assets/icons/wallet.svg';
import Deposit from '../../assets/icons/deposit.svg';
import Download from '../../assets/icons/download.svg';
import Customer from '../../assets/icons/customer.svg';
import CustomerColor from '../../assets/icons/customer-color.svg';
import Rocket from '../../assets/icons/rocket.svg';
import RocketColor from '../../assets/icons/rocket-color.svg';
import Rotate from '../../assets/icons/rotate.svg';
import Help from '../../assets/icons/help.svg';
import Star from '../../assets/icons/star.svg';
import NotesPaper from '../../assets/icons/notes-paper.svg';
import Office from '../../assets/icons/office.svg';
import Indicator from '../../assets/icons/indicator.svg';
import CustomersColor from '../../assets/icons/customers-color.svg';
import Customers from '../../assets/icons/customers.svg';
import Cart from '../../assets/icons/cart.svg';
import Paper from '../../assets/icons/paper.svg';
import Alphabet from '../../assets/icons/alphabet.svg';
import ArrowUpRight from '../../assets/icons/arrow-up-right.svg';
import EyeOff from '../../assets/icons/eye-off.svg';
import Pound from '../../assets/icons/pound.svg';
import Settings from '../../assets/icons/settings.svg';
import SortAscending from '../../assets/icons/sort-ascending.svg';
import SortDescending from '../../assets/icons/sort-descending.svg';
import Tag from '../../assets/icons/tag.svg';
import User from '../../assets/icons/user.svg';
import Logout from '../../assets/icons/logout.svg';
import DownloadFile from '../../assets/icons/download-file.svg';
import DeleteFile from '../../assets/icons/delete-file.svg';
import Archive from '../../assets/icons/archive.svg';
import Favourite from '../../assets/icons/favourite.svg';
import Warning from '../../assets/icons/warning.svg';
import Error from '../../assets/icons/error.svg';
import ShieldCheck from '../../assets/icons/shield-check.svg';
import Calendar from '../../assets/icons/calendar.svg';
import Bold from '../../assets/icons/bold.svg';
import Italic from '../../assets/icons/italic.svg';
import OrderedList from '../../assets/icons/ordered-list.svg';
import UnorderedList from '../../assets/icons/unordered-list.svg';

export const DEFAULT_SIZE = {
  width: 24,
  height: 24,
};

export const CLASS_NAMES = {
  skeletonBase: 'leading-unset',
};

interface Icon {
  Icon:
    | string
    | FunctionComponent<{
        className?: string;
        children?: JSX.Element | JSX.Element[];
        width?: number;
        height?: number;
      }>;
  flip?: boolean;
}

export const ICONS: StringIndexedObject<Icon> = {
  dashboard: { Icon: Dashboard },
  'dashboard-color': { Icon: DashboardColor },
  home: { Icon: Home },
  'home-color': { Icon: HomeColor },
  job: { Icon: Job },
  'job-color': { Icon: JobColor },
  'send-quote': { Icon: SendQuote },
  'send-quote-color': { Icon: SendQuoteColor },
  'check-circle': { Icon: CheckCircle },
  'check-circle-color': { Icon: CheckCircleColor },
  payment: { Icon: Payment },
  'payment-color': { Icon: PaymentColor },
  account: { Icon: Account },
  'account-color': { Icon: AccountColor },
  verification: { Icon: Verification },
  'verification-color': { Icon: VerificationColor },
  'user-square': { Icon: UserSquare },
  'user-square-color': { Icon: UserSquareColor },
  'search-file': { Icon: SearchFile },
  'search-file-color': { Icon: SearchFileColor },
  alarm: { Icon: Alarm },
  'alarm-color': { Icon: AlarmColor },
  menu: { Icon: Menu },
  'arrow-right': { Icon: ArrowRight },
  notification: { Icon: Notification },
  plus: { Icon: Plus },
  toolbox: { Icon: Toolbox },
  load: { Icon: Load },
  check: { Icon: Check },
  'arrow-left': { Icon: ArrowRight, flip: true },
  'chevron-up': { Icon: ChevronUp },
  close: { Icon: Close },
  'credit-card': { Icon: CreditCard },
  paypal: { Icon: Paypal },
  currency: { Icon: Currency },
  instalments: { Icon: Instalments },
  more: { Icon: More },
  send: { Icon: Send },
  remove: { Icon: Remove },
  phone: { Icon: Phone },
  email: { Icon: Email },
  filter: { Icon: Filter },
  minus: { Icon: Minus },
  copy: { Icon: Copy },
  'file-upload': { Icon: FileUpload },
  file: { Icon: File },
  search: { Icon: Search },
  edit: { Icon: Edit },
  info: { Icon: Info },
  sms: { Icon: Sms },
  attachement: { Icon: Attachement },
  note: { Icon: Note },
  'chevron-right': { Icon: ChevronLeft, flip: true },
  'chevron-left': { Icon: ChevronLeft },
  'chevron-down': { Icon: ChevronDown },
  eye: { Icon: Eye },
  location: { Icon: Location },
  'special-check': { Icon: SpecialCheck },
  financed: { Icon: Financed },
  'financed-color': { Icon: FinancedColor },
  'arrow-up': { Icon: ArrowUp },
  image: { Icon: Image },
  wallet: { Icon: Wallet },
  deposit: { Icon: Deposit },
  download: { Icon: Download },
  customer: { Icon: Customer },
  'customer-color': { Icon: CustomerColor },
  rocket: { Icon: Rocket },
  'rocket-color': { Icon: RocketColor },
  rotate: { Icon: Rotate },
  help: { Icon: Help },
  star: { Icon: Star },
  'notes-paper': { Icon: NotesPaper },
  office: { Icon: Office },
  indicator: { Icon: Indicator },
  'customers-color': { Icon: CustomersColor },
  customers: { Icon: Customers },
  cart: { Icon: Cart },
  paper: { Icon: Paper },
  'arrow-down': { Icon: ArrowUp, flip: true },
  alphabet: { Icon: Alphabet },
  'arrow-up-right': { Icon: ArrowUpRight },
  'eye-off': { Icon: EyeOff },
  pound: { Icon: Pound },
  settings: { Icon: Settings },
  'sort-ascending': { Icon: SortAscending },
  'sort-descending': { Icon: SortDescending },
  tag: { Icon: Tag },
  user: { Icon: User },
  logout: { Icon: Logout },
  'download-file': { Icon: DownloadFile },
  archive: { Icon: Archive },
  favourite: { Icon: Favourite },
  warning: { Icon: Warning },
  error: { Icon: Error },
  'shield-check': { Icon: ShieldCheck },
  calendar: { Icon: Calendar },
  'delete-file': { Icon: DeleteFile },
  bold: { Icon: Bold },
  italic: { Icon: Italic },
  'ordered-list': { Icon: OrderedList },
  'unordered-list': { Icon: UnorderedList },
};
