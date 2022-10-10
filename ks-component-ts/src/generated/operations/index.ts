import {
  HttpRequestAdapter,
  requestFunctionBuilder,
} from "@openapi-io-ts/runtime";
import {
  applyCreditOperation,
  ApplyCreditRequestFunction,
} from "./applyCredit";
import { applyJobOperation, ApplyJobRequestFunction } from "./applyJob";
import {
  approveCompanyOperation,
  ApproveCompanyRequestFunction,
} from "./approveCompany";
import {
  approveJobSatNoteOperation,
  ApproveJobSatNoteRequestFunction,
} from "./approveJobSatNote";
import { archiveJobOperation, ArchiveJobRequestFunction } from "./archiveJob";
import {
  checkCreditOperation,
  CheckCreditRequestFunction,
} from "./checkCredit";
import { checkJobOperation, CheckJobRequestFunction } from "./checkJob";
import {
  completeJobOperation,
  CompleteJobRequestFunction,
} from "./completeJob";
import {
  declineCompanyOperation,
  DeclineCompanyRequestFunction,
} from "./declineCompany";
import {
  deleteCompanyOperation,
  DeleteCompanyRequestFunction,
} from "./deleteCompany";
import {
  deleteCreditOperation,
  DeleteCreditRequestFunction,
} from "./deleteCredit";
import {
  deleteDocumentOperation,
  DeleteDocumentRequestFunction,
} from "./deleteDocument";
import { deleteJobOperation, DeleteJobRequestFunction } from "./deleteJob";
import {
  deletePaymentOperation,
  DeletePaymentRequestFunction,
} from "./deletePayment";
import {
  deleteSubscriptionOperation,
  DeleteSubscriptionRequestFunction,
} from "./deleteSubscription";
import {
  directorCompanyOperation,
  DirectorCompanyRequestFunction,
} from "./directorCompany";
import {
  getCompaniesOperation,
  GetCompaniesRequestFunction,
} from "./getCompanies";
import { getCompanyOperation, GetCompanyRequestFunction } from "./getCompany";
import {
  getCompanyIdentityOperation,
  GetCompanyIdentityRequestFunction,
} from "./getCompanyIdentity";
import { getCreditOperation, GetCreditRequestFunction } from "./getCredit";
import { getCreditsOperation, GetCreditsRequestFunction } from "./getCredits";
import {
  getDocumentOperation,
  GetDocumentRequestFunction,
} from "./getDocument";
import {
  getDocumentsOperation,
  GetDocumentsRequestFunction,
} from "./getDocuments";
import { getJobOperation, GetJobRequestFunction } from "./getJob";
import { getJobsOperation, GetJobsRequestFunction } from "./getJobs";
import { getPaymentOperation, GetPaymentRequestFunction } from "./getPayment";
import {
  getPaymentsOperation,
  GetPaymentsRequestFunction,
} from "./getPayments";
import {
  getSubscriptionOperation,
  GetSubscriptionRequestFunction,
} from "./getSubscription";
import {
  getSubscriptionsOperation,
  GetSubscriptionsRequestFunction,
} from "./getSubscriptions";
import { infoAuthOperation, InfoAuthRequestFunction } from "./infoAuth";
import {
  infoClaimAccountOperation,
  InfoClaimAccountRequestFunction,
} from "./infoClaimAccount";
import {
  infoCompanyOperation,
  InfoCompanyRequestFunction,
} from "./infoCompany";
import {
  infoCustomerOperation,
  InfoCustomerRequestFunction,
} from "./infoCustomer";
import { infoGhostOperation, InfoGhostRequestFunction } from "./infoGhost";
import { infoHealthOperation, InfoHealthRequestFunction } from "./infoHealth";
import { infoIPOperation, InfoIPRequestFunction } from "./infoIP";
import {
  infoPasswordOperation,
  InfoPasswordRequestFunction,
} from "./infoPassword";
import {
  infoValidateEmailOperation,
  InfoValidateEmailRequestFunction,
} from "./infoValidateEmail";
import { infoVerifyOperation, InfoVerifyRequestFunction } from "./infoVerify";
import {
  jobCompanyInfoOperation,
  JobCompanyInfoRequestFunction,
} from "./jobCompanyInfo";
import {
  markPaymentOperation,
  MarkPaymentRequestFunction,
} from "./markPayment";
import { meOperation, MeRequestFunction } from "./me";
import { payJobOperation, PayJobRequestFunction } from "./payJob";
import { payoutJobOperation, PayoutJobRequestFunction } from "./payoutJob";
import {
  pendingSubscriptionOperation,
  PendingSubscriptionRequestFunction,
} from "./pendingSubscription";
import {
  postCompanyOperation,
  PostCompanyRequestFunction,
} from "./postCompany";
import {
  postCompanyIdentityOperation,
  PostCompanyIdentityRequestFunction,
} from "./postCompanyIdentity";
import { postCreditOperation, PostCreditRequestFunction } from "./postCredit";
import {
  postDocumentOperation,
  PostDocumentRequestFunction,
} from "./postDocument";
import { postJobOperation, PostJobRequestFunction } from "./postJob";
import { postMeOperation, PostMeRequestFunction } from "./postMe";
import {
  postPaymentOperation,
  PostPaymentRequestFunction,
} from "./postPayment";
import {
  postSubscriptionOperation,
  PostSubscriptionRequestFunction,
} from "./postSubscription";
import {
  providerWebhookOperation,
  ProviderWebhookRequestFunction,
} from "./providerWebhook";
import { putCompanyOperation, PutCompanyRequestFunction } from "./putCompany";
import { putCreditOperation, PutCreditRequestFunction } from "./putCredit";
import {
  putDocumentOperation,
  PutDocumentRequestFunction,
} from "./putDocument";
import { putJobOperation, PutJobRequestFunction } from "./putJob";
import { putMeOperation, PutMeRequestFunction } from "./putMe";
import { putPaymentOperation, PutPaymentRequestFunction } from "./putPayment";
import {
  putSubscriptionOperation,
  PutSubscriptionRequestFunction,
} from "./putSubscription";
import {
  quoteCreditOperation,
  QuoteCreditRequestFunction,
} from "./quoteCredit";
import { resendJobOperation, ResendJobRequestFunction } from "./resendJob";
import { runnerOperation, RunnerRequestFunction } from "./runner";
import { sendJobOperation, SendJobRequestFunction } from "./sendJob";
import { signCreditOperation, SignCreditRequestFunction } from "./signCredit";
import {
  signJobSateNoteOperation,
  SignJobSateNoteRequestFunction,
} from "./signJobSateNote";
import {
  viewJobSatNoteOperation,
  ViewJobSatNoteRequestFunction,
} from "./viewJobSatNote";

export const operations = {
  me: meOperation,
  postMe: postMeOperation,
  putMe: putMeOperation,
  infoHealth: infoHealthOperation,
  infoGhost: infoGhostOperation,
  infoCompany: infoCompanyOperation,
  infoCustomer: infoCustomerOperation,
  infoAuth: infoAuthOperation,
  infoVerify: infoVerifyOperation,
  infoPassword: infoPasswordOperation,
  infoClaimAccount: infoClaimAccountOperation,
  infoIP: infoIPOperation,
  infoValidateEmail: infoValidateEmailOperation,
  getCompanies: getCompaniesOperation,
  postCompany: postCompanyOperation,
  getCompany: getCompanyOperation,
  putCompany: putCompanyOperation,
  deleteCompany: deleteCompanyOperation,
  getCompanyIdentity: getCompanyIdentityOperation,
  postCompanyIdentity: postCompanyIdentityOperation,
  directorCompany: directorCompanyOperation,
  approveCompany: approveCompanyOperation,
  declineCompany: declineCompanyOperation,
  getJobs: getJobsOperation,
  postJob: postJobOperation,
  getJob: getJobOperation,
  putJob: putJobOperation,
  deleteJob: deleteJobOperation,
  sendJob: sendJobOperation,
  resendJob: resendJobOperation,
  checkJob: checkJobOperation,
  completeJob: completeJobOperation,
  archiveJob: archiveJobOperation,
  applyJob: applyJobOperation,
  payJob: payJobOperation,
  viewJobSatNote: viewJobSatNoteOperation,
  signJobSateNote: signJobSateNoteOperation,
  approveJobSatNote: approveJobSatNoteOperation,
  payoutJob: payoutJobOperation,
  jobCompanyInfo: jobCompanyInfoOperation,
  getPayments: getPaymentsOperation,
  postPayment: postPaymentOperation,
  getPayment: getPaymentOperation,
  putPayment: putPaymentOperation,
  deletePayment: deletePaymentOperation,
  markPayment: markPaymentOperation,
  getCredits: getCreditsOperation,
  postCredit: postCreditOperation,
  getCredit: getCreditOperation,
  putCredit: putCreditOperation,
  deleteCredit: deleteCreditOperation,
  quoteCredit: quoteCreditOperation,
  applyCredit: applyCreditOperation,
  checkCredit: checkCreditOperation,
  signCredit: signCreditOperation,
  getDocuments: getDocumentsOperation,
  postDocument: postDocumentOperation,
  getDocument: getDocumentOperation,
  putDocument: putDocumentOperation,
  deleteDocument: deleteDocumentOperation,
  getSubscriptions: getSubscriptionsOperation,
  postSubscription: postSubscriptionOperation,
  getSubscription: getSubscriptionOperation,
  putSubscription: putSubscriptionOperation,
  deleteSubscription: deleteSubscriptionOperation,
  pendingSubscription: pendingSubscriptionOperation,
  providerWebhook: providerWebhookOperation,
  runner: runnerOperation,
} as const;

export interface OperationRequestFunctionMap {
  me: MeRequestFunction;
  postMe: PostMeRequestFunction;
  putMe: PutMeRequestFunction;
  infoHealth: InfoHealthRequestFunction;
  infoGhost: InfoGhostRequestFunction;
  infoCompany: InfoCompanyRequestFunction;
  infoCustomer: InfoCustomerRequestFunction;
  infoAuth: InfoAuthRequestFunction;
  infoVerify: InfoVerifyRequestFunction;
  infoPassword: InfoPasswordRequestFunction;
  infoClaimAccount: InfoClaimAccountRequestFunction;
  infoIP: InfoIPRequestFunction;
  infoValidateEmail: InfoValidateEmailRequestFunction;
  getCompanies: GetCompaniesRequestFunction;
  postCompany: PostCompanyRequestFunction;
  getCompany: GetCompanyRequestFunction;
  putCompany: PutCompanyRequestFunction;
  deleteCompany: DeleteCompanyRequestFunction;
  getCompanyIdentity: GetCompanyIdentityRequestFunction;
  postCompanyIdentity: PostCompanyIdentityRequestFunction;
  directorCompany: DirectorCompanyRequestFunction;
  approveCompany: ApproveCompanyRequestFunction;
  declineCompany: DeclineCompanyRequestFunction;
  getJobs: GetJobsRequestFunction;
  postJob: PostJobRequestFunction;
  getJob: GetJobRequestFunction;
  putJob: PutJobRequestFunction;
  deleteJob: DeleteJobRequestFunction;
  sendJob: SendJobRequestFunction;
  resendJob: ResendJobRequestFunction;
  checkJob: CheckJobRequestFunction;
  completeJob: CompleteJobRequestFunction;
  archiveJob: ArchiveJobRequestFunction;
  applyJob: ApplyJobRequestFunction;
  payJob: PayJobRequestFunction;
  viewJobSatNote: ViewJobSatNoteRequestFunction;
  signJobSateNote: SignJobSateNoteRequestFunction;
  approveJobSatNote: ApproveJobSatNoteRequestFunction;
  payoutJob: PayoutJobRequestFunction;
  jobCompanyInfo: JobCompanyInfoRequestFunction;
  getPayments: GetPaymentsRequestFunction;
  postPayment: PostPaymentRequestFunction;
  getPayment: GetPaymentRequestFunction;
  putPayment: PutPaymentRequestFunction;
  deletePayment: DeletePaymentRequestFunction;
  markPayment: MarkPaymentRequestFunction;
  getCredits: GetCreditsRequestFunction;
  postCredit: PostCreditRequestFunction;
  getCredit: GetCreditRequestFunction;
  putCredit: PutCreditRequestFunction;
  deleteCredit: DeleteCreditRequestFunction;
  quoteCredit: QuoteCreditRequestFunction;
  applyCredit: ApplyCreditRequestFunction;
  checkCredit: CheckCreditRequestFunction;
  signCredit: SignCreditRequestFunction;
  getDocuments: GetDocumentsRequestFunction;
  postDocument: PostDocumentRequestFunction;
  getDocument: GetDocumentRequestFunction;
  putDocument: PutDocumentRequestFunction;
  deleteDocument: DeleteDocumentRequestFunction;
  getSubscriptions: GetSubscriptionsRequestFunction;
  postSubscription: PostSubscriptionRequestFunction;
  getSubscription: GetSubscriptionRequestFunction;
  putSubscription: PutSubscriptionRequestFunction;
  deleteSubscription: DeleteSubscriptionRequestFunction;
  pendingSubscription: PendingSubscriptionRequestFunction;
  providerWebhook: ProviderWebhookRequestFunction;
  runner: RunnerRequestFunction;
}

export const requestFunctionsBuilder = (
  requestAdapter: HttpRequestAdapter
): OperationRequestFunctionMap => ({
  me: requestFunctionBuilder(operations.me, requestAdapter),
  postMe: requestFunctionBuilder(operations.postMe, requestAdapter),
  putMe: requestFunctionBuilder(operations.putMe, requestAdapter),
  infoHealth: requestFunctionBuilder(operations.infoHealth, requestAdapter),
  infoGhost: requestFunctionBuilder(operations.infoGhost, requestAdapter),
  infoCompany: requestFunctionBuilder(operations.infoCompany, requestAdapter),
  infoCustomer: requestFunctionBuilder(operations.infoCustomer, requestAdapter),
  infoAuth: requestFunctionBuilder(operations.infoAuth, requestAdapter),
  infoVerify: requestFunctionBuilder(operations.infoVerify, requestAdapter),
  infoPassword: requestFunctionBuilder(operations.infoPassword, requestAdapter),
  infoClaimAccount: requestFunctionBuilder(
    operations.infoClaimAccount,
    requestAdapter
  ),
  infoIP: requestFunctionBuilder(operations.infoIP, requestAdapter),
  infoValidateEmail: requestFunctionBuilder(
    operations.infoValidateEmail,
    requestAdapter
  ),
  getCompanies: requestFunctionBuilder(operations.getCompanies, requestAdapter),
  postCompany: requestFunctionBuilder(operations.postCompany, requestAdapter),
  getCompany: requestFunctionBuilder(operations.getCompany, requestAdapter),
  putCompany: requestFunctionBuilder(operations.putCompany, requestAdapter),
  deleteCompany: requestFunctionBuilder(
    operations.deleteCompany,
    requestAdapter
  ),
  getCompanyIdentity: requestFunctionBuilder(
    operations.getCompanyIdentity,
    requestAdapter
  ),
  postCompanyIdentity: requestFunctionBuilder(
    operations.postCompanyIdentity,
    requestAdapter
  ),
  directorCompany: requestFunctionBuilder(
    operations.directorCompany,
    requestAdapter
  ),
  approveCompany: requestFunctionBuilder(
    operations.approveCompany,
    requestAdapter
  ),
  declineCompany: requestFunctionBuilder(
    operations.declineCompany,
    requestAdapter
  ),
  getJobs: requestFunctionBuilder(operations.getJobs, requestAdapter),
  postJob: requestFunctionBuilder(operations.postJob, requestAdapter),
  getJob: requestFunctionBuilder(operations.getJob, requestAdapter),
  putJob: requestFunctionBuilder(operations.putJob, requestAdapter),
  deleteJob: requestFunctionBuilder(operations.deleteJob, requestAdapter),
  sendJob: requestFunctionBuilder(operations.sendJob, requestAdapter),
  resendJob: requestFunctionBuilder(operations.resendJob, requestAdapter),
  checkJob: requestFunctionBuilder(operations.checkJob, requestAdapter),
  completeJob: requestFunctionBuilder(operations.completeJob, requestAdapter),
  archiveJob: requestFunctionBuilder(operations.archiveJob, requestAdapter),
  applyJob: requestFunctionBuilder(operations.applyJob, requestAdapter),
  payJob: requestFunctionBuilder(operations.payJob, requestAdapter),
  viewJobSatNote: requestFunctionBuilder(
    operations.viewJobSatNote,
    requestAdapter
  ),
  signJobSateNote: requestFunctionBuilder(
    operations.signJobSateNote,
    requestAdapter
  ),
  approveJobSatNote: requestFunctionBuilder(
    operations.approveJobSatNote,
    requestAdapter
  ),
  payoutJob: requestFunctionBuilder(operations.payoutJob, requestAdapter),
  jobCompanyInfo: requestFunctionBuilder(
    operations.jobCompanyInfo,
    requestAdapter
  ),
  getPayments: requestFunctionBuilder(operations.getPayments, requestAdapter),
  postPayment: requestFunctionBuilder(operations.postPayment, requestAdapter),
  getPayment: requestFunctionBuilder(operations.getPayment, requestAdapter),
  putPayment: requestFunctionBuilder(operations.putPayment, requestAdapter),
  deletePayment: requestFunctionBuilder(
    operations.deletePayment,
    requestAdapter
  ),
  markPayment: requestFunctionBuilder(operations.markPayment, requestAdapter),
  getCredits: requestFunctionBuilder(operations.getCredits, requestAdapter),
  postCredit: requestFunctionBuilder(operations.postCredit, requestAdapter),
  getCredit: requestFunctionBuilder(operations.getCredit, requestAdapter),
  putCredit: requestFunctionBuilder(operations.putCredit, requestAdapter),
  deleteCredit: requestFunctionBuilder(operations.deleteCredit, requestAdapter),
  quoteCredit: requestFunctionBuilder(operations.quoteCredit, requestAdapter),
  applyCredit: requestFunctionBuilder(operations.applyCredit, requestAdapter),
  checkCredit: requestFunctionBuilder(operations.checkCredit, requestAdapter),
  signCredit: requestFunctionBuilder(operations.signCredit, requestAdapter),
  getDocuments: requestFunctionBuilder(operations.getDocuments, requestAdapter),
  postDocument: requestFunctionBuilder(operations.postDocument, requestAdapter),
  getDocument: requestFunctionBuilder(operations.getDocument, requestAdapter),
  putDocument: requestFunctionBuilder(operations.putDocument, requestAdapter),
  deleteDocument: requestFunctionBuilder(
    operations.deleteDocument,
    requestAdapter
  ),
  getSubscriptions: requestFunctionBuilder(
    operations.getSubscriptions,
    requestAdapter
  ),
  postSubscription: requestFunctionBuilder(
    operations.postSubscription,
    requestAdapter
  ),
  getSubscription: requestFunctionBuilder(
    operations.getSubscription,
    requestAdapter
  ),
  putSubscription: requestFunctionBuilder(
    operations.putSubscription,
    requestAdapter
  ),
  deleteSubscription: requestFunctionBuilder(
    operations.deleteSubscription,
    requestAdapter
  ),
  pendingSubscription: requestFunctionBuilder(
    operations.pendingSubscription,
    requestAdapter
  ),
  providerWebhook: requestFunctionBuilder(
    operations.providerWebhook,
    requestAdapter
  ),
  runner: requestFunctionBuilder(operations.runner, requestAdapter),
});

export const authUserServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  me: requestFunctions.me,
  postMe: requestFunctions.postMe,
  putMe: requestFunctions.putMe,
});

export const infoHealthServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  infoHealth: requestFunctions.infoHealth,
});

export const infoGhostServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  infoGhost: requestFunctions.infoGhost,
});

export const infoCompanyServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  infoCompany: requestFunctions.infoCompany,
});

export const infoCustomerServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  infoCustomer: requestFunctions.infoCustomer,
});

export const infoAuthServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  infoAuth: requestFunctions.infoAuth,
  infoVerify: requestFunctions.infoVerify,
  infoPassword: requestFunctions.infoPassword,
  infoClaimAccount: requestFunctions.infoClaimAccount,
});

export const infoIPServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  infoIP: requestFunctions.infoIP,
});

export const infoValidationServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  infoValidateEmail: requestFunctions.infoValidateEmail,
});

export const companyServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  getCompanies: requestFunctions.getCompanies,
  postCompany: requestFunctions.postCompany,
  getCompany: requestFunctions.getCompany,
  putCompany: requestFunctions.putCompany,
  deleteCompany: requestFunctions.deleteCompany,
  getCompanyIdentity: requestFunctions.getCompanyIdentity,
  postCompanyIdentity: requestFunctions.postCompanyIdentity,
  directorCompany: requestFunctions.directorCompany,
  approveCompany: requestFunctions.approveCompany,
  declineCompany: requestFunctions.declineCompany,
});

export const jobServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  getJobs: requestFunctions.getJobs,
  postJob: requestFunctions.postJob,
  getJob: requestFunctions.getJob,
  putJob: requestFunctions.putJob,
  deleteJob: requestFunctions.deleteJob,
  sendJob: requestFunctions.sendJob,
  resendJob: requestFunctions.resendJob,
  checkJob: requestFunctions.checkJob,
  completeJob: requestFunctions.completeJob,
  archiveJob: requestFunctions.archiveJob,
  applyJob: requestFunctions.applyJob,
  payJob: requestFunctions.payJob,
  viewJobSatNote: requestFunctions.viewJobSatNote,
  signJobSateNote: requestFunctions.signJobSateNote,
  approveJobSatNote: requestFunctions.approveJobSatNote,
  payoutJob: requestFunctions.payoutJob,
  jobCompanyInfo: requestFunctions.jobCompanyInfo,
});

export const paymentServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  getPayments: requestFunctions.getPayments,
  postPayment: requestFunctions.postPayment,
  getPayment: requestFunctions.getPayment,
  putPayment: requestFunctions.putPayment,
  deletePayment: requestFunctions.deletePayment,
  markPayment: requestFunctions.markPayment,
});

export const creditServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  getCredits: requestFunctions.getCredits,
  postCredit: requestFunctions.postCredit,
  getCredit: requestFunctions.getCredit,
  putCredit: requestFunctions.putCredit,
  deleteCredit: requestFunctions.deleteCredit,
  quoteCredit: requestFunctions.quoteCredit,
  applyCredit: requestFunctions.applyCredit,
  checkCredit: requestFunctions.checkCredit,
  signCredit: requestFunctions.signCredit,
});

export const documentServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  getDocuments: requestFunctions.getDocuments,
  postDocument: requestFunctions.postDocument,
  getDocument: requestFunctions.getDocument,
  putDocument: requestFunctions.putDocument,
  deleteDocument: requestFunctions.deleteDocument,
});

export const subscriptionServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  getSubscriptions: requestFunctions.getSubscriptions,
  postSubscription: requestFunctions.postSubscription,
  getSubscription: requestFunctions.getSubscription,
  putSubscription: requestFunctions.putSubscription,
  deleteSubscription: requestFunctions.deleteSubscription,
  pendingSubscription: requestFunctions.pendingSubscription,
});

export const webhookServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  providerWebhook: requestFunctions.providerWebhook,
});

export const taskServiceBuilder = (
  requestFunctions: OperationRequestFunctionMap
) => ({
  runner: requestFunctions.runner,
});
