import { User } from 'firebase/auth';
interface CurrentUserHook {
    user?: User;
    isUserLoggedIn: boolean;
    isValidating: boolean;
    revalidate: () => Promise<void>;
    logout: (redirect?: boolean) => Promise<void>;
}
export default function useCurrentUser(): CurrentUserHook;
export {};
