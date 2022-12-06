import AuthUserMe from './AuthUserMe';
import JobGetJob from './JobGetJob';
import { LogOnMount } from '@kanda-libs/ks-design-library';

const Services = () => {
  return (
    <div className="flex flex-col w-full">
      <p className="text-xl mb-6">Services</p>
      <AuthUserMe />
      <JobGetJob />
      <LogOnMount
        eventType="page-view"
        eventProperties={{
          path: '/',
        }}
      />
    </div>
  );
};

export default Services;
