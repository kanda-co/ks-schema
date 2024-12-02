import * as externalServices from './external';
import { OperationArgs } from '../store/types';
declare const adhoc: {
    actionAdhoc: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/actionAdhoc").ActionAdhocRequestFunction;
    };
};
declare const audit: {
    getAudits: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getAudits").GetAuditsRequestFunction;
    };
    postAudit: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postAudit").PostAuditRequestFunction;
    };
    getAudit: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getAudit").GetAuditRequestFunction;
    };
};
declare const authUser: {
    me: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/me").MeRequestFunction;
    };
    postMe: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postMe").PostMeRequestFunction;
    };
    putMe: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putMe").PutMeRequestFunction;
    };
};
declare const company: {
    getCompanies: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getCompanies").GetCompaniesRequestFunction;
    };
    postCompany: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postCompany").PostCompanyRequestFunction;
    };
    getCompany: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getCompany").GetCompanyRequestFunction;
    };
    putCompany: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putCompany").PutCompanyRequestFunction;
    };
    deleteCompany: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteCompany").DeleteCompanyRequestFunction;
    };
    postCompanyBilling: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postCompanyBilling").PostCompanyBillingRequestFunction;
    };
    postCompanyBillingSuccess: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postCompanyBillingSuccess").PostCompanyBillingSuccessRequestFunction;
    };
    getCompanyDirectorVerification: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getCompanyDirectorVerification").GetCompanyDirectorVerificationRequestFunction;
    };
    postCompanyDirectorVerification: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postCompanyDirectorVerification").PostCompanyDirectorVerificationRequestFunction;
    };
    directorCompany: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/directorCompany").DirectorCompanyRequestFunction;
    };
    getCompanyReferrals: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getCompanyReferrals").GetCompanyReferralsRequestFunction;
    };
    postCompanyReferrals: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postCompanyReferrals").PostCompanyReferralsRequestFunction;
    };
    approveCompany: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/approveCompany").ApproveCompanyRequestFunction;
    };
    declineCompany: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/declineCompany").DeclineCompanyRequestFunction;
    };
    exportFcaApproved: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/exportFcaApproved").ExportFcaApprovedRequestFunction;
    };
    importFcaApproved: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/importFcaApproved").ImportFcaApprovedRequestFunction;
    };
};
declare const credit: {
    infoCredit: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoCredit").InfoCreditRequestFunction;
    };
    getCredits: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getCredits").GetCreditsRequestFunction;
    };
    postCredit: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postCredit").PostCreditRequestFunction;
    };
    getCredit: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getCredit").GetCreditRequestFunction;
    };
    putCredit: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putCredit").PutCreditRequestFunction;
    };
    deleteCredit: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteCredit").DeleteCreditRequestFunction;
    };
    quoteCredit: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/quoteCredit").QuoteCreditRequestFunction;
    };
    applyCredit: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/applyCredit").ApplyCreditRequestFunction;
    };
    checkCredit: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/checkCredit").CheckCreditRequestFunction;
    };
    signCredit: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/signCredit").SignCreditRequestFunction;
    };
    migrateCredit: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/migrateCredit").MigrateCreditRequestFunction;
    };
    consentMigrateCredit: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/consentMigrateCredit").ConsentMigrateCreditRequestFunction;
    };
};
declare const document: {
    getDocuments: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getDocuments").GetDocumentsRequestFunction;
    };
    postDocument: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postDocument").PostDocumentRequestFunction;
    };
    getDocument: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getDocument").GetDocumentRequestFunction;
    };
    putDocument: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putDocument").PutDocumentRequestFunction;
    };
    deleteDocument: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteDocument").DeleteDocumentRequestFunction;
    };
};
declare const enrolment: {
    getEnrolment: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getEnrolment").GetEnrolmentRequestFunction;
    };
    putEnrolment: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putEnrolment").PutEnrolmentRequestFunction;
    };
};
declare const enterprise: {
    getEnterprises: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getEnterprises").GetEnterprisesRequestFunction;
    };
    postEnterprise: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postEnterprise").PostEnterpriseRequestFunction;
    };
    getEnterprise: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getEnterprise").GetEnterpriseRequestFunction;
    };
    putEnterprise: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putEnterprise").PutEnterpriseRequestFunction;
    };
    deleteEnterprise: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteEnterprise").DeleteEnterpriseRequestFunction;
    };
    getEnterpriseBranches: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getEnterpriseBranches").GetEnterpriseBranchesRequestFunction;
    };
    postEnterpriseBranches: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postEnterpriseBranches").PostEnterpriseBranchesRequestFunction;
    };
    exportEnterpriseDailyReport: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/exportEnterpriseDailyReport").ExportEnterpriseDailyReportRequestFunction;
    };
};
declare const event: {
    postEvent: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postEvent").PostEventRequestFunction;
    };
};
declare const infoAuth: {
    infoAuth: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoAuth").InfoAuthRequestFunction;
    };
    infoVerify: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoVerify").InfoVerifyRequestFunction;
    };
    infoPassword: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoPassword").InfoPasswordRequestFunction;
    };
    infoSession: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoSession").InfoSessionRequestFunction;
    };
    infoClaimAccount: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoClaimAccount").InfoClaimAccountRequestFunction;
    };
};
declare const infoCache: {
    infoGetCache: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoGetCache").InfoGetCacheRequestFunction;
    };
    infoPutCache: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoPutCache").InfoPutCacheRequestFunction;
    };
    infoDeleteCache: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoDeleteCache").InfoDeleteCacheRequestFunction;
    };
};
declare const infoCampaign: {
    infoCampaign: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoCampaign").InfoCampaignRequestFunction;
    };
};
declare const infoCompany: {
    infoCompany: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoCompany").InfoCompanyRequestFunction;
    };
};
declare const infoCustomer: {
    infoCustomer: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoCustomer").InfoCustomerRequestFunction;
    };
};
declare const infoDirector: {
    infoDirector: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoDirector").InfoDirectorRequestFunction;
    };
};
declare const infoEnterpriseRole: {
    infoEnterpriseRole: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoEnterpriseRole").InfoEnterpriseRoleRequestFunction;
    };
};
declare const infoEnterprise: {
    infoEnterprise: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoEnterprise").InfoEnterpriseRequestFunction;
    };
};
declare const infoEntity: {
    getInfoEntity: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getInfoEntity").GetInfoEntityRequestFunction;
    };
};
declare const infoGhost: {
    infoGhost: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoGhost").InfoGhostRequestFunction;
    };
};
declare const infoHealth: {
    infoHealth: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoHealth").InfoHealthRequestFunction;
    };
};
declare const infoIP: {
    infoIP: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoIP").InfoIPRequestFunction;
    };
};
declare const infoIntroductionStats: {
    infoIntroductionStats: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoIntroductionStats").InfoIntroductionStatsRequestFunction;
    };
};
declare const infoLead: {
    infoLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoLead").InfoLeadRequestFunction;
    };
};
declare const infoOnboarding: {
    infoOnboarding: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoOnboarding").InfoOnboardingRequestFunction;
    };
};
declare const infoPartner: {
    infoPartnerBranding: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoPartnerBranding").InfoPartnerBrandingRequestFunction;
    };
};
declare const infoQuery: {
    infoQuery: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoQuery").InfoQueryRequestFunction;
    };
};
declare const infoRedirect: {
    infoLegacyRedirect: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoLegacyRedirect").InfoLegacyRedirectRequestFunction;
    };
    infoCheckoutRedirect: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoCheckoutRedirect").InfoCheckoutRedirectRequestFunction;
    };
};
declare const infoRelation: {
    infoRelation: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoRelation").InfoRelationRequestFunction;
    };
};
declare const infoSearch: {
    infoSearch: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoSearch").InfoSearchRequestFunction;
    };
};
declare const infoStats: {
    infoStats: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoStats").InfoStatsRequestFunction;
    };
    putInfoStats: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putInfoStats").PutInfoStatsRequestFunction;
    };
};
declare const infoValidation: {
    infoValidateEmail: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoValidateEmail").InfoValidateEmailRequestFunction;
    };
};
declare const infoWorkType: {
    infoWorkType: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoWorkType").InfoWorkTypeRequestFunction;
    };
};
declare const introduction: {
    getIntroductions: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getIntroductions").GetIntroductionsRequestFunction;
    };
    postIntroduction: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroduction").PostIntroductionRequestFunction;
    };
    getIntroduction: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getIntroduction").GetIntroductionRequestFunction;
    };
    putIntroduction: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putIntroduction").PutIntroductionRequestFunction;
    };
    deleteIntroduction: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteIntroduction").DeleteIntroductionRequestFunction;
    };
    postIntroductionConsumerSignature: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionConsumerSignature").PostIntroductionConsumerSignatureRequestFunction;
    };
    postIntroductionConsumerDetails: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionConsumerDetails").PostIntroductionConsumerDetailsRequestFunction;
    };
    postIntroductionConsumerBudgets: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionConsumerBudgets").PostIntroductionConsumerBudgetsRequestFunction;
    };
    postIntroductionConsumerApply: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionConsumerApply").PostIntroductionConsumerApplyRequestFunction;
    };
    postIntroductionJobDetails: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionJobDetails").PostIntroductionJobDetailsRequestFunction;
    };
    postIntroductionAmendJobDetails: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionAmendJobDetails").PostIntroductionAmendJobDetailsRequestFunction;
    };
    postIntroductionTrader: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionTrader").PostIntroductionTraderRequestFunction;
    };
    postIntroductionTraderSignature: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionTraderSignature").PostIntroductionTraderSignatureRequestFunction;
    };
    postIntroductionTraderApproveAmended: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionTraderApproveAmended").PostIntroductionTraderApproveAmendedRequestFunction;
    };
    postIntroductionTraderDetails: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionTraderDetails").PostIntroductionTraderDetailsRequestFunction;
    };
    postIntroductionRejectJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionRejectJob").PostIntroductionRejectJobRequestFunction;
    };
    submitIntroductionState: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/submitIntroductionState").SubmitIntroductionStateRequestFunction;
    };
    postIntroductionConvertJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionConvertJob").PostIntroductionConvertJobRequestFunction;
    };
    postIntroductionNotification: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionNotification").PostIntroductionNotificationRequestFunction;
    };
    actionIntroduction: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/actionIntroduction").ActionIntroductionRequestFunction;
    };
};
declare const job: {
    infoExampleJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoExampleJob").InfoExampleJobRequestFunction;
    };
    getJobs: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getJobs").GetJobsRequestFunction;
    };
    postJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postJob").PostJobRequestFunction;
    };
    getJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getJob").GetJobRequestFunction;
    };
    putJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putJob").PutJobRequestFunction;
    };
    deleteJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteJob").DeleteJobRequestFunction;
    };
    sendJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/sendJob").SendJobRequestFunction;
    };
    resendJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/resendJob").ResendJobRequestFunction;
    };
    checkJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/checkJob").CheckJobRequestFunction;
    };
    completeJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/completeJob").CompleteJobRequestFunction;
    };
    archiveJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/archiveJob").ArchiveJobRequestFunction;
    };
    unarchiveJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/unarchiveJob").UnarchiveJobRequestFunction;
    };
    quoteJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/quoteJob").QuoteJobRequestFunction;
    };
    applyJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/applyJob").ApplyJobRequestFunction;
    };
    reapplyJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/reapplyJob").ReapplyJobRequestFunction;
    };
    payJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/payJob").PayJobRequestFunction;
    };
    viewJobSatNote: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/viewJobSatNote").ViewJobSatNoteRequestFunction;
    };
    signJobSatNote: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/signJobSatNote").SignJobSatNoteRequestFunction;
    };
    approveJobSatNote: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/approveJobSatNote").ApproveJobSatNoteRequestFunction;
    };
    lenderReviewJobSatNote: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/lenderReviewJobSatNote").LenderReviewJobSatNoteRequestFunction;
    };
    delayJobSatNote: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/delayJobSatNote").DelayJobSatNoteRequestFunction;
    };
    payoutJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/payoutJob").PayoutJobRequestFunction;
    };
    payoutsJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/payoutsJob").PayoutsJobRequestFunction;
    };
    overrideJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/overrideJob").OverrideJobRequestFunction;
    };
    jobCheckoutLink: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/jobCheckoutLink").JobCheckoutLinkRequestFunction;
    };
    jobCompanyInfo: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/jobCompanyInfo").JobCompanyInfoRequestFunction;
    };
    exportJobPayouts: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/exportJobPayouts").ExportJobPayoutsRequestFunction;
    };
};
declare const lead: {
    getLeads: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getLeads").GetLeadsRequestFunction;
    };
    postLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postLead").PostLeadRequestFunction;
    };
    getLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getLead").GetLeadRequestFunction;
    };
    putLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putLead").PutLeadRequestFunction;
    };
    deleteLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteLead").DeleteLeadRequestFunction;
    };
    applyInviteLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/applyInviteLead").ApplyInviteLeadRequestFunction;
    };
    budgetLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/budgetLead").BudgetLeadRequestFunction;
    };
    quoteLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/quoteLead").QuoteLeadRequestFunction;
    };
    sendLeadJob: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/sendLeadJob").SendLeadJobRequestFunction;
    };
    tradeLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/tradeLead").TradeLeadRequestFunction;
    };
    tradeQuoteApprovalLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/tradeQuoteApprovalLead").TradeQuoteApprovalLeadRequestFunction;
    };
    matchTradesLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/matchTradesLead").MatchTradesLeadRequestFunction;
    };
    connectTradesLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/connectTradesLead").ConnectTradesLeadRequestFunction;
    };
    acceptedJobSummaryLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/acceptedJobSummaryLead").AcceptedJobSummaryLeadRequestFunction;
    };
    referLead: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/referLead").ReferLeadRequestFunction;
    };
};
declare const monitor: {
    getMonitors: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getMonitors").GetMonitorsRequestFunction;
    };
    postMonitor: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postMonitor").PostMonitorRequestFunction;
    };
    getMonitor: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getMonitor").GetMonitorRequestFunction;
    };
    putMonitor: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putMonitor").PutMonitorRequestFunction;
    };
    deleteMonitor: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteMonitor").DeleteMonitorRequestFunction;
    };
    postMonitorFlag: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postMonitorFlag").PostMonitorFlagRequestFunction;
    };
};
declare const onboarding: {
    getOnboardings: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getOnboardings").GetOnboardingsRequestFunction;
    };
    postOnboarding: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postOnboarding").PostOnboardingRequestFunction;
    };
    getOnboarding: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getOnboarding").GetOnboardingRequestFunction;
    };
    putOnboarding: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putOnboarding").PutOnboardingRequestFunction;
    };
    deleteOnboarding: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteOnboarding").DeleteOnboardingRequestFunction;
    };
    postOnboardingDecision: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postOnboardingDecision").PostOnboardingDecisionRequestFunction;
    };
};
declare const partner: {
    getPartners: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getPartners").GetPartnersRequestFunction;
    };
    postPartner: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postPartner").PostPartnerRequestFunction;
    };
    getPartner: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getPartner").GetPartnerRequestFunction;
    };
    putPartner: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putPartner").PutPartnerRequestFunction;
    };
    deletePartner: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deletePartner").DeletePartnerRequestFunction;
    };
    postPartnerReferrals: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postPartnerReferrals").PostPartnerReferralsRequestFunction;
    };
};
declare const payment: {
    getPayments: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getPayments").GetPaymentsRequestFunction;
    };
    postPayment: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postPayment").PostPaymentRequestFunction;
    };
    getPayment: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getPayment").GetPaymentRequestFunction;
    };
    putPayment: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putPayment").PutPaymentRequestFunction;
    };
    deletePayment: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deletePayment").DeletePaymentRequestFunction;
    };
    markPayment: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/markPayment").MarkPaymentRequestFunction;
    };
};
declare const rate: {
    infoRate: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoRate").InfoRateRequestFunction;
    };
    getRates: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getRates").GetRatesRequestFunction;
    };
    postRate: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postRate").PostRateRequestFunction;
    };
    getRate: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getRate").GetRateRequestFunction;
    };
    putRate: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putRate").PutRateRequestFunction;
    };
    deleteRate: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteRate").DeleteRateRequestFunction;
    };
};
declare const subscription: {
    getSubscriptions: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getSubscriptions").GetSubscriptionsRequestFunction;
    };
    postSubscription: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postSubscription").PostSubscriptionRequestFunction;
    };
    getSubscription: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getSubscription").GetSubscriptionRequestFunction;
    };
    putSubscription: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putSubscription").PutSubscriptionRequestFunction;
    };
    deleteSubscription: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteSubscription").DeleteSubscriptionRequestFunction;
    };
    pendingSubscription: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/pendingSubscription").PendingSubscriptionRequestFunction;
    };
};
declare const task: {
    runner: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/runner").RunnerRequestFunction;
    };
};
declare const tradeSummary: {
    infoTradeSummary: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/infoTradeSummary").InfoTradeSummaryRequestFunction;
    };
};
declare const training: {
    getTrainings: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getTrainings").GetTrainingsRequestFunction;
    };
    postTraining: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postTraining").PostTrainingRequestFunction;
    };
    getTraining: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getTraining").GetTrainingRequestFunction;
    };
    putTraining: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putTraining").PutTrainingRequestFunction;
    };
    deleteTraining: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteTraining").DeleteTrainingRequestFunction;
    };
};
declare const transaction: {
    getTransactions: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getTransactions").GetTransactionsRequestFunction;
    };
    postTransaction: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/postTransaction").PostTransactionRequestFunction;
    };
    getTransaction: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/getTransaction").GetTransactionRequestFunction;
    };
    putTransaction: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/putTransaction").PutTransactionRequestFunction;
    };
    deleteTransaction: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteTransaction").DeleteTransactionRequestFunction;
    };
};
declare const webhook: {
    providerCheckWebhook: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/providerCheckWebhook").ProviderCheckWebhookRequestFunction;
    };
    providerWebhook: {
        key: string;
        method: (operationArgs?: OperationArgs) => import("../generated/operations/providerWebhook").ProviderWebhookRequestFunction;
    };
};
declare const address: {
    find: {
        key: string;
        method: (request: import("./external/address").FindRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
            body: import("./external/address").FindResponse;
        }, import("./external/address").FindResponse>;
    };
};
declare const contract: {
    generate: {
        key: string;
        method: ({ body, }: import("./external/contract").ContractGenerateRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
            body: import("./external/contract").ContractResponse;
        }, import("./external/contract").ContractResponse>;
    };
};
declare const payouts: {
    payouts: {
        key: string;
        method: () => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
            body: externalServices.PayoutsResponse;
        }, externalServices.PayoutsResponse>;
    };
};
declare const pdf: {
    compress: {
        key: string;
        method: ({ body: { content, mimetype }, }: import("./external/pdf").CompressRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
            body: import("./external/pdf").CompressRequest;
        }, import("../types").StringIndexedObject<any>>;
    };
    create: {
        key: string;
        method: ({ body, }: import("./external/pdf").CreateRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
            body: import("./external/pdf").CreateRequest;
        }, import("../types").StringIndexedObject<any>>;
    };
    satnote: {
        key: string;
        method: ({ body: { job, credit, satNote, acceptedTerms }, }: import("./external/pdf").SatNoteRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
            body: import("./external/pdf").SatNoteRequest;
        }, import("../types").StringIndexedObject<any>>;
    };
};
declare const personalGuarantee: {
    generate: {
        key: string;
        method: ({ body, }: import("./external/personalGuarantee").PersonalGuaranteeGenerateRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
            body: externalServices.PersonalGuaranteeResponse;
        }, externalServices.PersonalGuaranteeResponse>;
    };
};
declare const sheets: {
    read: {
        key: string;
        method: ({ params, }: import("./external/sheets").ReadRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
            body: import("./external/sheets").ReadResponse;
        }, import("./external/sheets").ReadResponse>;
    };
};
declare const subsSheet: {
    write: {
        key: string;
        method: ({ body, }: import("./external/subsSheet").WriteRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
            body: import("./external/subsSheet").SubSheetResponse;
        }, import("./external/subsSheet").SubSheetResponse>;
    };
    update: {
        key: string;
        method: ({ body, }: import("./external/subsSheet").UpdateRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
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
            method: (operationArgs?: OperationArgs) => import("../generated/operations/actionAdhoc").ActionAdhocRequestFunction;
        };
    };
    audit: {
        getAudits: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getAudits").GetAuditsRequestFunction;
        };
        postAudit: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postAudit").PostAuditRequestFunction;
        };
        getAudit: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getAudit").GetAuditRequestFunction;
        };
    };
    authUser: {
        me: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/me").MeRequestFunction;
        };
        postMe: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postMe").PostMeRequestFunction;
        };
        putMe: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putMe").PutMeRequestFunction;
        };
    };
    company: {
        getCompanies: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getCompanies").GetCompaniesRequestFunction;
        };
        postCompany: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postCompany").PostCompanyRequestFunction;
        };
        getCompany: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getCompany").GetCompanyRequestFunction;
        };
        putCompany: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putCompany").PutCompanyRequestFunction;
        };
        deleteCompany: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteCompany").DeleteCompanyRequestFunction;
        };
        postCompanyBilling: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postCompanyBilling").PostCompanyBillingRequestFunction;
        };
        postCompanyBillingSuccess: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postCompanyBillingSuccess").PostCompanyBillingSuccessRequestFunction;
        };
        getCompanyDirectorVerification: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getCompanyDirectorVerification").GetCompanyDirectorVerificationRequestFunction;
        };
        postCompanyDirectorVerification: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postCompanyDirectorVerification").PostCompanyDirectorVerificationRequestFunction;
        };
        directorCompany: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/directorCompany").DirectorCompanyRequestFunction;
        };
        getCompanyReferrals: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getCompanyReferrals").GetCompanyReferralsRequestFunction;
        };
        postCompanyReferrals: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postCompanyReferrals").PostCompanyReferralsRequestFunction;
        };
        approveCompany: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/approveCompany").ApproveCompanyRequestFunction;
        };
        declineCompany: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/declineCompany").DeclineCompanyRequestFunction;
        };
        exportFcaApproved: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/exportFcaApproved").ExportFcaApprovedRequestFunction;
        };
        importFcaApproved: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/importFcaApproved").ImportFcaApprovedRequestFunction;
        };
    };
    credit: {
        infoCredit: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoCredit").InfoCreditRequestFunction;
        };
        getCredits: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getCredits").GetCreditsRequestFunction;
        };
        postCredit: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postCredit").PostCreditRequestFunction;
        };
        getCredit: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getCredit").GetCreditRequestFunction;
        };
        putCredit: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putCredit").PutCreditRequestFunction;
        };
        deleteCredit: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteCredit").DeleteCreditRequestFunction;
        };
        quoteCredit: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/quoteCredit").QuoteCreditRequestFunction;
        };
        applyCredit: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/applyCredit").ApplyCreditRequestFunction;
        };
        checkCredit: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/checkCredit").CheckCreditRequestFunction;
        };
        signCredit: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/signCredit").SignCreditRequestFunction;
        };
        migrateCredit: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/migrateCredit").MigrateCreditRequestFunction;
        };
        consentMigrateCredit: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/consentMigrateCredit").ConsentMigrateCreditRequestFunction;
        };
    };
    document: {
        getDocuments: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getDocuments").GetDocumentsRequestFunction;
        };
        postDocument: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postDocument").PostDocumentRequestFunction;
        };
        getDocument: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getDocument").GetDocumentRequestFunction;
        };
        putDocument: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putDocument").PutDocumentRequestFunction;
        };
        deleteDocument: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteDocument").DeleteDocumentRequestFunction;
        };
    };
    enrolment: {
        getEnrolment: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getEnrolment").GetEnrolmentRequestFunction;
        };
        putEnrolment: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putEnrolment").PutEnrolmentRequestFunction;
        };
    };
    enterprise: {
        getEnterprises: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getEnterprises").GetEnterprisesRequestFunction;
        };
        postEnterprise: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postEnterprise").PostEnterpriseRequestFunction;
        };
        getEnterprise: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getEnterprise").GetEnterpriseRequestFunction;
        };
        putEnterprise: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putEnterprise").PutEnterpriseRequestFunction;
        };
        deleteEnterprise: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteEnterprise").DeleteEnterpriseRequestFunction;
        };
        getEnterpriseBranches: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getEnterpriseBranches").GetEnterpriseBranchesRequestFunction;
        };
        postEnterpriseBranches: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postEnterpriseBranches").PostEnterpriseBranchesRequestFunction;
        };
        exportEnterpriseDailyReport: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/exportEnterpriseDailyReport").ExportEnterpriseDailyReportRequestFunction;
        };
    };
    event: {
        postEvent: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postEvent").PostEventRequestFunction;
        };
    };
    infoAuth: {
        infoAuth: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoAuth").InfoAuthRequestFunction;
        };
        infoVerify: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoVerify").InfoVerifyRequestFunction;
        };
        infoPassword: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoPassword").InfoPasswordRequestFunction;
        };
        infoSession: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoSession").InfoSessionRequestFunction;
        };
        infoClaimAccount: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoClaimAccount").InfoClaimAccountRequestFunction;
        };
    };
    infoCache: {
        infoGetCache: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoGetCache").InfoGetCacheRequestFunction;
        };
        infoPutCache: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoPutCache").InfoPutCacheRequestFunction;
        };
        infoDeleteCache: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoDeleteCache").InfoDeleteCacheRequestFunction;
        };
    };
    infoCampaign: {
        infoCampaign: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoCampaign").InfoCampaignRequestFunction;
        };
    };
    infoCompany: {
        infoCompany: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoCompany").InfoCompanyRequestFunction;
        };
    };
    infoCustomer: {
        infoCustomer: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoCustomer").InfoCustomerRequestFunction;
        };
    };
    infoDirector: {
        infoDirector: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoDirector").InfoDirectorRequestFunction;
        };
    };
    infoEnterpriseRole: {
        infoEnterpriseRole: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoEnterpriseRole").InfoEnterpriseRoleRequestFunction;
        };
    };
    infoEnterprise: {
        infoEnterprise: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoEnterprise").InfoEnterpriseRequestFunction;
        };
    };
    infoEntity: {
        getInfoEntity: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getInfoEntity").GetInfoEntityRequestFunction;
        };
    };
    infoGhost: {
        infoGhost: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoGhost").InfoGhostRequestFunction;
        };
    };
    infoHealth: {
        infoHealth: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoHealth").InfoHealthRequestFunction;
        };
    };
    infoIP: {
        infoIP: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoIP").InfoIPRequestFunction;
        };
    };
    infoIntroductionStats: {
        infoIntroductionStats: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoIntroductionStats").InfoIntroductionStatsRequestFunction;
        };
    };
    infoLead: {
        infoLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoLead").InfoLeadRequestFunction;
        };
    };
    infoOnboarding: {
        infoOnboarding: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoOnboarding").InfoOnboardingRequestFunction;
        };
    };
    infoPartner: {
        infoPartnerBranding: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoPartnerBranding").InfoPartnerBrandingRequestFunction;
        };
    };
    infoQuery: {
        infoQuery: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoQuery").InfoQueryRequestFunction;
        };
    };
    infoRedirect: {
        infoLegacyRedirect: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoLegacyRedirect").InfoLegacyRedirectRequestFunction;
        };
        infoCheckoutRedirect: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoCheckoutRedirect").InfoCheckoutRedirectRequestFunction;
        };
    };
    infoRelation: {
        infoRelation: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoRelation").InfoRelationRequestFunction;
        };
    };
    infoSearch: {
        infoSearch: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoSearch").InfoSearchRequestFunction;
        };
    };
    infoStats: {
        infoStats: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoStats").InfoStatsRequestFunction;
        };
        putInfoStats: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putInfoStats").PutInfoStatsRequestFunction;
        };
    };
    infoValidation: {
        infoValidateEmail: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoValidateEmail").InfoValidateEmailRequestFunction;
        };
    };
    infoWorkType: {
        infoWorkType: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoWorkType").InfoWorkTypeRequestFunction;
        };
    };
    introduction: {
        getIntroductions: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getIntroductions").GetIntroductionsRequestFunction;
        };
        postIntroduction: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroduction").PostIntroductionRequestFunction;
        };
        getIntroduction: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getIntroduction").GetIntroductionRequestFunction;
        };
        putIntroduction: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putIntroduction").PutIntroductionRequestFunction;
        };
        deleteIntroduction: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteIntroduction").DeleteIntroductionRequestFunction;
        };
        postIntroductionConsumerSignature: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionConsumerSignature").PostIntroductionConsumerSignatureRequestFunction;
        };
        postIntroductionConsumerDetails: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionConsumerDetails").PostIntroductionConsumerDetailsRequestFunction;
        };
        postIntroductionConsumerBudgets: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionConsumerBudgets").PostIntroductionConsumerBudgetsRequestFunction;
        };
        postIntroductionConsumerApply: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionConsumerApply").PostIntroductionConsumerApplyRequestFunction;
        };
        postIntroductionJobDetails: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionJobDetails").PostIntroductionJobDetailsRequestFunction;
        };
        postIntroductionAmendJobDetails: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionAmendJobDetails").PostIntroductionAmendJobDetailsRequestFunction;
        };
        postIntroductionTrader: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionTrader").PostIntroductionTraderRequestFunction;
        };
        postIntroductionTraderSignature: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionTraderSignature").PostIntroductionTraderSignatureRequestFunction;
        };
        postIntroductionTraderApproveAmended: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionTraderApproveAmended").PostIntroductionTraderApproveAmendedRequestFunction;
        };
        postIntroductionTraderDetails: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionTraderDetails").PostIntroductionTraderDetailsRequestFunction;
        };
        postIntroductionRejectJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionRejectJob").PostIntroductionRejectJobRequestFunction;
        };
        submitIntroductionState: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/submitIntroductionState").SubmitIntroductionStateRequestFunction;
        };
        postIntroductionConvertJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionConvertJob").PostIntroductionConvertJobRequestFunction;
        };
        postIntroductionNotification: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postIntroductionNotification").PostIntroductionNotificationRequestFunction;
        };
        actionIntroduction: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/actionIntroduction").ActionIntroductionRequestFunction;
        };
    };
    job: {
        infoExampleJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoExampleJob").InfoExampleJobRequestFunction;
        };
        getJobs: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getJobs").GetJobsRequestFunction;
        };
        postJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postJob").PostJobRequestFunction;
        };
        getJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getJob").GetJobRequestFunction;
        };
        putJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putJob").PutJobRequestFunction;
        };
        deleteJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteJob").DeleteJobRequestFunction;
        };
        sendJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/sendJob").SendJobRequestFunction;
        };
        resendJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/resendJob").ResendJobRequestFunction;
        };
        checkJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/checkJob").CheckJobRequestFunction;
        };
        completeJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/completeJob").CompleteJobRequestFunction;
        };
        archiveJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/archiveJob").ArchiveJobRequestFunction;
        };
        unarchiveJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/unarchiveJob").UnarchiveJobRequestFunction;
        };
        quoteJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/quoteJob").QuoteJobRequestFunction;
        };
        applyJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/applyJob").ApplyJobRequestFunction;
        };
        reapplyJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/reapplyJob").ReapplyJobRequestFunction;
        };
        payJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/payJob").PayJobRequestFunction;
        };
        viewJobSatNote: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/viewJobSatNote").ViewJobSatNoteRequestFunction;
        };
        signJobSatNote: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/signJobSatNote").SignJobSatNoteRequestFunction;
        };
        approveJobSatNote: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/approveJobSatNote").ApproveJobSatNoteRequestFunction;
        };
        lenderReviewJobSatNote: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/lenderReviewJobSatNote").LenderReviewJobSatNoteRequestFunction;
        };
        delayJobSatNote: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/delayJobSatNote").DelayJobSatNoteRequestFunction;
        };
        payoutJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/payoutJob").PayoutJobRequestFunction;
        };
        payoutsJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/payoutsJob").PayoutsJobRequestFunction;
        };
        overrideJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/overrideJob").OverrideJobRequestFunction;
        };
        jobCheckoutLink: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/jobCheckoutLink").JobCheckoutLinkRequestFunction;
        };
        jobCompanyInfo: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/jobCompanyInfo").JobCompanyInfoRequestFunction;
        };
        exportJobPayouts: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/exportJobPayouts").ExportJobPayoutsRequestFunction;
        };
    };
    lead: {
        getLeads: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getLeads").GetLeadsRequestFunction;
        };
        postLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postLead").PostLeadRequestFunction;
        };
        getLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getLead").GetLeadRequestFunction;
        };
        putLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putLead").PutLeadRequestFunction;
        };
        deleteLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteLead").DeleteLeadRequestFunction;
        };
        applyInviteLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/applyInviteLead").ApplyInviteLeadRequestFunction;
        };
        budgetLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/budgetLead").BudgetLeadRequestFunction;
        };
        quoteLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/quoteLead").QuoteLeadRequestFunction;
        };
        sendLeadJob: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/sendLeadJob").SendLeadJobRequestFunction;
        };
        tradeLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/tradeLead").TradeLeadRequestFunction;
        };
        tradeQuoteApprovalLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/tradeQuoteApprovalLead").TradeQuoteApprovalLeadRequestFunction;
        };
        matchTradesLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/matchTradesLead").MatchTradesLeadRequestFunction;
        };
        connectTradesLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/connectTradesLead").ConnectTradesLeadRequestFunction;
        };
        acceptedJobSummaryLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/acceptedJobSummaryLead").AcceptedJobSummaryLeadRequestFunction;
        };
        referLead: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/referLead").ReferLeadRequestFunction;
        };
    };
    monitor: {
        getMonitors: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getMonitors").GetMonitorsRequestFunction;
        };
        postMonitor: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postMonitor").PostMonitorRequestFunction;
        };
        getMonitor: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getMonitor").GetMonitorRequestFunction;
        };
        putMonitor: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putMonitor").PutMonitorRequestFunction;
        };
        deleteMonitor: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteMonitor").DeleteMonitorRequestFunction;
        };
        postMonitorFlag: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postMonitorFlag").PostMonitorFlagRequestFunction;
        };
    };
    onboarding: {
        getOnboardings: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getOnboardings").GetOnboardingsRequestFunction;
        };
        postOnboarding: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postOnboarding").PostOnboardingRequestFunction;
        };
        getOnboarding: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getOnboarding").GetOnboardingRequestFunction;
        };
        putOnboarding: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putOnboarding").PutOnboardingRequestFunction;
        };
        deleteOnboarding: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteOnboarding").DeleteOnboardingRequestFunction;
        };
        postOnboardingDecision: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postOnboardingDecision").PostOnboardingDecisionRequestFunction;
        };
    };
    partner: {
        getPartners: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getPartners").GetPartnersRequestFunction;
        };
        postPartner: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postPartner").PostPartnerRequestFunction;
        };
        getPartner: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getPartner").GetPartnerRequestFunction;
        };
        putPartner: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putPartner").PutPartnerRequestFunction;
        };
        deletePartner: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deletePartner").DeletePartnerRequestFunction;
        };
        postPartnerReferrals: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postPartnerReferrals").PostPartnerReferralsRequestFunction;
        };
    };
    payment: {
        getPayments: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getPayments").GetPaymentsRequestFunction;
        };
        postPayment: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postPayment").PostPaymentRequestFunction;
        };
        getPayment: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getPayment").GetPaymentRequestFunction;
        };
        putPayment: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putPayment").PutPaymentRequestFunction;
        };
        deletePayment: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deletePayment").DeletePaymentRequestFunction;
        };
        markPayment: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/markPayment").MarkPaymentRequestFunction;
        };
    };
    rate: {
        infoRate: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoRate").InfoRateRequestFunction;
        };
        getRates: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getRates").GetRatesRequestFunction;
        };
        postRate: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postRate").PostRateRequestFunction;
        };
        getRate: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getRate").GetRateRequestFunction;
        };
        putRate: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putRate").PutRateRequestFunction;
        };
        deleteRate: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteRate").DeleteRateRequestFunction;
        };
    };
    subscription: {
        getSubscriptions: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getSubscriptions").GetSubscriptionsRequestFunction;
        };
        postSubscription: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postSubscription").PostSubscriptionRequestFunction;
        };
        getSubscription: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getSubscription").GetSubscriptionRequestFunction;
        };
        putSubscription: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putSubscription").PutSubscriptionRequestFunction;
        };
        deleteSubscription: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteSubscription").DeleteSubscriptionRequestFunction;
        };
        pendingSubscription: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/pendingSubscription").PendingSubscriptionRequestFunction;
        };
    };
    task: {
        runner: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/runner").RunnerRequestFunction;
        };
    };
    tradeSummary: {
        infoTradeSummary: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/infoTradeSummary").InfoTradeSummaryRequestFunction;
        };
    };
    training: {
        getTrainings: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getTrainings").GetTrainingsRequestFunction;
        };
        postTraining: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postTraining").PostTrainingRequestFunction;
        };
        getTraining: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getTraining").GetTrainingRequestFunction;
        };
        putTraining: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putTraining").PutTrainingRequestFunction;
        };
        deleteTraining: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteTraining").DeleteTrainingRequestFunction;
        };
    };
    transaction: {
        getTransactions: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getTransactions").GetTransactionsRequestFunction;
        };
        postTransaction: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/postTransaction").PostTransactionRequestFunction;
        };
        getTransaction: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/getTransaction").GetTransactionRequestFunction;
        };
        putTransaction: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/putTransaction").PutTransactionRequestFunction;
        };
        deleteTransaction: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/deleteTransaction").DeleteTransactionRequestFunction;
        };
    };
    webhook: {
        providerCheckWebhook: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/providerCheckWebhook").ProviderCheckWebhookRequestFunction;
        };
        providerWebhook: {
            key: string;
            method: (operationArgs?: OperationArgs) => import("../generated/operations/providerWebhook").ProviderWebhookRequestFunction;
        };
    };
    address: {
        find: {
            key: string;
            method: (request: import("./external/address").FindRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
                body: import("./external/address").FindResponse;
            }, import("./external/address").FindResponse>;
        };
    };
    contract: {
        generate: {
            key: string;
            method: ({ body, }: import("./external/contract").ContractGenerateRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
                body: import("./external/contract").ContractResponse;
            }, import("./external/contract").ContractResponse>;
        };
    };
    payouts: {
        payouts: {
            key: string;
            method: () => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
                body: externalServices.PayoutsResponse;
            }, externalServices.PayoutsResponse>;
        };
    };
    pdf: {
        compress: {
            key: string;
            method: ({ body: { content, mimetype }, }: import("./external/pdf").CompressRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
                body: import("./external/pdf").CompressRequest;
            }, import("../types").StringIndexedObject<any>>;
        };
        create: {
            key: string;
            method: ({ body, }: import("./external/pdf").CreateRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
                body: import("./external/pdf").CreateRequest;
            }, import("../types").StringIndexedObject<any>>;
        };
        satnote: {
            key: string;
            method: ({ body: { job, credit, satNote, acceptedTerms }, }: import("./external/pdf").SatNoteRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
                body: import("./external/pdf").SatNoteRequest;
            }, import("../types").StringIndexedObject<any>>;
        };
    };
    personalGuarantee: {
        generate: {
            key: string;
            method: ({ body, }: import("./external/personalGuarantee").PersonalGuaranteeGenerateRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
                body: externalServices.PersonalGuaranteeResponse;
            }, externalServices.PersonalGuaranteeResponse>;
        };
    };
    sheets: {
        read: {
            key: string;
            method: ({ params, }: import("./external/sheets").ReadRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
                body: import("./external/sheets").ReadResponse;
            }, import("./external/sheets").ReadResponse>;
        };
    };
    subsSheet: {
        write: {
            key: string;
            method: ({ body, }: import("./external/subsSheet").WriteRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
                body: import("./external/subsSheet").SubSheetResponse;
            }, import("./external/subsSheet").SubSheetResponse>;
        };
        update: {
            key: string;
            method: ({ body, }: import("./external/subsSheet").UpdateRequest) => import("@kanda-libs/openapi-io-ts-runtime").RequestFunction<{
                body: import("./external/subsSheet").SubSheetResponse;
            }, import("./external/subsSheet").SubSheetResponse>;
        };
    };
};
export { adhoc, audit, authUser, company, credit, document, enrolment, enterprise, event, infoAuth, infoCache, infoCampaign, infoCompany, infoCustomer, infoDirector, infoEnterpriseRole, infoEnterprise, infoEntity, infoGhost, infoHealth, infoIP, infoIntroductionStats, infoLead, infoOnboarding, infoPartner, infoQuery, infoRedirect, infoRelation, infoSearch, infoStats, infoValidation, infoWorkType, introduction, job, lead, monitor, onboarding, partner, payment, rate, subscription, task, tradeSummary, training, transaction, webhook, address, contract, payouts, pdf, personalGuarantee, sheets, subsSheet, };
export default services;
