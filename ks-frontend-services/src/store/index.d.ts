export declare function createStore<PageKeys extends string>(): import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
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
