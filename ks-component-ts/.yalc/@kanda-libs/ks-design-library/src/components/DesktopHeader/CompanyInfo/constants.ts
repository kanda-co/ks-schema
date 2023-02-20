export const CLASS_NAMES = {
  container:
    'group hidden lg:flex lg:flex-col items-center mr-4 ml-4 relative z-10',
  content: 'flex flex-row items-center',
  defaultAvatar: 'w-10 h-10 flex justify-center items-center',
  loader: 'w-10 h-10 rounded-full bg-neutral-100',
  companyProfilePicture: 'w-10 h-10 rounded-full object-contain',
  infoContainer: 'flex flex-1 flex-col ml-4 justify-center',
  companyName: 'text-style-f-em text-neutral-900 ml-4',
  plan: 'text-style-g text-neutral-600',
  popover: 'hidden group-hover:block absolute top-0 mt-10 p-10 bg-red-200',
};

export const SKELETONS = {
  avatar: {
    width: 24,
    height: 24,
    className: 'leading-unset',
  },
  title: {
    width: 100,
  },
};
