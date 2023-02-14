// This is silly, but so is safari. For some bizarre reason it allows
// the user to type a comma into a number input. This would be fine,
// but it then returns no value from the onChange event as it's not
// a valid number. So instead, we have to do this and basically just
// disallow the comma key from being typed into the input at all.
export const DISALLOWED_KEYS = [188];
