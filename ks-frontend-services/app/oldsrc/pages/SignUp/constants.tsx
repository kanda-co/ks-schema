export const FORM_PROPS = {
  firstName: {
    name: 'firstName',
    label: 'First Name',
    validation: {
      required: {
        value: true,
        message: 'First name is required',
      },
    },
  },
  lastName: {
    name: 'lastName',
    label: 'Last Name',
    validation: {
      required: {
        value: true,
        message: 'Last name is required',
      },
    },
  },
  phone: {
    name: 'phoneNumber',
    label: 'Phone Number',
    validation: {
      required: {
        value: true,
        message: 'Phone number is required',
      },
      pattern: {
        value: /^(0)?[1,2,3,7,8][0-9]{9}$/,
        message: 'Phone number must be a valid UK phone number',
      },
    },
  },
  email: {
    name: 'emailAddress',
    label: 'Email Address',
    validation: {
      required: {
        value: true,
        message: 'Email address is required',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email must be a valid email address',
      },
    },
  },
};
