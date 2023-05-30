import { type Reducer } from '@reduxjs/toolkit';
import type { StringIndexedObject } from '../types';
export declare function createStore<PageKeys extends string, T>(extraReducers?: StringIndexedObject<Reducer<T>>): import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    authUser: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").AuthUser>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    company: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Company>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    credit: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Credit>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    document: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Document>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    event: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Event>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoAuth: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoAuth>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoCompany: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoCompany>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoEntity: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoEntity>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoGhost: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoGhost>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoIP: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoIP>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoOnboarding: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoOnboarding>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoQuery: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoQuery>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    job: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Job>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    monitor: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Monitor>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    onboarding: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Onboarding>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    partner: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Partner>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    payment: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Payment>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    rate: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Rate>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    subscription: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Subscription>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    app: import("./slices/app").AppState<PageKeys>;
    auth: import("./slices/auth").AuthState;
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<{
    authUser: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").AuthUser>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    company: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Company>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    credit: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Credit>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    document: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Document>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    event: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Event>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoAuth: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoAuth>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoCompany: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoCompany>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoEntity: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoEntity>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoGhost: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoGhost>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoIP: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoIP>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoOnboarding: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoOnboarding>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    infoQuery: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").InfoQuery>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    job: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Job>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    monitor: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Monitor>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    onboarding: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Onboarding>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    partner: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Partner>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    payment: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Payment>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    rate: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Rate>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    subscription: {
        ids: import("@reduxjs/toolkit").EntityId[];
        entities: import("@reduxjs/toolkit").Dictionary<import("..").Subscription>;
        isSubmitting: boolean;
        fetchedList: boolean;
        isLoading: boolean;
    };
    app: import("./slices/app").AppState<PageKeys>;
    auth: import("./slices/auth").AuthState;
}, import("redux").AnyAction, undefined>]>>;
export declare function createSelectors<State, Pages>(): {
    getRoot: (state: State) => State;
    getApp: (state: State) => State["app"];
    getPathKey: (state: State) => import("./types").PathKey<Pages>;
    getIsLoading: (state: State) => boolean;
    authUser: import("./types").Selectors<import("..").AuthUser, StringIndexedObject<import("./types").GeneratedState<import("..").AuthUser>>>;
    company: import("./types").Selectors<import("..").Company, StringIndexedObject<import("./types").GeneratedState<import("..").Company>>>;
    credit: import("./types").Selectors<import("..").Credit, StringIndexedObject<import("./types").GeneratedState<import("..").Credit>>>;
    document: import("./types").Selectors<import("..").Document, StringIndexedObject<import("./types").GeneratedState<import("..").Document>>>;
    event: import("./types").Selectors<import("..").Event, StringIndexedObject<import("./types").GeneratedState<import("..").Event>>>;
    infoAuth: import("./types").Selectors<import("..").InfoAuth, StringIndexedObject<import("./types").GeneratedState<import("..").InfoAuth>>>;
    infoCompany: import("./types").Selectors<import("..").InfoCompany, StringIndexedObject<import("./types").GeneratedState<import("..").InfoCompany>>>;
    infoEntity: import("./types").Selectors<import("..").InfoEntity, StringIndexedObject<import("./types").GeneratedState<import("..").InfoEntity>>>;
    infoGhost: import("./types").Selectors<import("..").InfoGhost, StringIndexedObject<import("./types").GeneratedState<import("..").InfoGhost>>>;
    infoIP: import("./types").Selectors<import("..").InfoIP, StringIndexedObject<import("./types").GeneratedState<import("..").InfoIP>>>;
    infoOnboarding: import("./types").Selectors<import("..").InfoOnboarding, StringIndexedObject<import("./types").GeneratedState<import("..").InfoOnboarding>>>;
    infoQuery: import("./types").Selectors<import("..").InfoQuery, StringIndexedObject<import("./types").GeneratedState<import("..").InfoQuery>>>;
    job: import("./types").Selectors<import("..").Job, StringIndexedObject<import("./types").GeneratedState<import("..").Job>>>;
    monitor: import("./types").Selectors<import("..").Monitor, StringIndexedObject<import("./types").GeneratedState<import("..").Monitor>>>;
    onboarding: import("./types").Selectors<import("..").Onboarding, StringIndexedObject<import("./types").GeneratedState<import("..").Onboarding>>>;
    partner: import("./types").Selectors<import("..").Partner, StringIndexedObject<import("./types").GeneratedState<import("..").Partner>>>;
    payment: import("./types").Selectors<import("..").Payment, StringIndexedObject<import("./types").GeneratedState<import("..").Payment>>>;
    rate: import("./types").Selectors<import("..").Rate, StringIndexedObject<import("./types").GeneratedState<import("..").Rate>>>;
    subscription: import("./types").Selectors<import("..").Subscription, StringIndexedObject<import("./types").GeneratedState<import("..").Subscription>>>;
};
