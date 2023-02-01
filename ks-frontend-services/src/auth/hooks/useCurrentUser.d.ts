import { User } from 'firebase/auth';
import type { AuthUser } from '../../generated/components/schemas';
interface CurrentUserHook {
    user?: User;
    isUserLoggedIn: boolean;
    isValidating: boolean;
    revalidate: () => Promise<void>;
    logout: (redirect?: boolean) => Promise<void>;
    userDetails: AuthUser | null;
}
export default function useCurrentUser(fetchUserDetails?: boolean): CurrentUserHook;
export {};
