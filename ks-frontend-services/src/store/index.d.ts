export declare const store: import('@reduxjs/toolkit/dist/configureStore').ToolkitStore<
  {
    authUser: import('./slices/generated/authUser').AuthUserState;
    company: import('./slices/generated/company').CompanyState;
    credit: import('./slices/generated/credit').CreditState;
    document: import('./slices/generated/document').DocumentState;
    event: import('./slices/generated/event').EventState;
    infoAuth: import('./slices/generated/infoAuth').InfoAuthState;
    infoCompany: import('./slices/generated/infoCompany').InfoCompanyState;
    infoGhost: import('./slices/generated/infoGhost').InfoGhostState;
    infoIP: import('./slices/generated/infoIP').InfoIPState;
    infoQuery: import('./slices/generated/infoQuery').InfoQueryState;
    job: import('./slices/generated/job').JobState;
    monitor: import('./slices/generated/monitor').MonitorState;
    payment: import('./slices/generated/payment').PaymentState;
    rate: import('./slices/generated/rate').RateState;
    subscription: import('./slices/generated/subscription').SubscriptionState;
    app: unknown;
  },
  import('redux').AnyAction,
  import('@reduxjs/toolkit').MiddlewareArray<
    [
      import('@reduxjs/toolkit').ThunkMiddleware<
        {
          authUser: import('./slices/generated/authUser').AuthUserState;
          company: import('./slices/generated/company').CompanyState;
          credit: import('./slices/generated/credit').CreditState;
          document: import('./slices/generated/document').DocumentState;
          event: import('./slices/generated/event').EventState;
          infoAuth: import('./slices/generated/infoAuth').InfoAuthState;
          infoCompany: import('./slices/generated/infoCompany').InfoCompanyState;
          infoGhost: import('./slices/generated/infoGhost').InfoGhostState;
          infoIP: import('./slices/generated/infoIP').InfoIPState;
          infoQuery: import('./slices/generated/infoQuery').InfoQueryState;
          job: import('./slices/generated/job').JobState;
          monitor: import('./slices/generated/monitor').MonitorState;
          payment: import('./slices/generated/payment').PaymentState;
          rate: import('./slices/generated/rate').RateState;
          subscription: import('./slices/generated/subscription').SubscriptionState;
          app: unknown;
        },
        import('redux').AnyAction,
        undefined
      >,
    ]
  >
>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
