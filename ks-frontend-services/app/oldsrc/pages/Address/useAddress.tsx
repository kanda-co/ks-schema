import { useForm } from '@kanda-libs/ks-component-ts';
import { StringIndexedObject } from '@kanda-libs/ks-design-library';

interface TestAddressForm {
  address: {
    postcode: string;
  };
}

export default function useEnterprise() {
  const form = useForm<TestAddressForm>({
    mode: 'onBlur',
  });

  const onSubmit = (data: StringIndexedObject<TestAddressForm>) => {
    console.log({ data });
  };
  return {
    form,
    onSubmit,
  };
}
