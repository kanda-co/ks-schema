import { User } from 'firebase/auth';
import type { UserType } from 'generated/components/schemas';
interface CurrentUserHook {
    user?: User;
    isUserLoggedIn: boolean;
    isValidating: boolean;
    revalidate: () => Promise<void>;
    logout: (redirect?: boolean) => Promise<void>;
    userDetails: UserType | null;
}
export default function useCurrentUser(fetchUserDetails?: boolean): CurrentUserHook;
export {};
