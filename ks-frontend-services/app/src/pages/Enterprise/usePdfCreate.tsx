import {
  Enterprise,
  services,
  useSubmit,
} from '@kanda-libs/ks-frontend-services';
import { useCallback } from 'react';

export default function useEnterprise() {
  const payload = [
    {
      branch_code: 'def456',
      contact_info: {
        trading_name: 'Howdens Kettering',
        contact_name: 'Rob Gallagher',
        contact_email: 'rgallagher892+qahowdens@gmail.com',
        contact_phone: '+447123456789',
      },
      enterprise_type: 'branch_office',
      subdomain: 'howdens',
    },
  ];

  const { submit } = useSubmit(services.enterprise.postEnterpriseBranches);

  const id = '7715b800-d5a7-459b-a2e4-932549a74bb0';

  const onSubmit = useCallback(
    () =>
      submit({
        body: payload as Enterprise[],
        params: {
          id,
        },
      }).then(({ data, error }) => {
        console.log({ data });
        console.log({ error });
      }),
    [payload],
  );

  return {
    onSubmit,
  };
}
