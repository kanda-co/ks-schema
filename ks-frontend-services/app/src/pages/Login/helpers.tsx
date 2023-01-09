interface FirebaseError {
  code: string;
  message: string;
}

export const getError = (error: FirebaseError) => {
  const { code } = error;
  // User not found error
  if (code === 'auth/user-not-found')
    return 'User is not signed up with this email';
  // User provided wrong password error
  if (code === 'auth/wrong-password')
    return 'Invalid user credentials provided';
  // Unknown error
  if (code === 'auth/popup-blocked')
    return 'Login popup blocked - allow popups or click button again';
  return 'An error has occurred';
};
