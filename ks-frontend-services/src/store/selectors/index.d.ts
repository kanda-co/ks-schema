import type { StringIndexedObject } from '../../types';
import type { GeneratedState } from '../types';
export * as app from './app';
import type { AuthUser, Company, Credit, Document, Event, InfoAuth, InfoCompany, InfoGhost, InfoIP, InfoQuery, Job, Monitor, Payment, Rate, Subscription } from '../../generated/components/schemas';
export declare const getSelectors: () => {
    authUser: import("../types").Selectors<AuthUser, StringIndexedObject<GeneratedState<AuthUser>>>;
    company: import("../types").Selectors<Company, StringIndexedObject<GeneratedState<Company>>>;
    credit: import("../types").Selectors<Credit, StringIndexedObject<GeneratedState<Credit>>>;
    document: import("../types").Selectors<Document, StringIndexedObject<GeneratedState<Document>>>;
    event: import("../types").Selectors<Event, StringIndexedObject<GeneratedState<Event>>>;
    infoAuth: import("../types").Selectors<InfoAuth, StringIndexedObject<GeneratedState<InfoAuth>>>;
    infoCompany: import("../types").Selectors<InfoCompany, StringIndexedObject<GeneratedState<InfoCompany>>>;
    infoGhost: import("../types").Selectors<InfoGhost, StringIndexedObject<GeneratedState<InfoGhost>>>;
    infoIP: import("../types").Selectors<InfoIP, StringIndexedObject<GeneratedState<InfoIP>>>;
    infoQuery: import("../types").Selectors<InfoQuery, StringIndexedObject<GeneratedState<InfoQuery>>>;
    job: import("../types").Selectors<Job, StringIndexedObject<GeneratedState<Job>>>;
    monitor: import("../types").Selectors<Monitor, StringIndexedObject<GeneratedState<Monitor>>>;
    payment: import("../types").Selectors<Payment, StringIndexedObject<GeneratedState<Payment>>>;
    rate: import("../types").Selectors<Rate, StringIndexedObject<GeneratedState<Rate>>>;
    subscription: import("../types").Selectors<Subscription, StringIndexedObject<GeneratedState<Subscription>>>;
};