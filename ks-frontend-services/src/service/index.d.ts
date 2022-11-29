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
declare const infoHealth: {
    infoHealth: {
        key: string;
        method: import("../generated/operations/infoHealth").InfoHealthRequestFunction;
    };
};
declare const infoGhost: {
    infoGhost: {
        key: string;
        method: import("../generated/operations/infoGhost").InfoGhostRequestFunction;
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
declare const infoRedirect: {
    infoLegacyRedirect: {
        key: string;
        method: import("../generated/operations/infoLegacyRedirect").InfoLegacyRedirectRequestFunction;
    };
};
declare const infoIP: {
    infoIP: {
        key: string;
        method: import("../generated/operations/infoIP").InfoIPRequestFunction;
    };
};
declare const infoValidation: {
    infoValidateEmail: {
        key: string;
        method: import("../generated/operations/infoValidateEmail").InfoValidateEmailRequestFunction;
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
    approveCompany: {
        key: string;
        method: import("../generated/operations/approveCompany").ApproveCompanyRequestFunction;
    };
    declineCompany: {
        key: string;
        method: import("../generated/operations/declineCompany").DeclineCompanyRequestFunction;
    };
};
declare const job: {
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
    applyJob: {
        key: string;
        method: import("../generated/operations/applyJob").ApplyJobRequestFunction;
    };
    payJob: {
        key: string;
        method: import("../generated/operations/payJob").PayJobRequestFunction;
    };
    viewJobSatNote: {
        key: string;
        method: import("../generated/operations/viewJobSatNote").ViewJobSatNoteRequestFunction;
    };
    signJobSateNote: {
        key: string;
        method: import("../generated/operations/signJobSateNote").SignJobSateNoteRequestFunction;
    };
    approveJobSatNote: {
        key: string;
        method: import("../generated/operations/approveJobSatNote").ApproveJobSatNoteRequestFunction;
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
    jobCompanyInfo: {
        key: string;
        method: import("../generated/operations/jobCompanyInfo").JobCompanyInfoRequestFunction;
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
declare const credit: {
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
declare const task: {
    runner: {
        key: string;
        method: import("../generated/operations/runner").RunnerRequestFunction;
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
declare const pdf: {
    compress: {
        key: string;
        method: ({ body: { content, mimetype }, }: import("./external/pdf").CompressRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
            body: import("./external/pdf").FindResponse;
        }, import("./external/pdf").FindResponse>;
    };
};
/**
 * A list of all possible services the frontend can use.
 */
declare const services: {
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
    infoHealth: {
        infoHealth: {
            key: string;
            method: import("../generated/operations/infoHealth").InfoHealthRequestFunction;
        };
    };
    infoGhost: {
        infoGhost: {
            key: string;
            method: import("../generated/operations/infoGhost").InfoGhostRequestFunction;
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
    infoRedirect: {
        infoLegacyRedirect: {
            key: string;
            method: import("../generated/operations/infoLegacyRedirect").InfoLegacyRedirectRequestFunction;
        };
    };
    infoIP: {
        infoIP: {
            key: string;
            method: import("../generated/operations/infoIP").InfoIPRequestFunction;
        };
    };
    infoValidation: {
        infoValidateEmail: {
            key: string;
            method: import("../generated/operations/infoValidateEmail").InfoValidateEmailRequestFunction;
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
        approveCompany: {
            key: string;
            method: import("../generated/operations/approveCompany").ApproveCompanyRequestFunction;
        };
        declineCompany: {
            key: string;
            method: import("../generated/operations/declineCompany").DeclineCompanyRequestFunction;
        };
    };
    job: {
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
        applyJob: {
            key: string;
            method: import("../generated/operations/applyJob").ApplyJobRequestFunction;
        };
        payJob: {
            key: string;
            method: import("../generated/operations/payJob").PayJobRequestFunction;
        };
        viewJobSatNote: {
            key: string;
            method: import("../generated/operations/viewJobSatNote").ViewJobSatNoteRequestFunction;
        };
        signJobSateNote: {
            key: string;
            method: import("../generated/operations/signJobSateNote").SignJobSateNoteRequestFunction;
        };
        approveJobSatNote: {
            key: string;
            method: import("../generated/operations/approveJobSatNote").ApproveJobSatNoteRequestFunction;
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
        jobCompanyInfo: {
            key: string;
            method: import("../generated/operations/jobCompanyInfo").JobCompanyInfoRequestFunction;
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
    credit: {
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
    task: {
        runner: {
            key: string;
            method: import("../generated/operations/runner").RunnerRequestFunction;
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
    pdf: {
        compress: {
            key: string;
            method: ({ body: { content, mimetype }, }: import("./external/pdf").CompressRequest) => import("@openapi-io-ts/runtime").RequestFunction<{
                body: import("./external/pdf").FindResponse;
            }, import("./external/pdf").FindResponse>;
        };
    };
};
export { authUser, infoHealth, infoGhost, infoCompany, infoCustomer, infoAuth, infoRedirect, infoIP, infoValidation, infoCache, company, job, payment, credit, document, subscription, webhook, task, address, pdf, };
export default services;
