// import { services } from '@kanda-libs/ks-frontend-services';
import AuthUserMe from './AuthUserMe';
import JobGetJob from './JobGetJob';

const Services = () => {
  return (
    <div className="flex flex-col w-full">
      <p className="text-xl mb-6">Services</p>
      <AuthUserMe />
      <JobGetJob />
    </div>
  );
};

export default Services;
