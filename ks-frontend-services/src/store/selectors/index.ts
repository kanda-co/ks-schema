import { generateSelectors } from '../helpers';
import type { StringIndexedObject } from '../../types';
import type { GeneratedState } from '../types';
export * as app from './app';
import type {
  AuthUser,
  Company,
  Credit,
  Document,
  Event,
  InfoAuth,
  InfoCompany,
  InfoEntity,
  InfoGhost,
  InfoIP,
  InfoQuery,
  Job,
  Monitor,
  Payment,
  Rate,
  Subscription,
} from '../../generated/components/schemas';

export const getSelectors = () => {
  const authUser = generateSelectors<
    AuthUser,
    StringIndexedObject<GeneratedState<AuthUser>>
  >('authUser');
  const company = generateSelectors<
    Company,
    StringIndexedObject<GeneratedState<Company>>
  >('company');
  const credit = generateSelectors<
    Credit,
    StringIndexedObject<GeneratedState<Credit>>
  >('credit');
  const document = generateSelectors<
    Document,
    StringIndexedObject<GeneratedState<Document>>
  >('document');
  const event = generateSelectors<
    Event,
    StringIndexedObject<GeneratedState<Event>>
  >('event');
  const infoAuth = generateSelectors<
    InfoAuth,
    StringIndexedObject<GeneratedState<InfoAuth>>
  >('infoAuth');
  const infoCompany = generateSelectors<
    InfoCompany,
    StringIndexedObject<GeneratedState<InfoCompany>>
  >('infoCompany');
  const infoEntity = generateSelectors<
    InfoEntity,
    StringIndexedObject<GeneratedState<InfoEntity>>
  >('infoEntity');
  const infoGhost = generateSelectors<
    InfoGhost,
    StringIndexedObject<GeneratedState<InfoGhost>>
  >('infoGhost');
  const infoIP = generateSelectors<
    InfoIP,
    StringIndexedObject<GeneratedState<InfoIP>>
  >('infoIP');
  const infoQuery = generateSelectors<
    InfoQuery,
    StringIndexedObject<GeneratedState<InfoQuery>>
  >('infoQuery');
  const job = generateSelectors<Job, StringIndexedObject<GeneratedState<Job>>>(
    'job',
  );
  const monitor = generateSelectors<
    Monitor,
    StringIndexedObject<GeneratedState<Monitor>>
  >('monitor');
  const payment = generateSelectors<
    Payment,
    StringIndexedObject<GeneratedState<Payment>>
  >('payment');
  const rate = generateSelectors<
    Rate,
    StringIndexedObject<GeneratedState<Rate>>
  >('rate');
  const subscription = generateSelectors<
    Subscription,
    StringIndexedObject<GeneratedState<Subscription>>
  >('subscription');

  return {
    authUser,
    company,
    credit,
    document,
    event,
    infoAuth,
    infoCompany,
    infoEntity,
    infoGhost,
    infoIP,
    infoQuery,
    job,
    monitor,
    payment,
    rate,
    subscription,
  };
};
