import * as externalServices from './external';
declare const adhoc: {
    actionAdhoc: {
        key: string;
        method: import("../generated/operations/actionAdhoc").ActionAdhocRequestFunction;
    };
};
declare const authUser: {
    me: {
        key: string;
        method: import("../generated/operations/me").MeRequestFunction;
    };
    postMe: {
        key: string;
        method: import("../generated/operations/postMe").PostMeRequestFunction;
    };
    putMe: {
        key: string;
        method: import("../generated/operations/putMe").PutMeRequestFunction;
    };
};
declare const company: {
    getCompanies: {
        key: string;
        method: import("../generated/operations/getCompanies").GetCompaniesRequestFunction;
    };
    postCompany: {
        key: string;
        method: import("../generated/operations/postCompany").PostCompanyRequestFunction;
    };
    getCompany: {
        key: string;
        method: import("../generated/operations/getCompany").GetCompanyRequestFunction;
    };
    putCompany: {
        key: string;
        method: import("../generated/operations/putCompany").PutCompanyRequestFunction;
    };
    deleteCompany: {
        key: string;
        method: import("../generated/operations/deleteCompany").DeleteCompanyRequestFunction;
    };
    postCompanyBilling: {
        key: string;
        method: import("../generated/operations/postCompanyBilling").PostCompanyBillingRequestFunction;
    };
    postCompanyBillingSuccess: {
        key: string;
        method: import("../generated/operations/postCompanyBillingSuccess").PostCompanyBillingSuccessRequestFunction;
    };
    getCompanyDirectorVerification: {
        key: string;
        method: import("../generated/operations/getCompanyDirectorVerification").GetCompanyDirectorVerificationRequestFunction;
    };
    postCompanyDirectorVerification: {
        key: string;
        method: import("../generated/operations/postCompanyDirectorVerification").PostCompanyDirectorVerificationRequestFunction;
    };
    directorCompany: {
        key: string;
        method: import("../generated/operations/directorCompany").DirectorCompanyRequestFunction;
    };
    postCompanyReferrals: {
        key: string;
        method: import("../generated/operations/postCompanyReferrals").PostCompanyReferralsRequestFunction;
    };
    approveCompany: {
        key: string;
        method: import("../generated/operations/approveCompany").ApproveCompanyRequestFunction;
    };
    declineCompany: {
        key: string;
        method: import("../generated/operations/declineCompany").DeclineCompanyRequestFunction;
    };
    exportFcaApproved: {
        key: string;
        method: import("../generated/operations/exportFcaApproved").ExportFcaApprovedRequestFunction;
    };
};
declare const credit: {
    infoCredit: {
        key: string;
        method: import("../generated/operations/infoCredit").InfoCreditRequestFunction;
    };
    getCredits: {
        key: string;
        method: import("../generated/operations/getCredits").GetCreditsRequestFunction;
    };
    postCredit: {
        key: string;
        method: import("../generated/operations/postCredit").PostCreditRequestFunction;
    };
    getCredit: {
        key: string;
        method: import("../generated/operations/getCredit").GetCreditRequestFunction;
    };
    putCredit: {
        key: string;
        method: import("../generated/operations/putCredit").PutCreditRequestFunction;
    };
    deleteCredit: {
        key: string;
        method: import("../generated/operations/deleteCredit").DeleteCreditRequestFunction;
    };
    quoteCredit: {
        key: string;
        method: import("../generated/operations/quoteCredit").QuoteCreditRequestFunction;
    };
    applyCredit: {
        key: string;
        method: import("../generated/operations/applyCredit").ApplyCreditRequestFunction;
    };
    checkCredit: {
        key: string;
        method: import("../generated/operations/checkCredit").CheckCreditRequestFunction;
    };
    signCredit: {
        key: string;
        method: import("../generated/operations/signCredit").SignCreditRequestFunction;
    };
    migrateCredit: {
        key: string;
        method: import("../generated/operations/migrateCredit").MigrateCreditRequestFunction;
    };
    consentMigrateCredit: {
        key: string;
        method: import("../generated/operations/consentMigrateCredit").ConsentMigrateCreditRequestFunction;
    };
};
declare const document: {
    getDocuments: {
        key: string;
        method: import("../generated/operations/getDocuments").GetDocumentsRequestFunction;
    };
    postDocument: {
        key: string;
        method: import("../generated/operations/postDocument").PostDocumentRequestFunction;
    };
    getDocument: {
        key: string;
        method: import("../generated/operations/getDocument").GetDocumentRequestFunction;
    };
    putDocument: {
        key: string;
        method: import("../generated/operations/putDocument").PutDocumentRequestFunction;
    };
    deleteDocument: {
        key: string;
        method: import("../generated/operations/deleteDocument").DeleteDocumentRequestFunction;
    };
};
declare const enterprise: {
    getEnterprises: {
        key: string;
        method: import("../generated/operations/getEnterprises").GetEnterprisesRequestFunction;
    };
    postEnterprise: {
        key: string;
        method: import("../generated/operations/postEnterprise").PostEnterpriseRequestFunction;
    };
    getEnterprise: {
        key: string;
        method: import("../generated/operations/getEnterprise").GetEnterpriseRequestFunction;
    };
    putEnterprise: {
        key: string;
        method: import("../generated/operations/putEnterprise").PutEnterpriseRequestFunction;
    };
    deleteEnterprise: {
        key: string;
        method: import("../generated/operations/deleteEnterprise").DeleteEnterpriseRequestFunction;
    };
    getEnterpriseBranches: {
        key: string;
        method: import("../generated/operations/getEnterpriseBranches").GetEnterpriseBranchesRequestFunction;
    };
    postEnterpriseBranches: {
        key: string;
        method: import("../generated/operations/postEnterpriseBranches").PostEnterpriseBranchesRequestFunction;
    };
};
declare const event: {
    postEvent: {
        key: string;
        method: import("../generated/operations/postEvent").PostEventRequestFunction;
    };
};
declare const infoAuth: {
    infoAuth: {
        key: string;
        method: import("../generated/operations/infoAuth").InfoAuthRequestFunction;
    };
    infoVerify: {
        key: string;
        method: import("../generated/operations/infoVerify").InfoVerifyRequestFunction;
    };
    infoPassword: {
        key: string;
        method: import("../generated/operations/infoPassword").InfoPasswordRequestFunction;
    };
    infoSession: {
        key: string;
        method: import("../generated/operations/infoSession").InfoSessionRequestFunction;
    };
    infoClaimAccount: {
        key: string;
        method: import("../generated/operations/infoClaimAccount").InfoClaimAccountRequestFunction;
    };
};
declare const infoCache: {
    infoGetCache: {
        key: string;
        method: import("../generated/operations/infoGetCache").InfoGetCacheRequestFunction;
    };
    infoPutCache: {
        key: string;
        method: import("../generated/operations/infoPutCache").InfoPutCacheRequestFunction;
    };
    infoDeleteCache: {
        key: string;
        method: import("../generated/operations/infoDeleteCache").InfoDeleteCacheRequestFunction;
    };
};
declare const infoCompany: {
    infoCompany: {
        key: string;
        method: import("../generated/operations/infoCompany").InfoCompanyRequestFunction;
    };
};
declare const infoCustomer: {
    infoCustomer: {
        key: string;
        method: import("../generated/operations/infoCustomer").InfoCustomerRequestFunction;
    };
};
declare const infoDirector: {
    infoDirector: {
        key: string;
        method: import("../generated/operations/infoDirector").InfoDirectorRequestFunction;
    };
};
declare const infoEnterpriseRole: {
    infoEnterpriseRole: {
        key: string;
        method: import("../generated/operations/infoEnterpriseRole").InfoEnterpriseRoleRequestFunction;
    };
};
declare const infoEnterprise: {
    infoEnterprise: {
        key: string;
        method: import("../generated/operations/infoEnterprise").InfoEnterpriseRequestFunction;
    };
};
declare const infoEntity: {
    getInfoEntity: {
        key: string;
        method: import("../generated/operations/getInfoEntity").GetInfoEntityRequestFunction;
    };
};
declare const infoGhost: {
    infoGhost: {
        key: string;
        method: import("../generated/operations/infoGhost").InfoGhostRequestFunction;
    };
};
declare const infoHealth: {
    infoHealth: {
        key: string;
        method: import("../generated/operations/infoHealth").InfoHealthRequestFunction;
    };
};
declare const infoIP: {
    infoIP: {
        key: string;
        method: import("../generated/operations/infoIP").InfoIPRequestFunction;
    };
};
declare const infoLead: {
    infoLead: {
        key: string;
        method: import("../generated/operations/infoLead").InfoLeadRequestFunction;
    };
};
declare const infoOnboarding: {
    infoOnboarding: {
        key: string;
        method: import("../generated/operations/infoOnboarding").InfoOnboardingRequestFunction;
    };
};
declare const infoPartner: {
    infoPartnerBranding: {
        key: string;
        method: import("../generated/operations/infoPartnerBranding").InfoPartnerBrandingRequestFunction;
    };
};
declare const infoQuery: {
    infoQuery: {
        key: string;
        method: import("../generated/operations/infoQuery").InfoQueryRequestFunction;
    };
};
declare const infoRedirect: {
    infoLegacyRedirect: {
        key: string;
        method: import("../generated/operations/infoLegacyRedirect").InfoLegacyRedirectRequestFunction;
    };
    infoCheckoutRedirect: {
        key: string;
        method: import("../generated/operations/infoCheckoutRedirect").InfoCheckoutRedirectRequestFunction;
    };
};
declare const infoSearch: {
    infoSearch: {
        key: string;
        method: import("../generated/operations/infoSearch").InfoSearchRequestFunction;
    };
};
declare const infoStats: {
    infoStats: {
        key: string;
        method: import("../generated/operations/infoStats").InfoStatsRequestFunction;
    };
};
declare const infoValidation: {
    infoValidateEmail: {
        key: string;
        method: import("../generated/operations/infoValidateEmail").InfoValidateEmailRequestFunction;
    };
};
declare const job: {
    infoExampleJob: {
        key: string;
        method: import("../generated/operations/infoExampleJob").InfoExampleJobRequestFunction;
    };
    getJobs: {
        key: string;
        method: import("../generated/operations/getJobs").GetJobsRequestFunction;
    };
    postJob: {
        key: string;
        method: import("../generated/operations/postJob").PostJobRequestFunction;
    };
    getJob: {
        key: string;
        method: import("../generated/operations/getJob").GetJobRequestFunction;
    };
    putJob: {
        key: string;
        method: import("../generated/operations/putJob").PutJobRequestFunction;
    };
    deleteJob: {
        key: string;
        method: import("../generated/operations/deleteJob").DeleteJobRequestFunction;
    };
    sendJob: {
        key: string;
        method: import("../generated/operations/sendJob").SendJobRequestFunction;
    };
    resendJob: {
        key: string;
        method: import("../generated/operations/resendJob").ResendJobRequestFunction;
    };
    checkJob: {
        key: string;
        method: import("../generated/operations/checkJob").CheckJobRequestFunction;
    };
    completeJob: {
        key: string;
        method: import("../generated/operations/completeJob").CompleteJobRequestFunction;
    };
    archiveJob: {
        key: string;
        method: import("../generated/operations/archiveJob").ArchiveJobRequestFunction;
    };
    unarchiveJob: {
        key: string;
        method: import("../generated/operations/unarchiveJob").UnarchiveJobRequestFunction;
    };
    quoteJob: {
        key: string;
        method: import("../generated/operations/quoteJob").QuoteJobRequestFunction;
    };
    applyJob: {
        key: string;
        method: import("../generated/operations/applyJob").ApplyJobRequestFunction;
    };
    reapplyJob: {
        key: string;
        method: import("../generated/operations/reapplyJob").ReapplyJobRequestFunction;
    };
    payJob: {
        key: string;
        method: import("../generated/operations/payJob").PayJobRequestFunction;
    };
    viewJobSatNote: {
        key: string;
        method: import("../generated/operations/viewJobSatNote").ViewJobSatNoteRequestFunction;
    };
    signJobSatNote: {
        key: string;
        method: import("../generated/operations/signJobSatNote").SignJobSatNoteRequestFunction;
    };
    approveJobSatNote: {
        key: string;
        method: import("../generated/operations/approveJobSatNote").ApproveJobSatNoteRequestFunction;
    };
    lenderReviewJobSatNote: {
        key: string;
        method: import("../generated/operations/lenderReviewJobSatNote").LenderReviewJobSatNoteRequestFunction;
    };
    delayJobSatNote: {
        key: string;
        method: import("../generated/operations/delayJobSatNote").DelayJobSatNoteRequestFunction;
    };
    payoutJob: {
        key: string;
        method: import("../generated/operations/payoutJob").PayoutJobRequestFunction;
    };
    payoutsJob: {
        key: string;
        method: import("../generated/operations/payoutsJob").PayoutsJobRequestFunction;
    };
    overrideJob: {
        key: string;
        method: import("../generated/operations/overrideJob").OverrideJobRequestFunction;
    };
    jobCheckoutLink: {
        key: string;
        method: import("../generated/operations/jobCheckoutLink").JobCheckoutLinkRequestFunction;
    };
    jobCompanyInfo: {
        key: string;
        method: import("../generated/operations/jobCompanyInfo").JobCompanyInfoRequestFunction;
    };
    exportJobPayouts: {
        key: string;
        method: import("../generated/operations/exportJobPayouts").ExportJobPayoutsRequestFunction;
    };
};
declare const lead: {
    getLeads: {
        key: string;
        method: import("../generated/operations/getLeads").GetLeadsRequestFunction;
    };
    postLead: {
        key: string;
        method: import("../generated/operations/postLead").PostLeadRequestFunction;
    };
    getLead: {
        key: string;
        method: import("../generated/operations/getLead").GetLeadRequestFunction;
    };
    putLead: {
        key: string;
        method: import("../generated/operations/putLead").PutLeadRequestFunction;
    };
    deleteLead: {
        key: string;
        method: import("../generated/operations/deleteLead").DeleteLeadRequestFunction;
    };
    applyInviteLead: {
        key: string;
        method: import("../generated/operations/applyInviteLead").ApplyInviteLeadRequestFunction;
    };
    budgetLead: {
        key: string;
        method: import("../generated/operations/budgetLead").BudgetLeadRequestFunction;
    };
    quoteLead: {
        key: string;
        method: import("../generated/operations/quoteLead").QuoteLeadRequestFunction;
    };
    sendLeadJob: {
        key: string;
        method: import("../generated/operations/sendLeadJob").SendLeadJobRequestFunction;
    };
    tradeLead: {
        key: string;
        method: import("../generated/operations/tradeLead").TradeLeadRequestFunction;
    };
    tradeQuoteApprovalLead: {
        key: string;
        method: import("../generated/operations/tradeQuoteApprovalLead").TradeQuoteApprovalLeadRequestFunction;
    };
    matchTradesLead: {
        key: string;
        method: import("../generated/operations/matchTradesLead").MatchTradesLeadRequestFunction;
    };
    connectTradesLead: {
        key: string;
        method: import("../generated/operations/connectTradesLead").ConnectTradesLeadRequestFunction;
    };
    acceptedJobSummaryLead: {
        key: string;
        method: import("../generated/operations/acceptedJobSummaryLead").AcceptedJobSummaryLeadRequestFunction;
    };
    referLead: {
        key: string;
        method: import("../generated/operations/referLead").ReferLeadRequestFunction;
    };
};
declare const monitor: {
    getMonitors: {
        key: string;
        method: import("../generated/operations/getMonitors").GetMonitorsRequestFunction;
    };
    postMonitor: {
        key: string;
        method: import("../generated/operations/postMonitor").PostMonitorRequestFunction;
    };
    getMonitor: {
        key: string;
        method: import("../generated/operations/getMonitor").GetMonitorRequestFunction;
    };
    putMonitor: {
        key: string;
        method: import("../generated/operations/putMonitor").PutMonitorRequestFunction;
    };
    deleteMonitor: {
        key: string;
        method: import("../generated/operations/deleteMonitor").DeleteMonitorRequestFunction;
    };
    postMonitorFlag: {
        key: string;
        method: import("../generated/operations/postMonitorFlag").PostMonitorFlagRequestFunction;
    };
};
declare const onboarding: {
    getOnboardings: {
        key: string;
        method: import("../generated/operations/getOnboardings").GetOnboardingsRequestFunction;
    };
    postOnboarding: {
        key: string;
        method: import("../generated/operations/postOnboarding").PostOnboardingRequestFunction;
    };
    getOnboarding: {
        key: string;
        method: import("../generated/operations/getOnboarding").GetOnboardingRequestFunction;
    };
    putOnboarding: {
        key: string;
        method: import("../generated/operations/putOnboarding").PutOnboardingRequestFunction;
    };
    deleteOnboarding: {
        key: string;
        method: import("../generated/operations/deleteOnboarding").DeleteOnboardingRequestFunction;
    };
    postOnboardingDecision: {
        key: string;
        method: import("../generated/operations/postOnboardingDecision").PostOnboardingDecisionRequestFunction;
    };
};
declare const partner: {
    getPartners: {
        key: string;
        method: import("../generated/operations/getPartners").GetPartnersRequestFunction;
    };
    postPartner: {
        key: string;
        method: import("../generated/operations/postPartner").PostPartnerRequestFunction;
    };
    getPartner: {
        key: string;
        method: import("../generated/operations/getPartner").GetPartnerRequestFunction;
    };
    putPartner: {
        key: string;
        method: import("../generated/operations/putPartner").PutPartnerRequestFunction;
    };
    deletePartner: {
        key: string;
        method: import("../generated/operations/deletePartner").DeletePartnerRequestFunction;
    };
    postPartnerReferrals: {
        key: string;
        method: import("../generated/operations/postPartnerReferrals").PostPartnerReferralsRequestFunction;
    };
};
declare const payment: {
    getPayments: {
        key: string;
        method: import("../generated/operations/getPayments").GetPaymentsRequestFunction;
    };
    postPayment: {
        key: string;
        method: import("../generated/operations/postPayment").PostPaymentRequestFunction;
    };
    getPayment: {
        key: string;
        method: import("../generated/operations/getPayment").GetPaymentRequestFunction;
    };
    putPayment: {
        key: string;
        method: import("../generated/operations/putPayment").PutPaymentRequestFunction;
    };
    deletePayment: {
        key: string;
        method: import("../generated/operations/deletePayment").DeletePaymentRequestFunction;
    };
    markPayment: {
        key: string;
        method: import("../generated/operations/markPayment").MarkPaymentRequestFunction;
    };
};
declare const rate: {
    infoRate: {
        key: string;
        method: import("../generated/operations/infoRate").InfoRateRequestFunction;
    };
    getRates: {
        key: string;
        method: import("../generated/operations/getRates").GetRatesRequestFunction;
    };
    postRate: {
        key: string;
        method: import("../generated/operations/postRate").PostRateRequestFunction;
    };
    getRate: {
        key: string;
        method: import("../generated/operations/getRate").GetRateRequestFunction;
    };
    putRate: {
        key: string;
        method: import("../generated/operations/putRate").PutRateRequestFunction;
    };
    deleteRate: {
        key: string;
        method: import("../generated/operations/deleteRate").DeleteRateRequestFunction;
    };
};
declare const subscription: {
    getSubscriptions: {
        key: string;
        method: import("../generated/operations/getSubscriptions").GetSubscriptionsRequestFunction;
    };
    postSubscription: {
        key: string;
        method: import("../generated/operations/postSubscription").PostSubscriptionRequestFunction;
    };
    getSubscription: {
        key: string;
        method: import("../generated/operations/getSubscription").GetSubscriptionRequestFunction;
    };
    putSubscription: {
        key: string;
        method: import("../generated/operations/putSubscription").PutSubscriptionRequestFunction;
    };
    deleteSubscription: {
        key: string;
        method: import("../generated/operations/deleteSubscription").DeleteSubscriptionRequestFunction;
    };
    pendingSubscription: {
        key: string;
        method: import("../generated/operations/pendingSubscription").PendingSubscriptionRequestFunction;
    };
};
declare const task: {
    runner: {
        key: string;
        method: import("../generated/operations/runner").RunnerRequestFunction;
    };
};
declare const tradeSummary: {
    infoTradeSummary: {
        key: string;
        method: import("../generated/operations/infoTradeSummary").InfoTradeSummaryRequestFunction;
    };
};
declare const training: {
    getTrainings: {
        key: string;
        method: import("../generated/operations/getTrainings").GetTrainingsRequestFunction;
    };
    postTraining: {
        key: string;
        method: import("../generated/operations/postTraining").PostTrainingRequestFunction;
    };
    getTraining: {
        key: string;
        method: import("../generated/operations/getTraining").GetTrainingRequestFunction;
    };
    putTraining: {
        key: string;
        method: import("../generated/operations/putTraining").PutTrainingRequestFunction;
    };
    deleteTraining: {
        key: string;
        method: import("../generated/operations/deleteTraining").DeleteTrainingRequestFunction;
    };
};
declare const webhook: {
    providerCheckWebhook: {
        key: string;
        method: import("../generated/operations/providerCheckWebhook").ProviderCheckWebhookRequestFunction;
    };
    providerWebhook: {
        key: string;
        method: import("../generated/operations/providerWebhook").ProviderWebhookRequestFunction;
    };
};
declare const address: {
    find: {
        key: string;
        method: (request: import("./external/address").FindRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
            body: import("./external/address").FindResponse;
        }, import("./external/address").FindResponse>;
    };
};
declare const contract: {
    generate: {
        key: string;
        method: ({ body, }: import("./external/contract").ContractGenerateRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
            body: import("./external/contract").ContractResponse;
        }, import("./external/contract").ContractResponse>;
    };
};
declare const payouts: {
    payouts: {
        key: string;
        method: () => import("@openapi-io-ts/runtime").RequestFunction<{
            body: externalServices.PayoutsResponse;
        }, externalServices.PayoutsResponse>;
    };
};
declare const pdf: {
    compress: {
        key: string;
        method: ({ body: { content, mimetype }, }: import("./external/pdf").CompressRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
            body: import("./external/pdf").FindResponse;
        }, import("./external/pdf").FindResponse>;
    };
    create: {
        key: string;
        method: ({ body: { job, company }, }: import("./external/pdf").CreateRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
            body: import("./external/pdf").FindResponse;
        }, import("./external/pdf").FindResponse>;
    };
    satnote: {
        key: string;
        method: ({ body: { job, credit, satNote, acceptedTerms }, }: import("./external/pdf").SatNoteRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
            body: import("./external/pdf").FindResponse;
        }, import("./external/pdf").FindResponse>;
    };
};
declare const personalGuarantee: {
    generate: {
        key: string;
        method: ({ body, }: import("./external/personalGuarantee").PersonalGuaranteeGenerateRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
            body: externalServices.PersonalGuaranteeResponse;
        }, externalServices.PersonalGuaranteeResponse>;
    };
};
declare const sheets: {
    read: {
        key: string;
        method: ({ params, }: import("./external/sheets").ReadRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
            body: import("./external/sheets").ReadResponse;
        }, import("./external/sheets").ReadResponse>;
    };
};
declare const subsSheet: {
    write: {
        key: string;
        method: ({ body, }: import("./external/subsSheet").WriteRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
            body: import("./external/subsSheet").SubSheetResponse;
        }, import("./external/subsSheet").SubSheetResponse>;
    };
    update: {
        key: string;
        method: ({ body, }: import("./external/subsSheet").UpdateRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
            body: import("./external/subsSheet").SubSheetResponse;
        }, import("./external/subsSheet").SubSheetResponse>;
    };
};
/**
 * A list of all possible services the frontend can use.
 */
declare const services: {
    adhoc: {
        actionAdhoc: {
            key: string;
            method: import("../generated/operations/actionAdhoc").ActionAdhocRequestFunction;
        };
    };
    authUser: {
        me: {
            key: string;
            method: import("../generated/operations/me").MeRequestFunction;
        };
        postMe: {
            key: string;
            method: import("../generated/operations/postMe").PostMeRequestFunction;
        };
        putMe: {
            key: string;
            method: import("../generated/operations/putMe").PutMeRequestFunction;
        };
    };
    company: {
        getCompanies: {
            key: string;
            method: import("../generated/operations/getCompanies").GetCompaniesRequestFunction;
        };
        postCompany: {
            key: string;
            method: import("../generated/operations/postCompany").PostCompanyRequestFunction;
        };
        getCompany: {
            key: string;
            method: import("../generated/operations/getCompany").GetCompanyRequestFunction;
        };
        putCompany: {
            key: string;
            method: import("../generated/operations/putCompany").PutCompanyRequestFunction;
        };
        deleteCompany: {
            key: string;
            method: import("../generated/operations/deleteCompany").DeleteCompanyRequestFunction;
        };
        postCompanyBilling: {
            key: string;
            method: import("../generated/operations/postCompanyBilling").PostCompanyBillingRequestFunction;
        };
        postCompanyBillingSuccess: {
            key: string;
            method: import("../generated/operations/postCompanyBillingSuccess").PostCompanyBillingSuccessRequestFunction;
        };
        getCompanyDirectorVerification: {
            key: string;
            method: import("../generated/operations/getCompanyDirectorVerification").GetCompanyDirectorVerificationRequestFunction;
        };
        postCompanyDirectorVerification: {
            key: string;
            method: import("../generated/operations/postCompanyDirectorVerification").PostCompanyDirectorVerificationRequestFunction;
        };
        directorCompany: {
            key: string;
            method: import("../generated/operations/directorCompany").DirectorCompanyRequestFunction;
        };
        postCompanyReferrals: {
            key: string;
            method: import("../generated/operations/postCompanyReferrals").PostCompanyReferralsRequestFunction;
        };
        approveCompany: {
            key: string;
            method: import("../generated/operations/approveCompany").ApproveCompanyRequestFunction;
        };
        declineCompany: {
            key: string;
            method: import("../generated/operations/declineCompany").DeclineCompanyRequestFunction;
        };
        exportFcaApproved: {
            key: string;
            method: import("../generated/operations/exportFcaApproved").ExportFcaApprovedRequestFunction;
        };
    };
    credit: {
        infoCredit: {
            key: string;
            method: import("../generated/operations/infoCredit").InfoCreditRequestFunction;
        };
        getCredits: {
            key: string;
            method: import("../generated/operations/getCredits").GetCreditsRequestFunction;
        };
        postCredit: {
            key: string;
            method: import("../generated/operations/postCredit").PostCreditRequestFunction;
        };
        getCredit: {
            key: string;
            method: import("../generated/operations/getCredit").GetCreditRequestFunction;
        };
        putCredit: {
            key: string;
            method: import("../generated/operations/putCredit").PutCreditRequestFunction;
        };
        deleteCredit: {
            key: string;
            method: import("../generated/operations/deleteCredit").DeleteCreditRequestFunction;
        };
        quoteCredit: {
            key: string;
            method: import("../generated/operations/quoteCredit").QuoteCreditRequestFunction;
        };
        applyCredit: {
            key: string;
            method: import("../generated/operations/applyCredit").ApplyCreditRequestFunction;
        };
        checkCredit: {
            key: string;
            method: import("../generated/operations/checkCredit").CheckCreditRequestFunction;
        };
        signCredit: {
            key: string;
            method: import("../generated/operations/signCredit").SignCreditRequestFunction;
        };
        migrateCredit: {
            key: string;
            method: import("../generated/operations/migrateCredit").MigrateCreditRequestFunction;
        };
        consentMigrateCredit: {
            key: string;
            method: import("../generated/operations/consentMigrateCredit").ConsentMigrateCreditRequestFunction;
        };
    };
    document: {
        getDocuments: {
            key: string;
            method: import("../generated/operations/getDocuments").GetDocumentsRequestFunction;
        };
        postDocument: {
            key: string;
            method: import("../generated/operations/postDocument").PostDocumentRequestFunction;
        };
        getDocument: {
            key: string;
            method: import("../generated/operations/getDocument").GetDocumentRequestFunction;
        };
        putDocument: {
            key: string;
            method: import("../generated/operations/putDocument").PutDocumentRequestFunction;
        };
        deleteDocument: {
            key: string;
            method: import("../generated/operations/deleteDocument").DeleteDocumentRequestFunction;
        };
    };
    enterprise: {
        getEnterprises: {
            key: string;
            method: import("../generated/operations/getEnterprises").GetEnterprisesRequestFunction;
        };
        postEnterprise: {
            key: string;
            method: import("../generated/operations/postEnterprise").PostEnterpriseRequestFunction;
        };
        getEnterprise: {
            key: string;
            method: import("../generated/operations/getEnterprise").GetEnterpriseRequestFunction;
        };
        putEnterprise: {
            key: string;
            method: import("../generated/operations/putEnterprise").PutEnterpriseRequestFunction;
        };
        deleteEnterprise: {
            key: string;
            method: import("../generated/operations/deleteEnterprise").DeleteEnterpriseRequestFunction;
        };
        getEnterpriseBranches: {
            key: string;
            method: import("../generated/operations/getEnterpriseBranches").GetEnterpriseBranchesRequestFunction;
        };
        postEnterpriseBranches: {
            key: string;
            method: import("../generated/operations/postEnterpriseBranches").PostEnterpriseBranchesRequestFunction;
        };
    };
    event: {
        postEvent: {
            key: string;
            method: import("../generated/operations/postEvent").PostEventRequestFunction;
        };
    };
    infoAuth: {
        infoAuth: {
            key: string;
            method: import("../generated/operations/infoAuth").InfoAuthRequestFunction;
        };
        infoVerify: {
            key: string;
            method: import("../generated/operations/infoVerify").InfoVerifyRequestFunction;
        };
        infoPassword: {
            key: string;
            method: import("../generated/operations/infoPassword").InfoPasswordRequestFunction;
        };
        infoSession: {
            key: string;
            method: import("../generated/operations/infoSession").InfoSessionRequestFunction;
        };
        infoClaimAccount: {
            key: string;
            method: import("../generated/operations/infoClaimAccount").InfoClaimAccountRequestFunction;
        };
    };
    infoCache: {
        infoGetCache: {
            key: string;
            method: import("../generated/operations/infoGetCache").InfoGetCacheRequestFunction;
        };
        infoPutCache: {
            key: string;
            method: import("../generated/operations/infoPutCache").InfoPutCacheRequestFunction;
        };
        infoDeleteCache: {
            key: string;
            method: import("../generated/operations/infoDeleteCache").InfoDeleteCacheRequestFunction;
        };
    };
    infoCompany: {
        infoCompany: {
            key: string;
            method: import("../generated/operations/infoCompany").InfoCompanyRequestFunction;
        };
    };
    infoCustomer: {
        infoCustomer: {
            key: string;
            method: import("../generated/operations/infoCustomer").InfoCustomerRequestFunction;
        };
    };
    infoDirector: {
        infoDirector: {
            key: string;
            method: import("../generated/operations/infoDirector").InfoDirectorRequestFunction;
        };
    };
    infoEnterpriseRole: {
        infoEnterpriseRole: {
            key: string;
            method: import("../generated/operations/infoEnterpriseRole").InfoEnterpriseRoleRequestFunction;
        };
    };
    infoEnterprise: {
        infoEnterprise: {
            key: string;
            method: import("../generated/operations/infoEnterprise").InfoEnterpriseRequestFunction;
        };
    };
    infoEntity: {
        getInfoEntity: {
            key: string;
            method: import("../generated/operations/getInfoEntity").GetInfoEntityRequestFunction;
        };
    };
    infoGhost: {
        infoGhost: {
            key: string;
            method: import("../generated/operations/infoGhost").InfoGhostRequestFunction;
        };
    };
    infoHealth: {
        infoHealth: {
            key: string;
            method: import("../generated/operations/infoHealth").InfoHealthRequestFunction;
        };
    };
    infoIP: {
        infoIP: {
            key: string;
            method: import("../generated/operations/infoIP").InfoIPRequestFunction;
        };
    };
    infoLead: {
        infoLead: {
            key: string;
            method: import("../generated/operations/infoLead").InfoLeadRequestFunction;
        };
    };
    infoOnboarding: {
        infoOnboarding: {
            key: string;
            method: import("../generated/operations/infoOnboarding").InfoOnboardingRequestFunction;
        };
    };
    infoPartner: {
        infoPartnerBranding: {
            key: string;
            method: import("../generated/operations/infoPartnerBranding").InfoPartnerBrandingRequestFunction;
        };
    };
    infoQuery: {
        infoQuery: {
            key: string;
            method: import("../generated/operations/infoQuery").InfoQueryRequestFunction;
        };
    };
    infoRedirect: {
        infoLegacyRedirect: {
            key: string;
            method: import("../generated/operations/infoLegacyRedirect").InfoLegacyRedirectRequestFunction;
        };
        infoCheckoutRedirect: {
            key: string;
            method: import("../generated/operations/infoCheckoutRedirect").InfoCheckoutRedirectRequestFunction;
        };
    };
    infoSearch: {
        infoSearch: {
            key: string;
            method: import("../generated/operations/infoSearch").InfoSearchRequestFunction;
        };
    };
    infoStats: {
        infoStats: {
            key: string;
            method: import("../generated/operations/infoStats").InfoStatsRequestFunction;
        };
    };
    infoValidation: {
        infoValidateEmail: {
            key: string;
            method: import("../generated/operations/infoValidateEmail").InfoValidateEmailRequestFunction;
        };
    };
    job: {
        infoExampleJob: {
            key: string;
            method: import("../generated/operations/infoExampleJob").InfoExampleJobRequestFunction;
        };
        getJobs: {
            key: string;
            method: import("../generated/operations/getJobs").GetJobsRequestFunction;
        };
        postJob: {
            key: string;
            method: import("../generated/operations/postJob").PostJobRequestFunction;
        };
        getJob: {
            key: string;
            method: import("../generated/operations/getJob").GetJobRequestFunction;
        };
        putJob: {
            key: string;
            method: import("../generated/operations/putJob").PutJobRequestFunction;
        };
        deleteJob: {
            key: string;
            method: import("../generated/operations/deleteJob").DeleteJobRequestFunction;
        };
        sendJob: {
            key: string;
            method: import("../generated/operations/sendJob").SendJobRequestFunction;
        };
        resendJob: {
            key: string;
            method: import("../generated/operations/resendJob").ResendJobRequestFunction;
        };
        checkJob: {
            key: string;
            method: import("../generated/operations/checkJob").CheckJobRequestFunction;
        };
        completeJob: {
            key: string;
            method: import("../generated/operations/completeJob").CompleteJobRequestFunction;
        };
        archiveJob: {
            key: string;
            method: import("../generated/operations/archiveJob").ArchiveJobRequestFunction;
        };
        unarchiveJob: {
            key: string;
            method: import("../generated/operations/unarchiveJob").UnarchiveJobRequestFunction;
        };
        quoteJob: {
            key: string;
            method: import("../generated/operations/quoteJob").QuoteJobRequestFunction;
        };
        applyJob: {
            key: string;
            method: import("../generated/operations/applyJob").ApplyJobRequestFunction;
        };
        reapplyJob: {
            key: string;
            method: import("../generated/operations/reapplyJob").ReapplyJobRequestFunction;
        };
        payJob: {
            key: string;
            method: import("../generated/operations/payJob").PayJobRequestFunction;
        };
        viewJobSatNote: {
            key: string;
            method: import("../generated/operations/viewJobSatNote").ViewJobSatNoteRequestFunction;
        };
        signJobSatNote: {
            key: string;
            method: import("../generated/operations/signJobSatNote").SignJobSatNoteRequestFunction;
        };
        approveJobSatNote: {
            key: string;
            method: import("../generated/operations/approveJobSatNote").ApproveJobSatNoteRequestFunction;
        };
        lenderReviewJobSatNote: {
            key: string;
            method: import("../generated/operations/lenderReviewJobSatNote").LenderReviewJobSatNoteRequestFunction;
        };
        delayJobSatNote: {
            key: string;
            method: import("../generated/operations/delayJobSatNote").DelayJobSatNoteRequestFunction;
        };
        payoutJob: {
            key: string;
            method: import("../generated/operations/payoutJob").PayoutJobRequestFunction;
        };
        payoutsJob: {
            key: string;
            method: import("../generated/operations/payoutsJob").PayoutsJobRequestFunction;
        };
        overrideJob: {
            key: string;
            method: import("../generated/operations/overrideJob").OverrideJobRequestFunction;
        };
        jobCheckoutLink: {
            key: string;
            method: import("../generated/operations/jobCheckoutLink").JobCheckoutLinkRequestFunction;
        };
        jobCompanyInfo: {
            key: string;
            method: import("../generated/operations/jobCompanyInfo").JobCompanyInfoRequestFunction;
        };
        exportJobPayouts: {
            key: string;
            method: import("../generated/operations/exportJobPayouts").ExportJobPayoutsRequestFunction;
        };
    };
    lead: {
        getLeads: {
            key: string;
            method: import("../generated/operations/getLeads").GetLeadsRequestFunction;
        };
        postLead: {
            key: string;
            method: import("../generated/operations/postLead").PostLeadRequestFunction;
        };
        getLead: {
            key: string;
            method: import("../generated/operations/getLead").GetLeadRequestFunction;
        };
        putLead: {
            key: string;
            method: import("../generated/operations/putLead").PutLeadRequestFunction;
        };
        deleteLead: {
            key: string;
            method: import("../generated/operations/deleteLead").DeleteLeadRequestFunction;
        };
        applyInviteLead: {
            key: string;
            method: import("../generated/operations/applyInviteLead").ApplyInviteLeadRequestFunction;
        };
        budgetLead: {
            key: string;
            method: import("../generated/operations/budgetLead").BudgetLeadRequestFunction;
        };
        quoteLead: {
            key: string;
            method: import("../generated/operations/quoteLead").QuoteLeadRequestFunction;
        };
        sendLeadJob: {
            key: string;
            method: import("../generated/operations/sendLeadJob").SendLeadJobRequestFunction;
        };
        tradeLead: {
            key: string;
            method: import("../generated/operations/tradeLead").TradeLeadRequestFunction;
        };
        tradeQuoteApprovalLead: {
            key: string;
            method: import("../generated/operations/tradeQuoteApprovalLead").TradeQuoteApprovalLeadRequestFunction;
        };
        matchTradesLead: {
            key: string;
            method: import("../generated/operations/matchTradesLead").MatchTradesLeadRequestFunction;
        };
        connectTradesLead: {
            key: string;
            method: import("../generated/operations/connectTradesLead").ConnectTradesLeadRequestFunction;
        };
        acceptedJobSummaryLead: {
            key: string;
            method: import("../generated/operations/acceptedJobSummaryLead").AcceptedJobSummaryLeadRequestFunction;
        };
        referLead: {
            key: string;
            method: import("../generated/operations/referLead").ReferLeadRequestFunction;
        };
    };
    monitor: {
        getMonitors: {
            key: string;
            method: import("../generated/operations/getMonitors").GetMonitorsRequestFunction;
        };
        postMonitor: {
            key: string;
            method: import("../generated/operations/postMonitor").PostMonitorRequestFunction;
        };
        getMonitor: {
            key: string;
            method: import("../generated/operations/getMonitor").GetMonitorRequestFunction;
        };
        putMonitor: {
            key: string;
            method: import("../generated/operations/putMonitor").PutMonitorRequestFunction;
        };
        deleteMonitor: {
            key: string;
            method: import("../generated/operations/deleteMonitor").DeleteMonitorRequestFunction;
        };
        postMonitorFlag: {
            key: string;
            method: import("../generated/operations/postMonitorFlag").PostMonitorFlagRequestFunction;
        };
    };
    onboarding: {
        getOnboardings: {
            key: string;
            method: import("../generated/operations/getOnboardings").GetOnboardingsRequestFunction;
        };
        postOnboarding: {
            key: string;
            method: import("../generated/operations/postOnboarding").PostOnboardingRequestFunction;
        };
        getOnboarding: {
            key: string;
            method: import("../generated/operations/getOnboarding").GetOnboardingRequestFunction;
        };
        putOnboarding: {
            key: string;
            method: import("../generated/operations/putOnboarding").PutOnboardingRequestFunction;
        };
        deleteOnboarding: {
            key: string;
            method: import("../generated/operations/deleteOnboarding").DeleteOnboardingRequestFunction;
        };
        postOnboardingDecision: {
            key: string;
            method: import("../generated/operations/postOnboardingDecision").PostOnboardingDecisionRequestFunction;
        };
    };
    partner: {
        getPartners: {
            key: string;
            method: import("../generated/operations/getPartners").GetPartnersRequestFunction;
        };
        postPartner: {
            key: string;
            method: import("../generated/operations/postPartner").PostPartnerRequestFunction;
        };
        getPartner: {
            key: string;
            method: import("../generated/operations/getPartner").GetPartnerRequestFunction;
        };
        putPartner: {
            key: string;
            method: import("../generated/operations/putPartner").PutPartnerRequestFunction;
        };
        deletePartner: {
            key: string;
            method: import("../generated/operations/deletePartner").DeletePartnerRequestFunction;
        };
        postPartnerReferrals: {
            key: string;
            method: import("../generated/operations/postPartnerReferrals").PostPartnerReferralsRequestFunction;
        };
    };
    payment: {
        getPayments: {
            key: string;
            method: import("../generated/operations/getPayments").GetPaymentsRequestFunction;
        };
        postPayment: {
            key: string;
            method: import("../generated/operations/postPayment").PostPaymentRequestFunction;
        };
        getPayment: {
            key: string;
            method: import("../generated/operations/getPayment").GetPaymentRequestFunction;
        };
        putPayment: {
            key: string;
            method: import("../generated/operations/putPayment").PutPaymentRequestFunction;
        };
        deletePayment: {
            key: string;
            method: import("../generated/operations/deletePayment").DeletePaymentRequestFunction;
        };
        markPayment: {
            key: string;
            method: import("../generated/operations/markPayment").MarkPaymentRequestFunction;
        };
    };
    rate: {
        infoRate: {
            key: string;
            method: import("../generated/operations/infoRate").InfoRateRequestFunction;
        };
        getRates: {
            key: string;
            method: import("../generated/operations/getRates").GetRatesRequestFunction;
        };
        postRate: {
            key: string;
            method: import("../generated/operations/postRate").PostRateRequestFunction;
        };
        getRate: {
            key: string;
            method: import("../generated/operations/getRate").GetRateRequestFunction;
        };
        putRate: {
            key: string;
            method: import("../generated/operations/putRate").PutRateRequestFunction;
        };
        deleteRate: {
            key: string;
            method: import("../generated/operations/deleteRate").DeleteRateRequestFunction;
        };
    };
    subscription: {
        getSubscriptions: {
            key: string;
            method: import("../generated/operations/getSubscriptions").GetSubscriptionsRequestFunction;
        };
        postSubscription: {
            key: string;
            method: import("../generated/operations/postSubscription").PostSubscriptionRequestFunction;
        };
        getSubscription: {
            key: string;
            method: import("../generated/operations/getSubscription").GetSubscriptionRequestFunction;
        };
        putSubscription: {
            key: string;
            method: import("../generated/operations/putSubscription").PutSubscriptionRequestFunction;
        };
        deleteSubscription: {
            key: string;
            method: import("../generated/operations/deleteSubscription").DeleteSubscriptionRequestFunction;
        };
        pendingSubscription: {
            key: string;
            method: import("../generated/operations/pendingSubscription").PendingSubscriptionRequestFunction;
        };
    };
    task: {
        runner: {
            key: string;
            method: import("../generated/operations/runner").RunnerRequestFunction;
        };
    };
    tradeSummary: {
        infoTradeSummary: {
            key: string;
            method: import("../generated/operations/infoTradeSummary").InfoTradeSummaryRequestFunction;
        };
    };
    training: {
        getTrainings: {
            key: string;
            method: import("../generated/operations/getTrainings").GetTrainingsRequestFunction;
        };
        postTraining: {
            key: string;
            method: import("../generated/operations/postTraining").PostTrainingRequestFunction;
        };
        getTraining: {
            key: string;
            method: import("../generated/operations/getTraining").GetTrainingRequestFunction;
        };
        putTraining: {
            key: string;
            method: import("../generated/operations/putTraining").PutTrainingRequestFunction;
        };
        deleteTraining: {
            key: string;
            method: import("../generated/operations/deleteTraining").DeleteTrainingRequestFunction;
        };
    };
    webhook: {
        providerCheckWebhook: {
            key: string;
            method: import("../generated/operations/providerCheckWebhook").ProviderCheckWebhookRequestFunction;
        };
        providerWebhook: {
            key: string;
            method: import("../generated/operations/providerWebhook").ProviderWebhookRequestFunction;
        };
    };
    address: {
        find: {
            key: string;
            method: (request: import("./external/address").FindRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
                body: import("./external/address").FindResponse;
            }, import("./external/address").FindResponse>;
        };
    };
    contract: {
        generate: {
            key: string;
            method: ({ body, }: import("./external/contract").ContractGenerateRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
                body: import("./external/contract").ContractResponse;
            }, import("./external/contract").ContractResponse>;
        };
    };
    payouts: {
        payouts: {
            key: string;
            method: () => import("@openapi-io-ts/runtime").RequestFunction<{
                body: externalServices.PayoutsResponse;
            }, externalServices.PayoutsResponse>;
        };
    };
    pdf: {
        compress: {
            key: string;
            method: ({ body: { content, mimetype }, }: import("./external/pdf").CompressRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
                body: import("./external/pdf").FindResponse;
            }, import("./external/pdf").FindResponse>;
        };
        create: {
            key: string;
            method: ({ body: { job, company }, }: import("./external/pdf").CreateRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
                body: import("./external/pdf").FindResponse;
            }, import("./external/pdf").FindResponse>;
        };
        satnote: {
            key: string;
            method: ({ body: { job, credit, satNote, acceptedTerms }, }: import("./external/pdf").SatNoteRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
                body: import("./external/pdf").FindResponse;
            }, import("./external/pdf").FindResponse>;
        };
    };
    personalGuarantee: {
        generate: {
            key: string;
            method: ({ body, }: import("./external/personalGuarantee").PersonalGuaranteeGenerateRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
                body: externalServices.PersonalGuaranteeResponse;
            }, externalServices.PersonalGuaranteeResponse>;
        };
    };
    sheets: {
        read: {
            key: string;
            method: ({ params, }: import("./external/sheets").ReadRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
                body: import("./external/sheets").ReadResponse;
            }, import("./external/sheets").ReadResponse>;
        };
    };
    subsSheet: {
        write: {
            key: string;
            method: ({ body, }: import("./external/subsSheet").WriteRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
                body: import("./external/subsSheet").SubSheetResponse;
            }, import("./external/subsSheet").SubSheetResponse>;
        };
        update: {
            key: string;
            method: ({ body, }: import("./external/subsSheet").UpdateRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
                body: import("./external/subsSheet").SubSheetResponse;
            }, import("./external/subsSheet").SubSheetResponse>;
        };
    };
};
export { adhoc, authUser, company, credit, document, enterprise, event, infoAuth, infoCache, infoCompany, infoCustomer, infoDirector, infoEnterpriseRole, infoEnterprise, infoEntity, infoGhost, infoHealth, infoIP, infoLead, infoOnboarding, infoPartner, infoQuery, infoRedirect, infoSearch, infoStats, infoValidation, job, lead, monitor, onboarding, partner, payment, rate, subscription, task, tradeSummary, training, webhook, address, contract, payouts, pdf, personalGuarantee, sheets, subsSheet, };
export default services;
