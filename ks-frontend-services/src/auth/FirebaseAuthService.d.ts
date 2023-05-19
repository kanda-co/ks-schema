import { Auth, User, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import './config';
import { StringIndexedObject } from '../types';
interface AugmentedCurrentUser extends User {
    accessToken?: string;
}
interface AugmentedAuth extends Auth {
    currentUser: AugmentedCurrentUser | null;
}
declare class FirebaseAuthService {
    auth: AugmentedAuth;
    providers: {
        google: GoogleAuthProvider;
        facebook: FacebookAuthProvider;
    };
    constructor();
    /**
     * Listens for a change in the auth state from firebase and returns either
     * the currently logged in user or an error
     */
    onAuthStateChangedPromise: () => Promise<User>;
    /**
     * Returns the currently logged in user
     */
    user: () => Promise<User>;
    isUserLoggedIn: () => Promise<boolean>;
    /**
     * Returns the currently logged in user's access token
     */
    token: () => Promise<string>;
    refreshToken: (token: string, forceRefresh?: boolean) => Promise<void>;
    /**
     * Sets the firebase persistence to browser local storage
     */
    setPersistence: () => Promise<void>;
    /**
     * Allows the user to login with an email and password
     */
    signInWithEmailAndPassword: ({ email, password }: StringIndexedObject<string>, redirect?: boolean) => Promise<void>;
    /**
     * Allows the user to login with a Google account
     */
    signInWithGoogle: () => Promise<void>;
    /**
     * Allows the user to login with a Google account using the popup flow
     */
    signInWithGooglePopup: () => Promise<void>;
    /**
     * Allows the user to login with a Facebook account
     */
    signInWithFacebook: () => Promise<void>;
    signInWithCustomToken: (token: string, redirect?: boolean) => Promise<void>;
    /**
     * Apply action code
     */
    applyActionCode: (code: string) => Promise<void>;
    /**
     * Reset the password
     */
    resetPassword: (code: string, newPassword: string) => Promise<void>;
    /**
     * Verify the reset password code
     */
    verifyResetCode: (code: string) => Promise<string>;
    /**
     * Parse action code
     */
    parseActionCode: (url: string) => Promise<import("@firebase/auth").ActionCodeURL>;
    /**
     * Sign in with email link
     */
    signInWithEmailLink: (email: string, url: string) => Promise<import("@firebase/auth").UserCredential>;
    /**
     * Update user's password
     */
    updatePassword: (newPassword: string) => Promise<void>;
    /**
     * Update user's email
     */
    updateEmail: (newEmail: string) => Promise<void>;
    /**
     * Reauthenticate a user
     */
    reauthenticate: (password: string) => Promise<import("@firebase/auth").UserCredential>;
    /**
     * Reauthenticate a user
     */
    sendEmailVerification: () => Promise<void>;
    /**
     * Log a user out
     */
    logout: (redirect?: boolean) => Promise<void>;
}
declare const _default: FirebaseAuthService;
export default _default;
