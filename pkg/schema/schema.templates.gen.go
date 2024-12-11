package schema

type TName string

const (
	DBV4_HO_AIP_HOWDENS                                TName = "DBV4_HO_AIP_HOWDENS"
	DBV4_HO_AIP_PREAPPROVED                            TName = "DBV4_HO_AIP_PREAPPROVED"
	DBV4_HO_APPLICATION_ACCEPTED_DEPOSIT_CHANGED       TName = "DBV4_HO_APPLICATION_ACCEPTED_DEPOSIT_CHANGED"
	DBV4_HO_APPLICATION_APPROVED                       TName = "DBV4_HO_APPLICATION_APPROVED"
	DBV4_HO_APPLICATION_CANCELLED                      TName = "DBV4_HO_APPLICATION_CANCELLED"
	DBV4_HO_APPLICATION_PAY_DEPOSI_CASH                TName = "DBV4_HO_APPLICATION_PAY_DEPOSI_CASH"
	DBV4_HO_APPLICATION_PAY_DEPOSIT                    TName = "DBV4_HO_APPLICATION_PAY_DEPOSIT"
	DBV4_HO_APPLICATION_REFERRED                       TName = "DBV4_HO_APPLICATION_REFERRED"
	DBV4_HO_APPLICATION_REJECTED                       TName = "DBV4_HO_APPLICATION_REJECTED"
	DBV4_HO_APPLICATION_SAT_NOTE_SENT                  TName = "DBV4_HO_APPLICATION_SAT_NOTE_SENT"
	DBV4_HO_APPLICATION_SAT_NOTE_SENT_REMINDER         TName = "DBV4_HO_APPLICATION_SAT_NOTE_SENT_REMINDER"
	DBV4_HO_APPLICATION_SAT_NOTE_SIGNED                TName = "DBV4_HO_APPLICATION_SAT_NOTE_SIGNED"
	DBV4_HO_APPLICATION_SIGN_DOCUMENTS                 TName = "DBV4_HO_APPLICATION_SIGN_DOCUMENTS"
	DBV4_HO_CONTINUE_CHECKOUT                          TName = "DBV4_HO_CONTINUE_CHECKOUT"
	DBV4_HO_INITIAL                                    TName = "DBV4_HO_INITIAL"
	DBV4_HO_JOB_DECLINED                               TName = "DBV4_HO_JOB_DECLINED"
	DBV4_HO_JOB_STARTED                                TName = "DBV4_HO_JOB_STARTED"
	DBV4_HO_LEAD_DETAILS_PROVIDED_TP_ASSIGNED          TName = "DBV4_HO_LEAD_DETAILS_PROVIDED_TP_ASSIGNED"
	DBV4_HO_LEAD_POSTED                                TName = "DBV4_HO_LEAD_POSTED"
	DBV4_HO_QUOTE_POSTED                               TName = "DBV4_HO_QUOTE_POSTED"
	DBV4_HO_SAT_NOTE_LENDER_REVIEW                     TName = "DBV4_HO_SAT_NOTE_LENDER_REVIEW"
	DBV4_HO_SAT_NOTE_LENDER_REVIEW_7K                  TName = "DBV4_HO_SAT_NOTE_LENDER_REVIEW_7K"
	DBV4_HO_SUBMIT_APPLICATION                         TName = "DBV4_HO_SUBMIT_APPLICATION"
	DBV4_HOWDENS_FROM_HO_APPLICATION_ACCEPTED          TName = "DBV4_HOWDENS_FROM_HO_APPLICATION_ACCEPTED"
	DBV4_HOWDENS_FROM_HO_APPLICATION_CANCELLED         TName = "DBV4_HOWDENS_FROM_HO_APPLICATION_CANCELLED"
	DBV4_HOWDENS_FROM_HO_APPLICATION_REFERRED          TName = "DBV4_HOWDENS_FROM_HO_APPLICATION_REFERRED"
	DBV4_HOWDENS_FROM_HO_COOLING_OFF_PERIOD_COMPLETE   TName = "DBV4_HOWDENS_FROM_HO_COOLING_OFF_PERIOD_COMPLETE"
	DBV4_HOWDENS_FROM_HO_CUSTOMER_REJECTED             TName = "DBV4_HOWDENS_FROM_HO_CUSTOMER_REJECTED"
	DBV4_HOWDENS_FROM_HO_INTRO_COMPLETED               TName = "DBV4_HOWDENS_FROM_HO_INTRO_COMPLETED"
	DBV4_HOWDENS_FROM_HO_INTRO_DECLINED                TName = "DBV4_HOWDENS_FROM_HO_INTRO_DECLINED"
	DBV4_HOWDENS_FROM_HO_INTRO_REJECTED                TName = "DBV4_HOWDENS_FROM_HO_INTRO_REJECTED"
	DBV4_HOWDENS_FROM_HO_INTRO_SENT                    TName = "DBV4_HOWDENS_FROM_HO_INTRO_SENT"
	DBV4_HOWDENS_FROM_HO_JOB_DECLINED                  TName = "DBV4_HOWDENS_FROM_HO_JOB_DECLINED"
	DBV4_HOWDENS_FROM_HO_SAT_NOTE_APPROVED             TName = "DBV4_HOWDENS_FROM_HO_SAT_NOTE_APPROVED"
	DBV4_HOWDENS_FROM_TP_INTRO_COMPLETED               TName = "DBV4_HOWDENS_FROM_TP_INTRO_COMPLETED"
	DBV4_HOWDENS_FROM_TP_INTRO_REJECTED                TName = "DBV4_HOWDENS_FROM_TP_INTRO_REJECTED"
	DBV4_HOWDENS_FROM_TP_JOB_PAID_OUT                  TName = "DBV4_HOWDENS_FROM_TP_JOB_PAID_OUT"
	DBV4_HOWDENS_HO_APPLICATION_CANCELLED              TName = "DBV4_HOWDENS_HO_APPLICATION_CANCELLED"
	DBV4_HOWDENS_HO_APPLICATION_REFERRED               TName = "DBV4_HOWDENS_HO_APPLICATION_REFERRED"
	DBV4_HOWDENS_HO_APPLICATION_REJECTED               TName = "DBV4_HOWDENS_HO_APPLICATION_REJECTED"
	DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SENT          TName = "DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SENT"
	DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SENT_REMINDER TName = "DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SENT_REMINDER"
	DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SIGNED        TName = "DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SIGNED"
	DBV4_HOWDENS_HO_APPLICATION_SIGN_DOCUMENTS         TName = "DBV4_HOWDENS_HO_APPLICATION_SIGN_DOCUMENTS"
	DBV4_HOWDENS_HO_JOB_DECLINED                       TName = "DBV4_HOWDENS_HO_JOB_DECLINED"
	DBV4_HOWDENS_HO_SAT_NOTE_LENDER_REVIEW             TName = "DBV4_HOWDENS_HO_SAT_NOTE_LENDER_REVIEW"
	DBV4_HOWDENS_TO_HO_APPLICATION_APPROVED            TName = "DBV4_HOWDENS_TO_HO_APPLICATION_APPROVED"
	DBV4_HOWDENS_TO_HO_CONVERTED_JOB                   TName = "DBV4_HOWDENS_TO_HO_CONVERTED_JOB"
	DBV4_HOWDENS_TO_HO_CONVERTED_JOB_REMINDER          TName = "DBV4_HOWDENS_TO_HO_CONVERTED_JOB_REMINDER"
	DBV4_HOWDENS_TO_HO_INTRO                           TName = "DBV4_HOWDENS_TO_HO_INTRO"
	DBV4_HOWDENS_TO_HO_INTRO_BUDGET_REMINDER           TName = "DBV4_HOWDENS_TO_HO_INTRO_BUDGET_REMINDER"
	DBV4_HOWDENS_TO_HO_INTRO_COMPLETED                 TName = "DBV4_HOWDENS_TO_HO_INTRO_COMPLETED"
	DBV4_HOWDENS_TO_TP_APPLICATION_ACCEPTED            TName = "DBV4_HOWDENS_TO_TP_APPLICATION_ACCEPTED"
	DBV4_HOWDENS_TO_TP_GOODS_DELIVERED                 TName = "DBV4_HOWDENS_TO_TP_GOODS_DELIVERED"
	DBV4_HOWDENS_TO_TP_INTRO                           TName = "DBV4_HOWDENS_TO_TP_INTRO"
	DBV4_HOWDENS_TO_TP_JOB_AMENDED                     TName = "DBV4_HOWDENS_TO_TP_JOB_AMENDED"
	DBV4_HOWDENS_TP_APPLICATION_CANCELLED              TName = "DBV4_HOWDENS_TP_APPLICATION_CANCELLED"
	DBV4_HOWDENS_TP_CUSTOMER_REFERRED                  TName = "DBV4_HOWDENS_TP_CUSTOMER_REFERRED"
	DBV4_HOWDENS_TP_CUSTOMER_REJECTED                  TName = "DBV4_HOWDENS_TP_CUSTOMER_REJECTED"
	DBV4_HOWDENS_TP_JOB_DECLINED                       TName = "DBV4_HOWDENS_TP_JOB_DECLINED"
	DBV4_HOWDENS_TP_JOB_PAID_OUT                       TName = "DBV4_HOWDENS_TP_JOB_PAID_OUT"
	DBV4_HOWDENS_TP_SAT_NOTE_APPROVED                  TName = "DBV4_HOWDENS_TP_SAT_NOTE_APPROVED"
	DBV4_LENDER_SATNOTE_REVIEW                         TName = "DBV4_LENDER_SATNOTE_REVIEW"
	DBV4_STAFF_AUDIT_NOTIFICATION                      TName = "DBV4_STAFF_AUDIT_NOTIFICATION"
	DBV4_TP_2ND_LINE_REJECTED                          TName = "DBV4_TP_2ND_LINE_REJECTED"
	DBV4_TP_ACCOUNT_APPROVED                           TName = "DBV4_TP_ACCOUNT_APPROVED"
	DBV4_TP_APPLICATION_ACCEPTED                       TName = "DBV4_TP_APPLICATION_ACCEPTED"
	DBV4_TP_APPLICATION_ACCEPTED_DEPOSIT_CHANGED       TName = "DBV4_TP_APPLICATION_ACCEPTED_DEPOSIT_CHANGED"
	DBV4_TP_APPLICATION_CANCELLED                      TName = "DBV4_TP_APPLICATION_CANCELLED"
	DBV4_TP_APPLICATION_PENDING                        TName = "DBV4_TP_APPLICATION_PENDING"
	DBV4_TP_CUSTOMER_REFERRED                          TName = "DBV4_TP_CUSTOMER_REFERRED"
	DBV4_TP_CUSTOMER_REJECTED                          TName = "DBV4_TP_CUSTOMER_REJECTED"
	DBV4_TP_JOB_DECLINED                               TName = "DBV4_TP_JOB_DECLINED"
	DBV4_TP_JOB_PAID_OUT                               TName = "DBV4_TP_JOB_PAID_OUT"
	DBV4_TP_JOB_SENT                                   TName = "DBV4_TP_JOB_SENT"
	DBV4_TP_LEAD_DETAILS_PROVIDED                      TName = "DBV4_TP_LEAD_DETAILS_PROVIDED"
	DBV4_TP_LEAD_JOB_REQUESTED                         TName = "DBV4_TP_LEAD_JOB_REQUESTED"
	DBV4_TP_LEAD_REQUESTED                             TName = "DBV4_TP_LEAD_REQUESTED"
	DBV4_TP_PREMIUM_CREDIT_SIGNED                      TName = "DBV4_TP_PREMIUM_CREDIT_SIGNED"
	DBV4_TP_SAT_NOTE_APPROVED                          TName = "DBV4_TP_SAT_NOTE_APPROVED"
	DBV4_TP_SAT_NOTE_DELAYED                           TName = "DBV4_TP_SAT_NOTE_DELAYED"
	DBV4_TP_SAT_NOTE_LENDER_REVIEW                     TName = "DBV4_TP_SAT_NOTE_LENDER_REVIEW"
	DBV4_TP_SAT_NOTE_LENDER_REVIEWED                   TName = "DBV4_TP_SAT_NOTE_LENDER_REVIEWED"
	DBV4_TP_SAT_NOTE_SIGNED                            TName = "DBV4_TP_SAT_NOTE_SIGNED"
	DBV4_TP_SAT_NOTE_VIEWED                            TName = "DBV4_TP_SAT_NOTE_VIEWED"
	DBV4_TP_SIGN_DOCUMENTS                             TName = "DBV4_TP_SIGN_DOCUMENTS"
	DBV4_TP_SUBSCRIPTION_REMINDER                      TName = "DBV4_TP_SUBSCRIPTION_REMINDER"
	DBV4_USER_CLAIM_ACCOUNT                            TName = "DBV4_USER_CLAIM_ACCOUNT"
	DBV4_USER_CONSENT                                  TName = "DBV4_USER_CONSENT"
	DBV4_USER_DEV_CLAIM_ACCOUNT                        TName = "DBV4_USER_DEV_CLAIM_ACCOUNT"
	DBV4_USER_ID_CHECKS_DECLINED                       TName = "DBV4_USER_ID_CHECKS_DECLINED"
	DBV4_USER_ID_CHECKS_VERIFIED                       TName = "DBV4_USER_ID_CHECKS_VERIFIED"
	DBV4_USER_KANDA_REFEREE_INVITE                     TName = "DBV4_USER_KANDA_REFEREE_INVITE"
	DBV4_USER_LEGACY_MIGRATION                         TName = "DBV4_USER_LEGACY_MIGRATION"
	DBV4_USER_REFEREE_INVITE                           TName = "DBV4_USER_REFEREE_INVITE"
	DBV4_USER_RESET_PASSWORD                           TName = "DBV4_USER_RESET_PASSWORD"
	DBV4_USER_SIGNUP                                   TName = "DBV4_USER_SIGNUP"
	DBV4_USER_VERIFY_DIRECTOR                          TName = "DBV4_USER_VERIFY_DIRECTOR"
	DBV4_USER_VERIFY_DIRECTOR_REMINDER                 TName = "DBV4_USER_VERIFY_DIRECTOR_REMINDER"
	DBV4_USER_VERIFY_EMAIL                             TName = "DBV4_USER_VERIFY_EMAIL"
)

var TemplateM = map[string]TName{
	"DBV4_HO_AIP_HOWDENS":                                DBV4_HO_AIP_HOWDENS,
	"DBV4_HO_AIP_PREAPPROVED":                            DBV4_HO_AIP_PREAPPROVED,
	"DBV4_HO_APPLICATION_ACCEPTED_DEPOSIT_CHANGED":       DBV4_HO_APPLICATION_ACCEPTED_DEPOSIT_CHANGED,
	"DBV4_HO_APPLICATION_APPROVED":                       DBV4_HO_APPLICATION_APPROVED,
	"DBV4_HO_APPLICATION_CANCELLED":                      DBV4_HO_APPLICATION_CANCELLED,
	"DBV4_HO_APPLICATION_PAY_DEPOSI_CASH":                DBV4_HO_APPLICATION_PAY_DEPOSI_CASH,
	"DBV4_HO_APPLICATION_PAY_DEPOSIT":                    DBV4_HO_APPLICATION_PAY_DEPOSIT,
	"DBV4_HO_APPLICATION_REFERRED":                       DBV4_HO_APPLICATION_REFERRED,
	"DBV4_HO_APPLICATION_REJECTED":                       DBV4_HO_APPLICATION_REJECTED,
	"DBV4_HO_APPLICATION_SAT_NOTE_SENT":                  DBV4_HO_APPLICATION_SAT_NOTE_SENT,
	"DBV4_HO_APPLICATION_SAT_NOTE_SENT_REMINDER":         DBV4_HO_APPLICATION_SAT_NOTE_SENT_REMINDER,
	"DBV4_HO_APPLICATION_SAT_NOTE_SIGNED":                DBV4_HO_APPLICATION_SAT_NOTE_SIGNED,
	"DBV4_HO_APPLICATION_SIGN_DOCUMENTS":                 DBV4_HO_APPLICATION_SIGN_DOCUMENTS,
	"DBV4_HO_CONTINUE_CHECKOUT":                          DBV4_HO_CONTINUE_CHECKOUT,
	"DBV4_HO_INITIAL":                                    DBV4_HO_INITIAL,
	"DBV4_HO_JOB_DECLINED":                               DBV4_HO_JOB_DECLINED,
	"DBV4_HO_JOB_STARTED":                                DBV4_HO_JOB_STARTED,
	"DBV4_HO_LEAD_DETAILS_PROVIDED_TP_ASSIGNED":          DBV4_HO_LEAD_DETAILS_PROVIDED_TP_ASSIGNED,
	"DBV4_HO_LEAD_POSTED":                                DBV4_HO_LEAD_POSTED,
	"DBV4_HO_QUOTE_POSTED":                               DBV4_HO_QUOTE_POSTED,
	"DBV4_HO_SAT_NOTE_LENDER_REVIEW":                     DBV4_HO_SAT_NOTE_LENDER_REVIEW,
	"DBV4_HO_SAT_NOTE_LENDER_REVIEW_7K":                  DBV4_HO_SAT_NOTE_LENDER_REVIEW_7K,
	"DBV4_HO_SUBMIT_APPLICATION":                         DBV4_HO_SUBMIT_APPLICATION,
	"DBV4_HOWDENS_FROM_HO_APPLICATION_ACCEPTED":          DBV4_HOWDENS_FROM_HO_APPLICATION_ACCEPTED,
	"DBV4_HOWDENS_FROM_HO_APPLICATION_CANCELLED":         DBV4_HOWDENS_FROM_HO_APPLICATION_CANCELLED,
	"DBV4_HOWDENS_FROM_HO_APPLICATION_REFERRED":          DBV4_HOWDENS_FROM_HO_APPLICATION_REFERRED,
	"DBV4_HOWDENS_FROM_HO_COOLING_OFF_PERIOD_COMPLETE":   DBV4_HOWDENS_FROM_HO_COOLING_OFF_PERIOD_COMPLETE,
	"DBV4_HOWDENS_FROM_HO_CUSTOMER_REJECTED":             DBV4_HOWDENS_FROM_HO_CUSTOMER_REJECTED,
	"DBV4_HOWDENS_FROM_HO_INTRO_COMPLETED":               DBV4_HOWDENS_FROM_HO_INTRO_COMPLETED,
	"DBV4_HOWDENS_FROM_HO_INTRO_DECLINED":                DBV4_HOWDENS_FROM_HO_INTRO_DECLINED,
	"DBV4_HOWDENS_FROM_HO_INTRO_REJECTED":                DBV4_HOWDENS_FROM_HO_INTRO_REJECTED,
	"DBV4_HOWDENS_FROM_HO_INTRO_SENT":                    DBV4_HOWDENS_FROM_HO_INTRO_SENT,
	"DBV4_HOWDENS_FROM_HO_JOB_DECLINED":                  DBV4_HOWDENS_FROM_HO_JOB_DECLINED,
	"DBV4_HOWDENS_FROM_HO_SAT_NOTE_APPROVED":             DBV4_HOWDENS_FROM_HO_SAT_NOTE_APPROVED,
	"DBV4_HOWDENS_FROM_TP_INTRO_COMPLETED":               DBV4_HOWDENS_FROM_TP_INTRO_COMPLETED,
	"DBV4_HOWDENS_FROM_TP_INTRO_REJECTED":                DBV4_HOWDENS_FROM_TP_INTRO_REJECTED,
	"DBV4_HOWDENS_FROM_TP_JOB_PAID_OUT":                  DBV4_HOWDENS_FROM_TP_JOB_PAID_OUT,
	"DBV4_HOWDENS_HO_APPLICATION_CANCELLED":              DBV4_HOWDENS_HO_APPLICATION_CANCELLED,
	"DBV4_HOWDENS_HO_APPLICATION_REFERRED":               DBV4_HOWDENS_HO_APPLICATION_REFERRED,
	"DBV4_HOWDENS_HO_APPLICATION_REJECTED":               DBV4_HOWDENS_HO_APPLICATION_REJECTED,
	"DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SENT":          DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SENT,
	"DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SENT_REMINDER": DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SENT_REMINDER,
	"DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SIGNED":        DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SIGNED,
	"DBV4_HOWDENS_HO_APPLICATION_SIGN_DOCUMENTS":         DBV4_HOWDENS_HO_APPLICATION_SIGN_DOCUMENTS,
	"DBV4_HOWDENS_HO_JOB_DECLINED":                       DBV4_HOWDENS_HO_JOB_DECLINED,
	"DBV4_HOWDENS_HO_SAT_NOTE_LENDER_REVIEW":             DBV4_HOWDENS_HO_SAT_NOTE_LENDER_REVIEW,
	"DBV4_HOWDENS_TO_HO_APPLICATION_APPROVED":            DBV4_HOWDENS_TO_HO_APPLICATION_APPROVED,
	"DBV4_HOWDENS_TO_HO_CONVERTED_JOB":                   DBV4_HOWDENS_TO_HO_CONVERTED_JOB,
	"DBV4_HOWDENS_TO_HO_CONVERTED_JOB_REMINDER":          DBV4_HOWDENS_TO_HO_CONVERTED_JOB_REMINDER,
	"DBV4_HOWDENS_TO_HO_INTRO":                           DBV4_HOWDENS_TO_HO_INTRO,
	"DBV4_HOWDENS_TO_HO_INTRO_BUDGET_REMINDER":           DBV4_HOWDENS_TO_HO_INTRO_BUDGET_REMINDER,
	"DBV4_HOWDENS_TO_HO_INTRO_COMPLETED":                 DBV4_HOWDENS_TO_HO_INTRO_COMPLETED,
	"DBV4_HOWDENS_TO_TP_APPLICATION_ACCEPTED":            DBV4_HOWDENS_TO_TP_APPLICATION_ACCEPTED,
	"DBV4_HOWDENS_TO_TP_GOODS_DELIVERED":                 DBV4_HOWDENS_TO_TP_GOODS_DELIVERED,
	"DBV4_HOWDENS_TO_TP_INTRO":                           DBV4_HOWDENS_TO_TP_INTRO,
	"DBV4_HOWDENS_TO_TP_JOB_AMENDED":                     DBV4_HOWDENS_TO_TP_JOB_AMENDED,
	"DBV4_HOWDENS_TP_APPLICATION_CANCELLED":              DBV4_HOWDENS_TP_APPLICATION_CANCELLED,
	"DBV4_HOWDENS_TP_CUSTOMER_REFERRED":                  DBV4_HOWDENS_TP_CUSTOMER_REFERRED,
	"DBV4_HOWDENS_TP_CUSTOMER_REJECTED":                  DBV4_HOWDENS_TP_CUSTOMER_REJECTED,
	"DBV4_HOWDENS_TP_JOB_DECLINED":                       DBV4_HOWDENS_TP_JOB_DECLINED,
	"DBV4_HOWDENS_TP_JOB_PAID_OUT":                       DBV4_HOWDENS_TP_JOB_PAID_OUT,
	"DBV4_HOWDENS_TP_SAT_NOTE_APPROVED":                  DBV4_HOWDENS_TP_SAT_NOTE_APPROVED,
	"DBV4_LENDER_SATNOTE_REVIEW":                         DBV4_LENDER_SATNOTE_REVIEW,
	"DBV4_STAFF_AUDIT_NOTIFICATION":                      DBV4_STAFF_AUDIT_NOTIFICATION,
	"DBV4_TP_2ND_LINE_REJECTED":                          DBV4_TP_2ND_LINE_REJECTED,
	"DBV4_TP_ACCOUNT_APPROVED":                           DBV4_TP_ACCOUNT_APPROVED,
	"DBV4_TP_APPLICATION_ACCEPTED":                       DBV4_TP_APPLICATION_ACCEPTED,
	"DBV4_TP_APPLICATION_ACCEPTED_DEPOSIT_CHANGED":       DBV4_TP_APPLICATION_ACCEPTED_DEPOSIT_CHANGED,
	"DBV4_TP_APPLICATION_CANCELLED":                      DBV4_TP_APPLICATION_CANCELLED,
	"DBV4_TP_APPLICATION_PENDING":                        DBV4_TP_APPLICATION_PENDING,
	"DBV4_TP_CUSTOMER_REFERRED":                          DBV4_TP_CUSTOMER_REFERRED,
	"DBV4_TP_CUSTOMER_REJECTED":                          DBV4_TP_CUSTOMER_REJECTED,
	"DBV4_TP_JOB_DECLINED":                               DBV4_TP_JOB_DECLINED,
	"DBV4_TP_JOB_PAID_OUT":                               DBV4_TP_JOB_PAID_OUT,
	"DBV4_TP_JOB_SENT":                                   DBV4_TP_JOB_SENT,
	"DBV4_TP_LEAD_DETAILS_PROVIDED":                      DBV4_TP_LEAD_DETAILS_PROVIDED,
	"DBV4_TP_LEAD_JOB_REQUESTED":                         DBV4_TP_LEAD_JOB_REQUESTED,
	"DBV4_TP_LEAD_REQUESTED":                             DBV4_TP_LEAD_REQUESTED,
	"DBV4_TP_PREMIUM_CREDIT_SIGNED":                      DBV4_TP_PREMIUM_CREDIT_SIGNED,
	"DBV4_TP_SAT_NOTE_APPROVED":                          DBV4_TP_SAT_NOTE_APPROVED,
	"DBV4_TP_SAT_NOTE_DELAYED":                           DBV4_TP_SAT_NOTE_DELAYED,
	"DBV4_TP_SAT_NOTE_LENDER_REVIEW":                     DBV4_TP_SAT_NOTE_LENDER_REVIEW,
	"DBV4_TP_SAT_NOTE_LENDER_REVIEWED":                   DBV4_TP_SAT_NOTE_LENDER_REVIEWED,
	"DBV4_TP_SAT_NOTE_SIGNED":                            DBV4_TP_SAT_NOTE_SIGNED,
	"DBV4_TP_SAT_NOTE_VIEWED":                            DBV4_TP_SAT_NOTE_VIEWED,
	"DBV4_TP_SIGN_DOCUMENTS":                             DBV4_TP_SIGN_DOCUMENTS,
	"DBV4_TP_SUBSCRIPTION_REMINDER":                      DBV4_TP_SUBSCRIPTION_REMINDER,
	"DBV4_USER_CLAIM_ACCOUNT":                            DBV4_USER_CLAIM_ACCOUNT,
	"DBV4_USER_CONSENT":                                  DBV4_USER_CONSENT,
	"DBV4_USER_DEV_CLAIM_ACCOUNT":                        DBV4_USER_DEV_CLAIM_ACCOUNT,
	"DBV4_USER_ID_CHECKS_DECLINED":                       DBV4_USER_ID_CHECKS_DECLINED,
	"DBV4_USER_ID_CHECKS_VERIFIED":                       DBV4_USER_ID_CHECKS_VERIFIED,
	"DBV4_USER_KANDA_REFEREE_INVITE":                     DBV4_USER_KANDA_REFEREE_INVITE,
	"DBV4_USER_LEGACY_MIGRATION":                         DBV4_USER_LEGACY_MIGRATION,
	"DBV4_USER_REFEREE_INVITE":                           DBV4_USER_REFEREE_INVITE,
	"DBV4_USER_RESET_PASSWORD":                           DBV4_USER_RESET_PASSWORD,
	"DBV4_USER_SIGNUP":                                   DBV4_USER_SIGNUP,
	"DBV4_USER_VERIFY_DIRECTOR":                          DBV4_USER_VERIFY_DIRECTOR,
	"DBV4_USER_VERIFY_DIRECTOR_REMINDER":                 DBV4_USER_VERIFY_DIRECTOR_REMINDER,
	"DBV4_USER_VERIFY_EMAIL":                             DBV4_USER_VERIFY_EMAIL,
}

func (tn TName) String() string {
	return string(tn)
}

func (tn TName) Render() string {
	if tm, ok := TMap[tn]; ok {
		return tm
	}
	panic("template name not in template map")
}

var TMap = map[TName]string{
	DBV4_HO_AIP_HOWDENS: `{
  "subject": "{{receiver.contact_name}}, see if you can get finance for a new kitchen from Howdens with Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You've inquired with Howdens to get finance for your new kitchen. To find out how much you can borrow complete a short pre-approval check and create your budget."
        },
        {
          "text": "Your budget will then be shared with the Howdens design team so they can design the kitchen of your dreams."
        }
      ]
    },
    {
      "type": "button",
      "text": "Get pre-approved",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HO_AIP_PREAPPROVED: `{
  "subject": "{{receiver.contact_name}}, you have been pre-approved for finance with Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}} - Congratulations! You've been pre-approved for a loan for your home imporvement."
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Now that you've been pre-approved, your job request has been shared with out network of tradespeople who will get in touch soon."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Questions? Let us know!",
          "subtext": "We're here for you all the way. If you have any questions about the loan, or the job itself, please reach out to us at <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "Submit job",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HO_APPLICATION_ACCEPTED_DEPOSIT_CHANGED: `{
  "subject": "Pay your deposit - Your finance application has been approved with a higher deposit value",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}, your finance application has been approved but you have chosen a higher deposit value than {{sender.contact_name}} set."
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Great news! Your application has been approved, so the job can start once {{sender.contact_name}} are ready. However, you have chosen a higher deposit than {{sender.contact_name}} set as a minimum, and need to ensure they have been paid their deposit. Remember, you have 6 months to complete the work."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What do I need to pay?",
          "subtext": "You need to make sure you've paid the full deposit of {{deposit.applied}} directly to {{sender.contact_name}}, which is {{deposit.difference}} more than they set as a minimum. They may have already collected their initial deposit of {{deposit.original}} from you."
        },
        {
          "text": "How do I make the payment?",
          "subtext": "Speak to {{sender.contact_name}}, as they will collect the full deposit from you. If something isn't right let us know by emailing <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HO_APPLICATION_APPROVED: `{
  "subject": "Your finance application has been approved! Sign your loan agreement now",
  "flow_type": "{{flow_type}}",
  "header": [
    {
      "type": "affirmative_header",
      "text": "Thank you {{receiver.contact_name}}! Your finance application has been approved!",
      "icon": "tick",
      "border": true
    }
  ],
  "body": [
    {
      "type": "statements",
      "rows": [
        {
          "text": "What happens now?",
          "subtext": "{{sender.contact_name}} has been notified that your finance application is approved. They'll get in touch with you soon to schedule and start the work."
        },
        {
          "text": "After the job",
          "subtext": "When the work's done, we'll ask you if everything is in order. After you sign off on the work we'll get {{sender.contact_name}} paid."
        },
        {
          "text": "Questions? Let us know!",
          "subtext": "We're here for you all the way. If you have any questions about the loan, or the job itself, please reach out to us."
        }
      ]
    }
  ],
  "sms": "Great News! Your finance application has been approved and you're ready to start the work!"
}`,
	DBV4_HO_APPLICATION_CANCELLED: `{
  "subject": "Your finance application has been cancelled",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}} - your finance application has been cancelled."
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Your finance application has been cancelled due to your request to either the lender or Kanda to cancel your finance application. You can still apply again if this was a mistake. To apply again, you'll need to request a new quote from {{sender.contact_name}}."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Was this a mistake?",
          "subtext": "If something isn't right let us know by emailing <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a>"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HO_APPLICATION_PAY_DEPOSI_CASH: `{
  "subject": "You have signed your agreement documents, now you need to pay your deposit",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}!"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You've signed your credit agreement and the lender has approved your application. The last step is to pay your deposit payment so the work can begin. This should be paid directly to {{sender.contact_name}}. You can see the details of your deposit by clicking the below button."
        }
      ]
    },
    {
      "type": "cta_button",
      "text": "View job",
      "subtext": "View what deposit you need to pay externally",
      "url": "{{cta_url}}"
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ],
  "sms": "Your finance agreement has been signed and you just need to pay your deposit. Check your emails for more info. Kanda!"
}`,
	DBV4_HO_APPLICATION_PAY_DEPOSIT: `{
  "subject": "You have signed your agreement documents, now you need to pay your deposit",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}! Here's the link to securely pay your deposit online"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You've signed your credit agreement and the lender has approved your application. The last step is to pay your deposit payment so the work can begin. Click below to this now."
        }
      ]
    },
    {
      "type": "cta_button",
      "text": "Pay the deposit",
      "subtext": "Pay securely by card",
      "url": "{{cta_url}}"
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ],
  "sms": "Your finance agreement has been signed and you just need to pay your deposit. Check your emails for more info. Kanda!"
}`,
	DBV4_HO_APPLICATION_REFERRED: `{
  "subject": "There is an update regarding your recent loan application",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Your finance application is currently being reviewed by our lender, <strong>{{lender.contact_name}}</strong>. You will have, or shortly will, receive an email from their underwriters with instructions of any steps needed to proceed with your application. If supporting documents are needed for your application, instructions for submitting these will also be provided within the email. If you have yet to receive an email, please check your junk/spam folder."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Questions? Let us know",
          "subtext": "We're here for you all the way. If you have any questions about the loan, or the job itself, please reach out to us by emailing <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a>"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ],
  "sms": "Hey {{receiver.contact_name}}! Your application is currently being reviewed by our lender. Check your email for more info. Kanda!"
}`,
	DBV4_HO_APPLICATION_REJECTED: `{
  "subject": "There has been an update on your application",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "The lender has sent Kanda an update about your application, click the link below to see what it is."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What happens now?",
          "subtext": "{{sender.contact_name}} has been notified of any changes to your finance application status so they are up to date. "
        }
      ]
    },
    {
      "type": "button",
      "text": "Check my update",
      "url": "{{cta_url}}"
    }
  ],
  "sms": "There has been an update to your finance application Kanda. Check your emails for more info."
}`,
	DBV4_HO_APPLICATION_SAT_NOTE_SENT: `{
  "subject": "Sign off on {{sender.contact_name}}'s job on Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.contact_name}} have let us know they have completed the work. Please let us know if everything is in order by signing the satisfaction note."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Sign a satisfaction note",
          "subtext": "If you're satisfied with the work, you'll need to sign a satisfaction note for us. Follow the link below to do this."
        },
        {
          "text": "Questions? Let us know",
          "subtext": "We're here for you all the way. If you have any questions about the loan, or the job itself, please reach out to us by emailing <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a>"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ],
  "sms": "{{sender.contact_name}} has told Kanda the works are completed. Check your email for next steps. Kanda!"
}`,
	DBV4_HO_APPLICATION_SAT_NOTE_SENT_REMINDER: `{
  "subject": "Please confirm your job by {{sender.contact_name}} is complete (24 hours left)",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.contact_name}} have let us know they have completed the work. Please let us know if everything is in order by signing the satisfaction note."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Sign a satisfaction note",
          "subtext": "Click below to confirm your happy with the work. You have 24 hours to do this or raise a complaint."
        },
        {
          "text": "Questions? Let us know",
          "subtext": "We're here for you all the way. If you have any questions about the loan, or the job itself, please reach out to us by emailing <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a>"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ],
  "sms": "{{sender.contact_name}} has told Kanda the works are completed. Check your email for next steps. Kanda!"
}`,
	DBV4_HO_APPLICATION_SAT_NOTE_SIGNED: `{
  "subject": "You have signed off on {{sender.contact_name}}'s job",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Thank you for signing the satisfaction note. Our team may try to call you over the next few days to verify the infromation before we pay the tradesperson. "
        },
        {
          "text": "If you don't hear from Kanda then rest assured we're happy to pay the tradesperson out based on your satisfaction note. You'll receive an email from your lender shortly advising you of your first repayment date."
        }
      ]
    },
    {
      "type": "compact_rows",
      "rows": [
        {
          "text": "If you need to change any of your details then please contact the lender directly:"
        },
        {
          "text": "<strong>Telephone:</strong> {{lender.contact_phone}}"
        },
        {
          "text": "<strong>Email:</strong> {{lender.contact_email}}"
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Need help with the installation?",
          "subtext": "If you have any questions about the work, feel free to reach out to us on <a href=\"tel:0330 818 7491\">0330 818 7491</a> or email us at <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a>"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HO_APPLICATION_SIGN_DOCUMENTS: `{
  "subject": "Your finance application has been approved! Sign your loan agreement now",
  "flow_type": "{{flow_type}}",
  "header": [
    {
      "type": "affirmative_header",
      "text": "Congratulations {{receiver.contact_name}}! Your finance application has been approved!",
      "icon": "rocket",
      "border": true
    }
  ],
  "body": [
    {
      "type": "text",
      "rows": [
        {
          "text": "Great news, the lender has approved your application and that you need to do now is sign the credit agreement. You can do this by clicking the button below or following the instructions in the email from the lender."
        },
        {
          "text": "If you have any questions email <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a> so we can assist you."
        }
      ]
    },
    {
      "type": "cta_button",
      "text": "Sign the finance agreement",
      "subtext": "The documents are ready to sign",
      "url": "{{cta_url}}"
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ],
  "sms": "Great News! You've been approved for finance and all you need to do is sign your credit agreement! Check your emails now! Kanda."
}`,
	DBV4_HO_CONTINUE_CHECKOUT: `{
  "subject": "View your job from {{sender.contact_name}}",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You've been sent this email so that you can view your job from {{sender.contact_name}}."
        },
        {
          "text": "Click the link below to verify your email address and view the job."
        }
      ]
    },
    {
      "type": "button",
      "text": "View job",
      "url": "{{cta_url}}"
    }
  ],
  "sms": "Hey {{receiver.contact_name}}! You've just been sent a link to view your job from {{sender.contact_name}} on Kanda. Check your emails for more information."
}`,
	DBV4_HO_INITIAL: `{
  "subject": "{{sender.contact_name}} has sent you a quote on Kanda",
  "flow_type": "{{flow_type}}",
  "preheader": "Follow this email to view your quote and begin the process of getting approved for finance",
  "banner": {
    "type": "trustpilot",
    "score": "4.7",
    "reviews": "273",
    "url": "https://uk.trustpilot.com/review/getkanda.com"
  },
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.contact_name}} has sent you a quote on Kanda. Click below to view the quote and get pre-approved for finance."
        }
      ]
    },
    {
      "type": "button",
      "text": "Get pre-approved",
      "url": "{{cta_url}}"
    },
    {
      "type": "hero"
    },
    {
      "type": "heading",
      "text": "Kanda makes it easy to get tradespeople on finance. Flexible plans, quick approval."
    },
    {
      "type": "text",
      "rows": [
        {
          "text": " We help you get trusted tradespeople in to do the job on finance. With our flexible finance options you can choose the plan that's right for you, apply, and get approved in minutes."
        }
      ]
    },
    {
      "type": "usp",
      "rows": [
        {
          "text": "Apply for finance in just 2 minutes"
        },
        {
          "text": "Choose the rate and terms that are right for you"
        },
        {
          "text": "World-class UK support team"
        }
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "trustpilot",
      "title": "5,000+ jobs financed and counting",
      "review": "Applying for the finance was very straight forward. And I got a quick decision that I had been accepted for the finance.",
      "reviewer": "Rodney T"
    },
    {
      "type": "help"
    }
  ],
  "suppress_signoff": true,
  "sms": "Hey {{receiver.contact_name}}! You've just been sent a job on Kanda from {{sender.contact_name}}. Check your emails for more information."
}`,
	DBV4_HO_JOB_DECLINED: `{
  "subject": "You have declinded your job on Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You have declined your job from {{sender.contact_name}} on Kanda - if this was a mistake, please reach out to them and have them send you out a new job."
        }
      ]
    }
  ]
}`,
	DBV4_HO_JOB_STARTED: `{
  "subject": "Your job on Kanda is ready to start",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Your job on Kanda is ready to be started."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What happens now?",
          "subtext": "{{sender.contact_name}} has been notified that your finance application is approved. They'll get in touch with you soon to schedule and start the work."
        },
        {
          "text": "After the job",
          "subtext": "When the work's done, we'll ask you if everything is in order. After you sign off on the work we'll get {{sender.contact_name}} paid."
        },
        {
          "text": "Questions? Let us know!",
          "subtext": "We're here for you all the way. If you have any questions about the loan, or the job itself, please reach out to us."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HO_LEAD_DETAILS_PROVIDED_TP_ASSIGNED: `{
  "subject": "{{sender.contact_name}} is interested in quoting for your job. Here are their details!",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Here are the details of the approved tradesperson who is going to get in touch with you about the job you posted:"
        }
      ]
    },
    {
      "type": "table",
      "rows": [
        {
          "type": "heading",
          "text": "Tradesperson details:",
          "colspan": "3"
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Name:",
              "colspan": "1"
            },
            {
              "text": "{{sender.contact_name}}",
              "colspan": "2"
            }
          ]
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Email:",
              "colspan": "1"
            },
            {
              "text": "{{sender.contact_email}}",
              "colspan": "2"
            }
          ]
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Mobile:",
              "colspan": "1"
            },
            {
              "text": "{{sender.contact_phone}}",
              "colspan": "2"
            }
          ]
        },
        {
          "type": "heading",
          "text": "Your job details:",
          "colspan": "3"
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Work type:",
              "colspan": "1"
            },
            {
              "text": "{{lead.work_type}}",
              "colspan": "2"
            }
          ]
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Description:",
              "colspan": "1"
            },
            {
              "text": "{{lead.description}}",
              "colspan": "2"
            }
          ]
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What are the next steps?",
          "subtext": "The tradesperson should contact you to arrange a quote. Once you've spoke (& they've seen the work) they will send you a quote via Kanda. You'll then be able to pay for it using the loan you've been pre-approved for."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HO_LEAD_POSTED: `{
  "subject": "{{receiver.contact_name}}, your job has been successfully posted to Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}} - Your job has successfully been posted to Kanda."
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Now that you've told us about your job, you can sit back whilst we let our approved tradespeople know about the work you're looking to get done. Expect them to reach out in due course."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Questions? Let us know!",
          "subtext": "We're here for you all the way. If you have any questions about the loan, or the job itself, please reach out to us at <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "See job",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HO_QUOTE_POSTED: `{
  "subject": "{{receiver.contact_name}}, your job has been successfully posted to Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}} - Your job has succesfully been posted to Kanda."
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Now that you've told us about your job, you can sit back whilst we let our approved tradespeople know about the work you're looking to get done. Expect them to reach out in due course."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Questions? Let us know!",
          "subtext": "We're here for you all the way. If you have any questions about your finance agreement, or the job itself, please reach out to us at <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "See job",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HO_SAT_NOTE_LENDER_REVIEW: `{
  "subject": "Our lender will be calling you soon to perform a welcome call",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You’ve signed the satisfaction note and will now receive a welcome call from the lender Propensio. Your tradesperson may not get paid on time if you don’t."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HO_SAT_NOTE_LENDER_REVIEW_7K: `{
  "subject": "Our lender will be calling you soon to perform a welcome call",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You've signed the satisfaction note and will now receive a welcome call from the lender Propensio. Your tradesperson may not get paid on time if you don't."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HO_SUBMIT_APPLICATION: `{
  "subject": "{{receiver.contact_name}}, please submit your finance application",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}} - complete your finance application in 2 minutes"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You started a finance application on Kanda but you haven't completed it. If you'd still like to apply for finance then click below to continue. It only takes a few minutes."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Questions? Let us know!",
          "subtext": "If you have any questions about your finance application don't hesitate to let us know. We're here to help."
        }
      ]
    }
  ],
  "sms": "Hey {{receiver.contact_name}}! Don't forget to complete your finance application on Kanda now."
}`,
	DBV4_HOWDENS_FROM_HO_APPLICATION_ACCEPTED: `{
  "subject": "{{extras.customer.contact_name}}'s finance application has been approved",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.branch.trading_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Great news! {{extras.customer.contact_name}} has signed their credit agreement and the finance for this order is now in place."
        },
        {
          "text": "The 14-day cooling off period has now begun. We will send you a reminder once it has ended so that you can deliver the order and mark it as delivered on the Kanda dashboard."
        },
        {
          "text": "If {{extras.customer.contact_name}} is paying a deposit, their tradesperson will need to collect this directly and they have been sent an email to remind them to do so."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_FROM_HO_APPLICATION_CANCELLED: `{
  "subject": "{{extras.customer.contact_name}}'s finance application has been cancelled",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.branch.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.customer.contact_name}} has cancelled their finance application, please contact them and their tradesperson to arrange an alternative payment method."
        },
        {
          "text": "If the application was cancelled in error, you will need to send out a new credit introduction."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_FROM_HO_APPLICATION_REFERRED: `{
  "subject": "{{extras.customer.contact_name}} needs to provide supporting information",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.branch.trading_name}} - {{extras.customer.contact_name}}'s application is taking longer than usual"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "The lender has requested some more information from {{extras.customer.contact_name}}. This usually happens when the lender wishes to verify some information on the customers finance application. The lender will have emailed them directly informing them of what they need to provide. Until the documents are received the finance application can't progress."
        },
        {
          "text": "It can take up to 24 hours for the lender to review this information once it's been submitted, but do give your customer a nudge if you haven't had an update from Kanda within 2 days."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_FROM_HO_COOLING_OFF_PERIOD_COMPLETE: `{
  "subject": "{{extras.trader.trading_name}}'s order for {{extras.customer.contact_name}} can now be delivered",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.depot.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.customer.contact_name}}'s 14 day cooling off period has now ended so you can now process their order for delivery. Remember to add ZZF01 at £0 value onto each K8 sales order going out on finance."
        },
        {
          "text": "Once you have made the initial delivery*, you will need to login to your Kanda dashboard to mark the order as delivered. "
        },
        {
          "text": "{{extras.trader.trading_name}} will receive payment into their bank account within 3 working days of the order being marked as delivered. They will then need to pay their Howdens Trade Account off as normal."
        },
        {
          "text": "*Dependent on the timescale of bespoke products (such as Template & Fit solid work surfaces and Paint to Order kitchens), delivery may be in stages."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_FROM_HO_CUSTOMER_REJECTED: `{
  "subject": "{{extras.customer.contact_name}}'s finance application was declined",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.branch.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.customer.contact_name}}'s finance application has been declined and they have notified. Please contact {{extras.customer.contact_name}} and {{extras.trader.trading_name}} to arrange an alternative payment method. "
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_FROM_HO_INTRO_COMPLETED: `{
  "subject": "{{extras.customer.contact_name}} has completed their eligibility check for finance",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.branch.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.customer.contact_name}} has completed their eligibility check on Kanda."
        },
        {
          "text": "Once you have finalised their design, you will need to convert their Introduction into a Job to send the order to their tradesperson to confirm. Please also use the email template provided by Marketing to send an order breakdown to {{extras.customer.contact_name}} to provide them with more detail."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_FROM_HO_INTRO_DECLINED: `{
  "subject": "{{extras.customer.contact_name}} is not eligible to apply for finance with Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.branch.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.customer.contact_name}} has completed their eligibility check on Kanda. Unfortunately, they are not eligible to apply for credit at this time."
        },
        {
          "text": "Please speak to {{extras.customer.contact_name}} and their builder to discuss alternative payment options."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_FROM_HO_INTRO_REJECTED: `{
  "subject": "{{extras.customer.contact_name}} does not want to check their eligibility ",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.branch.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Your homeowner {{extras.customer.contact_name}} has declined your invitation to check their eligibility for finance on Kanda. Please get in touch with the homeowner if you have any questions."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_FROM_HO_INTRO_SENT: `{
  "subject": "Finance Introduction sent to {{extras.customer.contact_name}}",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.branch.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "A finance introduction has been sent to {{extras.customer.contact_name}}; you can track the progress of this introduction by logging in to your Kanda dashboard."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_FROM_HO_JOB_DECLINED: `{
  "subject": "{{extras.customer.contact_name}}}} has declined their Howdens order",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.branch.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.customer.contact_name}} has declined their Howdens order on Kanda, please contact them and their tradesperson to find out more. If this was done in error, a new Introduction will need to be sent."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_FROM_HO_SAT_NOTE_APPROVED: `{
  "subject": "{{extras.customer.contact_name}} has confirmed delivery",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.branch.trading_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.customer.contact_name}} has signed the delivery note confirming full or partial receipt of their Howdens order. We will pay their builder in full for the order directly into their bank account within 3 working days."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_FROM_TP_INTRO_COMPLETED: `{
  "subject": "{{extras.customer.contact_name}}'s order has been approved by their tradesperson",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.branch.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.customer.contact_name}}'s order has been approved by their tradesperson. {{extras.customer.contact_name}} has now been sent a link to proceed with their finance application."
        },
        {
          "text": "You can follow their progress by logging in to your Kanda dashboard."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_FROM_TP_INTRO_REJECTED: `{
  "subject": "{{extras.customer.contact_name}}'s tradesperson has rejected their order",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.branch.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.customer.contact_name}}'s tradesperson has rejected their order. Please contact them directly to find out more."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_FROM_TP_JOB_PAID_OUT: `{
  "subject": "{{extras.customer.contact_name}}'s order has now been paid out to their tradesperson",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.branch.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "We've processed payment to {{extras.customer.contact_name}}'s tradesperson."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_HO_APPLICATION_CANCELLED: `{
  "subject": "Your finance application for your Howdens products has been cancelled",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.customer.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Your request to cancel your finance application has been processed. Please contact your tradesperson to arrange an alternative payment method if you would like to proceed with your Howdens order."
        },
        {
          "text": "If this was a mistake, please contact Howdens to request a new link so that you can re-apply."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_HO_APPLICATION_REFERRED: `{
  "subject": "Supporting documentation required for your finance application for your Howdens purchase",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Your finance application has been reviewed by the lender and they require some additional information / documents from you. You will have received an email from <strong>{{lender.contact_email}}</strong>. Please follow the link in the email to submit your documents or email them to the lender. We recommend checking your spam folder if you have not received this."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    }
  ],
  "sms": "Hey {{receiver.contact_name}}, good news! The lender has accepted your application in principal. They just need a few documents. Check your email for more info. Kanda!"
}`,
	DBV4_HOWDENS_HO_APPLICATION_REJECTED: `{
  "subject": "Your finance application for your Howdens order has been declined",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.customer.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Your finance application has been declined. Please contact your tradesperson to arrange an alternative payment method. "
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "Check my update",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SENT: `{
  "subject": "Please confirm delivery of your Howdens products",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.customer.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.branch.trading_name}} have made the initial delivery* of your products. Please confirm by signing the delivery note via the link below. "
        },
        {
          "text": "You will receive an email from the lender advising you of your first repayment date."
        },
        {
          "text": "*Dependent on the timescale of bespoke products (such as Template & Fit solid work surfaces and paint to order kitchens), delivery may be in stages. Confirming delivery is indicative of receiving the initial delivery only."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ],
  "sms": "{{extras.branch.trading_name}} has told Kanda the works are completed. Check your email for next steps. Kanda!"
}`,
	DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SENT_REMINDER: `{
  "subject": "Please confirm delivery of your Howdens products",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.customer.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.branch.trading_name}} have made the initial delivery* of your products. Please confirm by signing the delivery note via the link below. "
        },
        {
          "text": "You will  receive an email from the lender advising you of your first repayment date."
        },
        {
          "text": "*Dependent on the timescale of bespoke products (such as Template & Fit solid work surfaces and paint to order kitchens), delivery may be in stages. Confirming delivery is indicative of receiving the initial delivery only."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ],
  "sms": "{{extras.branch.trading_name}} has told Kanda the works are completed. Check your email for next steps. Kanda!"
}`,
	DBV4_HOWDENS_HO_APPLICATION_SAT_NOTE_SIGNED: `{
  "subject": "You have signed for delivery of your Howdens products",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.customer.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Thank you for signing the delivery note for your Howdens products. Our team may try to call you over the next few days to follow up on your experience."
        },
        {
          "text": "If you need to change any of your details then please contact the lender directly:"
        },
        {
          "text": "<strong>Telephone:</strong> {{lender.contact_phone}}"
        },
        {
          "text": "<strong>Email:</strong> {{lender.contact_email}}"
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_HO_APPLICATION_SIGN_DOCUMENTS: `{
  "subject": "Your finance application has been approved! Sign your loan agreement now",
  "flow_type": "{{flow_type}}",
  "header": [
    {
      "type": "affirmative_header",
      "text": "Congratulations {{receiver.contact_name}}! Your finance application has been approved!",
      "icon": "rocket",
      "border": true
    }
  ],
  "body": [
    {
      "type": "text",
      "rows": [
        {
          "text": "Great news, the lender has approved your application and all that you need to do now is sign the credit agreement. You can do this by following the instructions in the email from the lender."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ],
  "sms": "Great News! You've been approved for finance and all you need to do is sign your credit agreement! Check your emails now! Kanda."
}`,
	DBV4_HOWDENS_HO_JOB_DECLINED: `{
  "subject": "You have declinded your Howdens order on Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.customer.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You have declined your order from {{extras.branch.trading_name}} on Kanda - if this was a mistake, please contact them to issue a new application link."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_HO_SAT_NOTE_LENDER_REVIEW: `{
  "subject": "Our lender will be calling you soon to perform a welcome call",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.customer.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You've signed the delivery note and will now receive a welcome call from the lender, Propensio."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_TO_HO_APPLICATION_APPROVED: `{
  "subject": "Your finance application for your Howdens order has been approved!",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.customer.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Your finance application has been approved. You selected a deposit amount of {{deposit.applied}} and will need to arrange this payment with your tradesperson directly."
        },
        {
          "text": "We will contact you soon to confirm you are satisfied with the initial delivery*"
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "*Dependent on the timescale of bespoke products (such as Template & Fit solid work surfaces and Paint to Order kitchens), delivery may be in stages."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_TO_HO_CONVERTED_JOB: `{
  "subject": "You can now complete a finance application for your Howdens products",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.customer.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You can now complete your purchase of your Howdens products from {{extras.trader.trading_name}} via finance. Click below to choose which finance option you want to apply for and complete the application. You'll receive a decision in a few minutes and we'll keep both your tradesperson and Howdens updated."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_TO_HO_CONVERTED_JOB_REMINDER: `{
  "subject": "You need to complete the finance application for your Howdens products",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.customer.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "We noticed that you haven't completed the finance application for the purchase of your Howdens products from {{extras.trader.trading_name}}."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_TO_HO_INTRO: `{
  "subject": "Check your eligibility to finance your Howdens products",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.customer.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Howdens have partnered with Kanda to allow you to apply for finance for your Howdens  products. Before you can apply for finance you'll need to first check if you're eligible. Click below to complete a short eligibility checker and set your budget."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_TO_HO_INTRO_BUDGET_REMINDER: `{
  "subject": "Reminder to check your eligibility to finance your Howdens kitchen",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.customer.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Howdens have partnered with Kanda to allow you apply for finance for your Howdens  products. We noticed you haven't checked if you're eligible for finance yet. Click below to complete a short eligibility checker and set your budget."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_TO_HO_INTRO_COMPLETED: `{
  "subject": "You have completed your eligibility check to finance your Howdens products",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.customer.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You have completed your eligibility check for finance for your Howdens products. Howdens will be in touch shortly to continue the design process. Once your design has been finalised, your order will be confirmed by your tradesperson and you will be able to apply for finance."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_TO_TP_APPLICATION_ACCEPTED: `{
  "subject": "Your customer has been accepted for finance",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.trader.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Your customer's finance application has been approved. As they have selected a deposit amount of {{deposit.applied}}, you will need to arrange this payment with them directly."
        },
        {
          "text": "Howdens will now process the order. Upon initial delivery*, you will receive the finance payment into your bank account within 3 working days."
        },
        {
          "text": "*Dependent on the timescale of bespoke products (such as Template & Fit solid work surfaces and Paint to Order kitchens), delivery may be in stages."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_TO_TP_GOODS_DELIVERED: `{
  "subject": "{{extras.customer.contact_name}}'s Howdens order has been delivered",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.trader.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Howdens have made the initial delivery* of {{extras.customer.contact_name}}'s order. We are processing payment so you will receive the finance value into your bank account within 3 working days. Once received you will need to pay your Howdens Trade Account off as normal."
        },
        {
          "text": "*Dependent on the timescale of bespoke products (such as Template & Fit solid work surfaces and Paint to Order kitchens), delivery may be in stages."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_TO_TP_INTRO: `{
  "subject": "Approval requested from {{extras.branch.trading_name}}",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.trader.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Howdens have partnered with Kanda to allow homeowners to finance the purchase of Howdens products from you. Please review and approve the pricing on this invoice to {{extras.customer.contact_name}} so that they can apply for finance."
        },
        {
          "text": "Here's how it works:"
        }
      ]
    },
    {
      "type": "compact_rows",
      "rows": [
        {
          "text": "<b>1.</b> View and approve the job details"
        },
        {
          "text": "<b>2.</b> Your customer applies for finance"
        },
        {
          "text": "<b>3.</b> Howdens deliver the products"
        },
        {
          "text": "<b>4.</b> You get paid"
        }
      ]
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Click below to see more and approve this invoice in 2 minutes."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_TO_TP_JOB_AMENDED: `{
  "subject": "Approval requested for amendments to your job from your Howdens Partner Designer - {{sender.contact_name}}",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.contact_name}} haa made some changes to the job you have previously approved. We need you to approve these changes before we can send the new quote to your customer. You won't need to provide any more company information as we have your previously provided information on record."
        }
      ]
    },
    {
      "type": "compact_rows",
      "rows": [
        {
          "text": "<b>1.</b> View and approve the amended job details"
        },
        {
          "text": "<b>2.</b> Your customer applies for finance"
        },
        {
          "text": "<b>3.</b> Howdens deliver the goods"
        },
        {
          "text": "<b>4.</b> You get paid"
        }
      ]
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Click below to view the invoice and approve the amendments."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_HOWDENS_TP_APPLICATION_CANCELLED: `{
  "subject": "{{extras.customer.contact_name}}'s finance application for their Howdens order has been cancelled",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.trader.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.customer.contact_name}} has cancelled their finance application. Please contact them to arrange an alternative payment method."
        },
        {
          "text": "If this was a mistake, Howdens will need to send them a new application."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_TP_CUSTOMER_REFERRED: `{
  "subject": "{{extras.customer.contact_name}} needs to provide supporting information",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.trader.trading_name}} - {{extras.customer.contact_name}}'s application is taking longer than usual"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "The lender has requested some more information from {{extras.customer.contact_name}}. This usually happens when the lender wishes to verify some information on the customers finance application. The lender will have emailed them directly informing them of what they need to provide. Until the documents are received the finance application can't progress."
        },
        {
          "text": "It can take up to 24 hours for the lender to review this information once it's been submitted, but do give your customer a nudge if you haven't had an update from Kanda within 2 days."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_TP_CUSTOMER_REJECTED: `{
  "subject": "{{extras.customer.contact_name}}'s  finance application for their Howdens order has been declined",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.trader.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.customer.contact_name}}'s finance application has been declined and they have been notified. Please contact {{extras.customer.contact_name}} to arrange an alternative payment method."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_TP_JOB_DECLINED: `{
  "subject": "{{extras.customer.contact_name}}}} has declined their Howdens order on Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.trader.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{extras.customer.contact_name}} has declined their Howdens order on Kanda, please contact them to find out more. If the order was declined in error, Howdens will need to create a new order."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_TP_JOB_PAID_OUT: `{
  "subject": "{{extras.customer.contact_name}}'s order has now been paid out!",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.trader.trading_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "We've processed payment on the order delivered for {{extras.customer.contact_name}}. You should receive the payment from Kanda within a few hours."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What do I need to do?",
          "subtext": "You are required to pay your Howdens Trade Account as normal. Get in touch with us if you haven't received payment within 4 hours of this email. Contact us at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call <a href=\"tel:03308083911\">0330 808 3911</a>"
        }
      ]
    }
  ]
}`,
	DBV4_HOWDENS_TP_SAT_NOTE_APPROVED: `{
  "subject": "{{extras.customer.contact_name}} has confirmed delivery of their Howdens order",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{extras.trader.trading_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Your customer has signed the delivery note confirming the receipt of their Howdens order. You will receive full payment for the order directly into your bank account within 3 working days. You are required to pay your Howdens Trade Account as normal."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Have a Question?",
          "subtext": "For finance queries please email Kanda at <a href=\"mailto:support@kanda.co.uk\">support@kanda.co.uk</a> or call us on <a href=\"tel:03308083911\">0330 808 3911</a>. For order queries, please email <a href=\"mailto:{{extras.branch.contact_email}}\">{{extras.branch.contact_email}}</a> or call <a href=\"tel:{{extras.branch.contact_phone}}\">{{extras.branch.contact_phone}}</a>."
        }
      ]
    }
  ]
}`,
	DBV4_LENDER_SATNOTE_REVIEW: `{
  "subject": "Signed sat note for {{sender.contact_name}}",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi,"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Please see the attached satisfaction note for {{sender.contact_name}}."
        }
      ]
    },
    {
      "type": "table",
      "rows": [
        {
          "type": "heading",
          "text": "Details:",
          "colspan": "3"
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Propensio Loan ID:",
              "colspan": "1"
            },
            {
              "text": "{{xref}}",
              "colspan": "2"
            }
          ]
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Kanda job ID:",
              "colspan": "1"
            },
            {
              "text": "{{job_id}}",
              "colspan": "2"
            }
          ]
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Kanda loan ID:",
              "colspan": "1"
            },
            {
              "text": "{{credit_id}}",
              "colspan": "2"
            }
          ]
        }
      ]
    }
  ]
}`,
	DBV4_STAFF_AUDIT_NOTIFICATION: `{
  "subject": "New update on company in onboarding",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "There is an update on a company you are resposible for in the onboarding portal. Please check below"
        },
        {
          "text": "{{message}}"
        }
      ]
    },
    {
      "type": "button",
      "text": "Go to onboarding",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_2ND_LINE_REJECTED: `{
  "subject": "{{sender.contact_name}} has been declined for finance from our alternative lender",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}} - {{sender.contact_name}}'s finance application has not been approved."
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Unfortunately, your customer was not approved for finance on this job from our second line lender."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What happens now?",
          "subtext": "We've updated the customer with the decision from the lender. See more information on your dashboard."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_ACCOUNT_APPROVED: `{
  "subject": "Congratulations {{receiver.contact_name}}, your Kanda account is approved!",
  "flow_type": "{{flow_type}}",
  "banner": {
    "type": "trustpilot",
    "score": "4.7",
    "reviews": "273",
    "url": "https://uk.trustpilot.com/review/getkanda.com"
  },
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Congratulations! I'm so happy to let you know that your application has been approved and you're now officially able to use Kanda."
        },
        {
          "text": "My team and I want to personally welcome you to the platform, use the button below to book a welcome call."
        }
      ]
    },
    {
      "type": "button",
      "text": "Book Training Call",
      "url": "https://calendly.com/kanda-sales/welcome-call"
    },
    {
      "type": "video",
      "heading": "New User Welcome Message + Add Rates - Watch Video",
      "url": "https://www.loom.com/share/651d747c5b9840efb2552dad403b3d45",
      "thumbnail": "https://cdn.loom.com/sessions/thumbnails/651d747c5b9840efb2552dad403b3d45-1686232170118-with-play.gif"
    },
    {
      "type": "heading",
      "text": "Win better work with Kanda, by offering finance in 5 minutes."
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Ever lost a job on price or felt stuck waiting around for that last payment from the customer. No more! With Kanda you’re able to compete on price and guarantee next day payment when the job is complete."
        }
      ]
    },
    {
      "type": "usp",
      "rows": [
        {
          "text": "Send your customer a job out the platform"
        },
        {
          "text": "They apply for finance in less than 5 minutes"
        },
        {
          "text": "You complete the work and get paid at the end"
        }
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "trustpilot",
      "title": "5,000+ jobs financed and counting",
      "review": "Applying for the finance was very straight forward. And I got a quick decision that I had been accepted for the finance.",
      "reviewer": "Rodney T"
    },
    {
      "type": "help"
    }
  ],
  "suppress_signoff": true
}`,
	DBV4_TP_APPLICATION_ACCEPTED: `{
  "subject": "{{sender.contact_name}}'s finance application has been approved! The job is ready to start.",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Great news! The job is ready to start."
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.contact_name}} has signed their credit agreement and the finance for the job is now in place. You can now begin the work when you'd like. Remember, the job has to be completed within 6 months of this email being sent to you."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Was this a mistake?",
          "subtext": "If something isn't right let us know by emailing <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a>"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_APPLICATION_ACCEPTED_DEPOSIT_CHANGED: `{
  "subject": "{{sender.contact_name}}'s finance application has been approved with a new deposit value.",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "{{sender.contact_name}}'s finance application has been approved but their deposit value has changed."
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Great news! {{sender.contact_name}} has been approved for finance so you can start the job when you're ready. However, {{sender.contact_name}} has chosen a larger deposit than the minimum you set, so you still need to collect {{deposit.difference}} from them.. Remember you have 6 months to complete the work."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What is the new deposit?",
          "subtext": "Your customer choose a deposit amount of {{deposit.applied}}, which is {{deposit.difference}} more than you asked for. You'll need to collect this difference directly from your customer if you haven't already. If something isn't right let us know by emailing <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_APPLICATION_CANCELLED: `{
  "subject": "{{sender.contact_name}}'s finance application has been cancelled",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}} - Unfortunately, your customers application has been cancelled."
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.contact_name}} asked either the lender or Kanda to cancel their finance application. They can still apply again if this was a mistake. To apply again you'll need to send them a new quote from your dashboard."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Was this a mistake?",
          "subtext": "If something isn't right let us know by emailing <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a>"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_APPLICATION_PENDING: `{
  "subject": "{{sender.contact_name}}'s finance application is pending approval! Don't start the job just yet.",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.contact_name}}'s application is currently pending approval from our lender. {{sender.contact_name}} has been informed by the lender of the next steps toc omplete their applciation. Once they have completed their application, we will inform you that the job is good to go."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What should I do?",
          "subtext": "For now, nothing. Just sit back and wait for the customer to complete their application. We'll inform you once they have done so."
        },
        {
          "text": "I have a question",
          "subtext": "If you need to reach out to us, you can email us directly at <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a>"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_CUSTOMER_REFERRED: `{
  "subject": "{{sender.contact_name}} needs to provide supporting information",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}} - {{sender.contact_name}}'s application is taking longer than usual"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "The lender has requested some more information from {{sender.contact_name}}. This usually happens when the lender wishes to verify some information on the customers finance application. The lender will have emailed them directly informing them of what they need to provide. Until the documents are received the finance application can't progress."
        },
        {
          "text": "It can take up to 24 hours for the lender to review this information once it's been submitted, but do give your customer a nudge if you haven't had an update from Kanda within 2 days."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_CUSTOMER_REJECTED: `{
  "subject": "{{sender.contact_name}}'s finance application was declined",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Unfortunately, {{sender.contact_name}}'s finance application has not been approved. We have informed them of this, and suggested they reach out to you to discuss the option to continue with the work without finance."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_JOB_DECLINED: `{
  "subject": "{{sender.contact_name}}}} has declined your job on Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.contact_name}}}} has declined your job on Kanda - if this was a mistake, please send them out a new job. You can do this easily by following the below link, duplicating the job and sending it to them"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_JOB_PAID_OUT: `{
  "subject": "{{sender.contact_name}}'s job has now been paid out!",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "We've processed payment on the job you completed for {{sender.contact_name}}. You should receive the payment from Kanda within a few hours. "
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What do I need to do?",
          "subtext": "Nothing, just sit tight. Get in touch with us if you haven't received payment within 4 hours of this email. Contact us at <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a>"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_JOB_SENT: `{
  "subject": "You've just sent a job to {{sender.contact_name}}",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Your job has now been sent to {{sender.contact_name}}. We will let you know if they apply for finance and what the outcome of their application is. We'll also send them a follow up email if they don't view the job or apply over the next few days."
        },
        {
          "text": "Remember, if this job is no longer needed you can simply archieve it on your dashboard."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_LEAD_DETAILS_PROVIDED: `{
  "subject": "Here are the details for the job you accepted on Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Here are the details for the job you have requested to quote for on Kanda:"
        }
      ]
    },
    {
      "type": "table",
      "rows": [
        {
          "type": "heading",
          "text": "Customer:",
          "colspan": "3"
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Name:",
              "colspan": "1"
            },
            {
              "text": "{{sender.contact_name}}",
              "colspan": "2"
            }
          ]
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Email:",
              "colspan": "1"
            },
            {
              "text": "{{sender.contact_email}}",
              "colspan": "2"
            }
          ]
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Mobile:",
              "colspan": "1"
            },
            {
              "text": "{{sender.contact_phone}}",
              "colspan": "2"
            }
          ]
        },
        {
          "type": "heading",
          "text": "Job Details:",
          "colspan": "3"
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Work type:",
              "colspan": "1"
            },
            {
              "text": "{{lead.work_type}}",
              "colspan": "2"
            }
          ]
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Descripion:",
              "colspan": "1"
            },
            {
              "text": "{{lead.description}}",
              "colspan": "2"
            }
          ]
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What are the next steps?",
          "subtext": "Once you have contacted the customer and have a quote for them, log into your dashboard and you'll see a draft we have created with the customers information. Uppdate this draft with your price and click send, easy as that!"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_LEAD_JOB_REQUESTED: `{
  "subject": "A customer has requested a quote",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "A customer has requested a quote from you via Kanda. The customer has been pre-approved for finance and is looking for the following works to be completed."
        }
      ]
    },
    {
      "type": "table",
      "rows": [
        {
          "type": "heading",
          "text": "Quote details:",
          "colspan": "3"
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Work type:",
              "colspan": "1"
            },
            {
              "text": "{{lead.work_type}}",
              "colspan": "2"
            }
          ]
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Descripion:",
              "colspan": "1"
            },
            {
              "text": "{{lead.description}}",
              "colspan": "2"
            }
          ]
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What are the next steps?",
          "subtext": "If you'd like to see the full details of this lead click below and accept the lead. It will then appear on your dashboard for you to quote like normal. You don't have to quote a job after accepting it."
        }
      ]
    },
    {
      "type": "button",
      "text": "View lead details",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_LEAD_REQUESTED: `{
  "subject": "A customer has requested a quote",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "A customer has requested a quote from you via Kanda. The customer has been pre-approved for finance and is looking for the following works to be completed."
        }
      ]
    },
    {
      "type": "table",
      "rows": [
        {
          "type": "heading",
          "text": "Quote details:",
          "colspan": "3"
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Work type:",
              "colspan": "1"
            },
            {
              "text": "{{lead.work_type}}",
              "colspan": "2"
            }
          ]
        },
        {
          "type": "row",
          "content": [
            {
              "text": "Descripion:",
              "colspan": "1"
            },
            {
              "text": "{{lead.description}}",
              "colspan": "2"
            }
          ]
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What are the next steps?",
          "subtext": "If you'd like to see the full details of this lead click below and accept the lead. It will then appear on your dashboard for you to quote like normal. You don't have to quote a job after accepting it."
        }
      ]
    },
    {
      "type": "button",
      "text": "View lead details",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_PREMIUM_CREDIT_SIGNED: `{
  "subject": "Information about Your Kanda subscription through Premium Credit",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Thank you for subscribing to Kanda! We want to provide you with important information about how your subscription payments will be processed:"
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Payment Processor",
          "subtext": "Your payment will be managed by our partner, <strong>Premium Credit</strong>. You'll see a direct debit set up under their name."
        },
        {
          "text": "Payment Schedule",
          "subtext": "Your first payment will be taken in <strong>1-3 days</strong>. After that, payments will be automatically processed <strong>on the 28th of each month</strong>."
        },
        {
          "text": "Subscription Period",
          "subtext": "Your subscription will run for <strong>12 months</strong>, with payments stopping automatically after 12 installments."
        }
      ]
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "If you have any questions about your payments or subscription, feel free to reach out to our support team at <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a>."
        }
      ]
    }
  ]
}`,
	DBV4_TP_SAT_NOTE_APPROVED: `{
  "subject": "{{sender.contact_name}}'s satisfaction note has been approved by Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.contact_name}} has signed the satisfaction note and Kanda has approved it. We'll process your payment within 48 hours."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What do I need to do?",
          "subtext": "Nothing, just sit tight. You'll receive payment within 48 hours (excluding weekends)."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_SAT_NOTE_DELAYED: `{
  "subject": "{{sender.contact_name}}'s satisfaction note is taking longer than usual to process",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.contact_name}} has signed the satisfaction note, however, it's taking Kanda longer than usual to verify the document. This can happen if we can't get hold of the customer or they have raised an issue about the works. We'll get in touch with you if there is a problem; if you don't hear from us then we're just trying to contact your customer."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What do I need to do?",
          "subtext": "Nothing, just sit tight. We will get in touch if we need anything - our team can't share anymore information at this point."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_SAT_NOTE_LENDER_REVIEW: `{
  "subject": "The satisfaction note signed by {{sender.contact_name}} has gone to the lender",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.contact_name}} has signed the satisfaction note and now needs to complete their welcome call with the lender. Once completed you’ll be paid within 48 hours. We’ve told them to look out for a call today."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What do I need to do?",
          "subtext": "Nothing, just sit tight. We'll update you of any changes or further action needed. Learn more about payments <a href=\"https://clt1489884.bmeurl.co/10B8FC47\">here</>"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_SAT_NOTE_LENDER_REVIEWED: `{
  "subject": "The welcome call with {{sender.contact_name}} has been completed",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Great news, the welcome call has been completed and payment is on it’s way to your bank account. This will land within 48-72 hours."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What do I need to do?",
          "subtext": "Nothing, just sit tight. We'll update you of any changes or further action needed. Learn more about payments <a href=\"https://clt1489884.bmeurl.co/10B8FC47\">here</>"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_SAT_NOTE_SIGNED: `{
  "subject": "{{sender.contact_name}} has signed the satisfaction note for your job",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.contact_name}} has signed the satisfaction note! We'll process your now review the satisfaction note within 24-48 hours."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What do I need to do?",
          "subtext": "Nothing, just sit tight. You'll receive an update within 24-48 hours (excluding weekends)."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_SAT_NOTE_VIEWED: `{
  "subject": "{{sender.contact_name}} has viewed the satisfaction note for your job",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.contact_name}} has viewed the satisfaction note we have sent to them to sign off on your work and get you paid."
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "What do I need to do?",
          "subtext": "Nothing, just sit tight. However, if your customer isn't satisfied with the work and it is something related to the product you have instaled, you might have to go back to correct any issues."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_SIGN_DOCUMENTS: `{
  "subject": "{{sender.contact_name}} needs to sign their credit agreement",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Great news! {{sender.contact_name}}'s application has been approved by the lender - all they need to do is sign their credit documents. They can access these by following the link sent to them by both Kanda and the lender. "
        },
        {
          "text": "Kanda will update you once the documents have been signed so that you know what the next steps are. We've told the customer what to do."
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_TP_SUBSCRIPTION_REMINDER: `{
  "subject": "Your Kanda subscription will renew soon",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "I'm writing to inform you that your Kanda subscription renewal is coming up on {{extra.renewal_date}}. In the lead up, our team will give you a call to discuss if you'd like to renew and gather any feedback you might have."
        },
        {
          "text": "In the meantime, if you have any questions, please feel free to reach out to our support team at <a href=\"mailto:sales@kanda.co.uk\">sales@kanda.co.uk</a>."
        }
      ]
    }
  ]
}`,
	DBV4_USER_CLAIM_ACCOUNT: `{
  "subject": "You have been invited to join {{sender.contact_name}}'s team on Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You have been invited to join {{sender.contact_name}}'s team on Kanda. Follow the link below to claim your free account."
        }
      ]
    },
    {
      "type": "button",
      "text": "Claim you account",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_USER_CONSENT: `{
  "subject": "We need your consent to move your loan over to our new provider",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hello {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Unfortunately, Kanda has stopped its commercial relationship with the lender - Omni Capital - who has underwritten your loan. Due to this Omni Capital is not paying out funds to Kanda and therefore, your service provider in a normal timeframe. This means we're unable to fulfill your order with them and pay your tradesperson."
        },
        {
          "text": "We do not believe Omni Capital to be in trouble at this time or for this to cause a risk to you, however, since we can't guarantee payment to your service provider on time we can't fulfil your order with them. This means you'll need to find another method of payment."
        },
        {
          "text": "We're offering you the option to reapply for the same loan or better with another lender on our platform called Propensio Finance. Alternatively, you can cancel your finance agreement and pay your tradesperson directly. Please remember that the finance agreement is separate from any contract of sale you have with your tradesperson."
        }
      ]
    },
    {
      "type": "compact_rows",
      "rows": [
        {
          "text": "&#x2022; If your current loan is a 0% loan then the new loan <b>you apply for</b> will be identical <b>if approved</b>."
        },
        {
          "text": "&nbsp;"
        },
        {
          "text": "&#x2022; If your current loan is an interest-bearing loan then the number of years will be the same but the APR will be 14.9% APR on the loan <b>you apply for if approved</b>."
        },
        {
          "text": "&nbsp;"
        },
        {
          "text": "&#x2022; If your current loan is BNPL 6+60 16.9% APR, then the new loan <b>you apply for</b> will be the same term but the APR will be 14.9% APR <b>if approved</b>."
        },
        {
          "text": "&nbsp;"
        },
        {
          "text": "&#x2022; If the loan provider cannot offer you the same option then they will do their best to offer an alternative rate."
        }
      ]
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "To reapply for the new loan term above please click the button below to consent to this - we will take care of the rest. You'll hear from the lender that your application has been submitted and whether it has been approved or not. If it has you'll need to sign a new finance agreement (online). We'll then cancel your agreement with omni capital. <b>Propensio will perform a soft credit check on you.</b>"
        },
        {
          "text": "<b>If you have any questions before consenting please email <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk</a></b>"
        },
        {
          "text": "Click the button below to give consent (consent given on click). "
        }
      ]
    },
    {
      "type": "button",
      "text": "Provide consent",
      "url": "{{cta_url}}"
    }
  ],
  "sms": "Please check your email for an important update about your job from {{sender.contact_name}}."
}`,
	DBV4_USER_DEV_CLAIM_ACCOUNT: `{
  "subject": "You have been invited to join {{sender.contact_name}}'s team on Kanda as a developer",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You have been invited as a developer to join {{sender.contact_name}}'s team on Kanda. Follow the link below to claim your account and get integration instructions for the following:"
        }
      ]
    },
    {
      "type": "statements",
      "rows": [
        {
          "text": "Updating your website",
          "subtext": "You'll find instructions on legal language that will need to be displayed on your website"
        },
        {
          "text": "Adding a finance calculator",
          "subtext": "There is an iframe code snippet that you'll be able to include on your website. This will show your customers a finance calculator so they can see what their monthly costs would be with Kanda"
        },
        {
          "text": "API and plugin integrations",
          "subtext": "We have plugins for a quick installation on WordPress webistes, as well as full API integration documentation"
        }
      ]
    },
    {
      "type": "button",
      "text": "Claim you account",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_USER_ID_CHECKS_DECLINED: `{
  "subject": "Your ID check has been declined",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Thank you for completing your identity checks with Kanda. Unfortunately, your ID has been declined. If you believe this was a mistake, please contact Kanda at <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk</a>"
        }
      ]
    }
  ]
}`,
	DBV4_USER_ID_CHECKS_VERIFIED: `{
  "subject": "Your ID check has been verified",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Thank you for completing your identity checks with Kanda. Your ID has been verified."
        }
      ]
    }
  ]
}`,
	DBV4_USER_KANDA_REFEREE_INVITE: `{
  "subject": "{{sender.contact_name}} sent you £50",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hey {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "<b>{{sender.contact_name}}</b> uses Kanda to grow their business by offering their clients financing options. They want to help you grow your business, so they've sent you £50-off your yearly subscription to Kanda."
        },
        {
          "text": "With Kanda you can offer your customers finance options like 0% finance and BNPL. We're a proven method of closing more customers and increasing the amount they spend with businesses."
        },
        {
          "text": "Click below to join <b>{{sender.contact_name}}</b> and 1000s of other businesses growing with Kanda"
        }
      ]
    },
    {
      "type": "button",
      "text": "Join Kanda Now",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_USER_LEGACY_MIGRATION: `{
  "subject": "Claim your new Kanda account",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Time to claim your new Kanda dashboard"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Welcome back to Kanda! To claim your new dashboard account, please follow the link below."
        },
        {
          "text": "In your new account you'll be able to build quotes and offer 11.9% APR over up to 10 years. Plus, we removed the fee for 11.9% APR up to 7 years."
        },
        {
          "text": "Click below to claim your account."
        }
      ]
    },
    {
      "type": "button",
      "text": "Claim your account",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_USER_REFEREE_INVITE: `{
  "subject": "You have been invited to join Kanda by {{sender.contact_name}}",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You have been invited to join Kanda by {{sender.contact_name}}. Follow the link below to sign up and claim your account."
        }
      ]
    },
    {
      "type": "button",
      "text": "Sign up on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_USER_RESET_PASSWORD: `{
  "subject": "Reset your password on Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}}"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "A password reset has been requested for your account. If this was you, please follow the below link. If this was not you, please don't follow the link and contact Kanda at <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk</a>."
        }
      ]
    },
    {
      "type": "button",
      "text": "Reset your password",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_USER_SIGNUP: `{
  "subject": "Welcome to Kanda - verify your email to activate your account",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Welcome to Kanda! Please follow the link below to confirm your email and activate your account."
        }
      ]
    },
    {
      "type": "button",
      "text": "Confirm your email",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_USER_VERIFY_DIRECTOR: `{
  "subject": "Kanda: Verify you are a director/owner of {{sender.trading_name}}",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Someone has signed {{sender.trading_name}} up for Kanda and registered you as a director/owner - please follow the link below to verify your identity."
        }
      ]
    },
    {
      "type": "button",
      "text": "Verify on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_USER_VERIFY_DIRECTOR_REMINDER: `{
  "subject": "Reminder: ID check required to complete Kanda set up for {{sender.trading_name}}",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "{{sender.trading_name}} has been signed up to offer finance with Kanda."
        },
        {
          "text": "As a director of the company you need to complete a 2 minute ID check. You'll need your passport or drivers license."
        },
        {
          "text": "Once verified, {{sender.trading_name}} can start offering finance."
        }
      ]
    },
    {
      "type": "button",
      "text": "Verify on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
	DBV4_USER_VERIFY_EMAIL: `{
  "subject": "Here's your link to continue to Kanda",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hey!"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Here's your new link to sign in to Kanda. Click the button below to continue."
        },
        {
          "text": "Didn't ask for a new link or didn't follow an expired link? Email Kanda at <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk</a> to secure your account."
        }
      ]
    },
    {
      "type": "button",
      "text": "Continue to Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`,
}
