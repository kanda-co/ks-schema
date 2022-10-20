import FirebaseAuthService from '../../FirebaseAuthService';

const SIGN_IN_TYPE_EMAIL = 'email';
const SIGN_IN_TYPE_GOOGLE = 'google';
const SIGN_IN_TYPE_GOOGLE_POPUP = 'googlePopup';
const SIGN_IN_TYPE_FACEBOOK = 'facebook';

export const SIGN_IN_METHODS = {
  [SIGN_IN_TYPE_EMAIL]:
    FirebaseAuthService.signInWithEmailAndPassword.bind(FirebaseAuthService),
  [SIGN_IN_TYPE_GOOGLE]:
    FirebaseAuthService.signInWithGoogle.bind(FirebaseAuthService),
  [SIGN_IN_TYPE_GOOGLE_POPUP]:
    FirebaseAuthService.signInWithGooglePopup.bind(FirebaseAuthService),
  [SIGN_IN_TYPE_FACEBOOK]:
    FirebaseAuthService.signInWithFacebook.bind(FirebaseAuthService),
};
