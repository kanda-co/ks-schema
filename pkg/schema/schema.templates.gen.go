package schema

type TName string

const (
	DBV4_HO_AIP_PREAPPROVED                      TName = "DBV4_HO_AIP_PREAPPROVED"
	DBV4_HO_APPLICATION_APPROVED                 TName = "DBV4_HO_APPLICATION_APPROVED"
	DBV4_HO_APPLICATION_CANCELLED                TName = "DBV4_HO_APPLICATION_CANCELLED"
	DBV4_HO_APPLICATION_PAY_DEPOSIT              TName = "DBV4_HO_APPLICATION_PAY_DEPOSIT"
	DBV4_HO_APPLICATION_REFERRED                 TName = "DBV4_HO_APPLICATION_REFERRED"
	DBV4_HO_APPLICATION_REJECTED                 TName = "DBV4_HO_APPLICATION_REJECTED"
	DBV4_HO_APPLICATION_SAT_NOTE_SENT            TName = "DBV4_HO_APPLICATION_SAT_NOTE_SENT"
	DBV4_HO_APPLICATION_SAT_NOTE_SENT_REMINDER   TName = "DBV4_HO_APPLICATION_SAT_NOTE_SENT_REMINDER"
	DBV4_HO_APPLICATION_SAT_NOTE_SIGNED          TName = "DBV4_HO_APPLICATION_SAT_NOTE_SIGNED"
	DBV4_HO_APPLICATION_SIGN_DOCUMENTS           TName = "DBV4_HO_APPLICATION_SIGN_DOCUMENTS"
	DBV4_HO_INITIAL                              TName = "DBV4_HO_INITIAL"
	DBV4_HO_JOB_DECLINED                         TName = "DBV4_HO_JOB_DECLINED"
	DBV4_HO_JOB_STARTED                          TName = "DBV4_HO_JOB_STARTED"
	DBV4_HO_LEAD_DETAILS_PROVIDED_TP_ASSIGNED    TName = "DBV4_HO_LEAD_DETAILS_PROVIDED_TP_ASSIGNED"
	DBV4_HO_LEAD_POSTED                          TName = "DBV4_HO_LEAD_POSTED"
	DBV4_HO_SUBMIT_APPLICATION                   TName = "DBV4_HO_SUBMIT_APPLICATION"
	DBV4_TP_2ND_LINE_REJECTED                    TName = "DBV4_TP_2ND_LINE_REJECTED"
	DBV4_TP_ACCOUNT_APPROVED                     TName = "DBV4_TP_ACCOUNT_APPROVED"
	DBV4_TP_APPLICATION_ACCEPTED                 TName = "DBV4_TP_APPLICATION_ACCEPTED"
	DBV4_TP_APPLICATION_ACCEPTED_DEPOSIT_CHANGED TName = "DBV4_TP_APPLICATION_ACCEPTED_DEPOSIT_CHANGED"
	DBV4_TP_APPLICATION_CANCELLED                TName = "DBV4_TP_APPLICATION_CANCELLED"
	DBV4_TP_CUSTOMER_REFERRED                    TName = "DBV4_TP_CUSTOMER_REFERRED"
	DBV4_TP_CUSTOMER_REJECTED                    TName = "DBV4_TP_CUSTOMER_REJECTED"
	DBV4_TP_JOB_DECLINED                         TName = "DBV4_TP_JOB_DECLINED"
	DBV4_TP_JOB_PAID_OUT                         TName = "DBV4_TP_JOB_PAID_OUT"
	DBV4_TP_JOB_SENT                             TName = "DBV4_TP_JOB_SENT"
	DBV4_TP_LEAD_DETAILS_PROVIDED                TName = "DBV4_TP_LEAD_DETAILS_PROVIDED"
	DBV4_TP_LEAD_REQUESTED                       TName = "DBV4_TP_LEAD_REQUESTED"
	DBV4_TP_SAT_NOTE_APPROVED                    TName = "DBV4_TP_SAT_NOTE_APPROVED"
	DBV4_TP_SAT_NOTE_DELAYED                     TName = "DBV4_TP_SAT_NOTE_DELAYED"
	DBV4_TP_SAT_NOTE_SIGNED                      TName = "DBV4_TP_SAT_NOTE_SIGNED"
	DBV4_TP_SAT_NOTE_VIEWED                      TName = "DBV4_TP_SAT_NOTE_VIEWED"
	DBV4_TP_SIGN_DOCUMENTS                       TName = "DBV4_TP_SIGN_DOCUMENTS"
	DBV4_USER_CLAIM_ACCOUNT                      TName = "DBV4_USER_CLAIM_ACCOUNT"
	DBV4_USER_REFEREE_INVITE                     TName = "DBV4_USER_REFEREE_INVITE"
	DBV4_USER_RESET_PASSWORD                     TName = "DBV4_USER_RESET_PASSWORD"
	DBV4_USER_SIGNUP                             TName = "DBV4_USER_SIGNUP"
	DBV4_USER_VERIFY_EMAIL                       TName = "DBV4_USER_VERIFY_EMAIL"
)

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
	"DBV4_HO_AIP_PREAPPROVED": `{
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
	"DBV4_HO_APPLICATION_APPROVED": `{
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
  ]
}`,
	"DBV4_HO_APPLICATION_CANCELLED": `{
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
	"DBV4_HO_APPLICATION_PAY_DEPOSIT": `{
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
  ]
}`,
	"DBV4_HO_APPLICATION_REFERRED": `{
  "subject": "You need to provide supporting documents for your finance application",
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
          "text": "Your finance application has been reviewed by the lender and they've asked that you submit some extra documents. You will have received an email from <strong>{{lender.contact_email}}</strong>. You can follow the link in that email to submit your documents or email it back to them. Click the button below to find out more. Please check your spam folder"
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
  ]
}`,
	"DBV4_HO_APPLICATION_REJECTED": `{
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
  ]
}`,
	"DBV4_HO_APPLICATION_SAT_NOTE_SENT": `{
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
  ]
}`,
	"DBV4_HO_APPLICATION_SAT_NOTE_SENT_REMINDER": `{
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
  ]
}`,
	"DBV4_HO_APPLICATION_SAT_NOTE_SIGNED": `{
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
	"DBV4_HO_APPLICATION_SIGN_DOCUMENTS": `{
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
  ]
}`,
	"DBV4_HO_INITIAL": `{
  "subject": "{{sender.contact_name}} has sent you a quote on Kanda",
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
  "suppress_signoff": true
}`,
	"DBV4_HO_JOB_DECLINED": `{
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
	"DBV4_HO_JOB_STARTED": `{
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
	"DBV4_HO_LEAD_DETAILS_PROVIDED_TP_ASSIGNED": `{
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
	"DBV4_HO_LEAD_POSTED": `{
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
	"DBV4_HO_SUBMIT_APPLICATION": `{
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
  ]
}`,
	"DBV4_TP_2ND_LINE_REJECTED": `{
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
	"DBV4_TP_ACCOUNT_APPROVED": `{
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
      "text": "Book welcome call",
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
	"DBV4_TP_APPLICATION_ACCEPTED": `{
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
	"DBV4_TP_APPLICATION_ACCEPTED_DEPOSIT_CHANGED": `{
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
          "text": "Great news! Your {{sender.contact_name}} has been approved for finance so you can start the job when you're ready. However, they have chosen a higher deposit than the minimum you set. Remember you have 6 months to complete the work."
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
	"DBV4_TP_APPLICATION_CANCELLED": `{
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
	"DBV4_TP_CUSTOMER_REFERRED": `{
  "subject": "{{sender.contact_name}} needs to provide supporting information",
  "flow_type": "{{flow_type}}",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{receiver.contact_name}} - Rob Gallagher's application is taking longere than usual"
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
	"DBV4_TP_CUSTOMER_REJECTED": `{
  "subject": "{{sender.contact_name}}'s application was declined - we've offered them a 2nd chance to apply",
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
          "text": "Unfortunately, {{sender.contact_name}}'s finance application has not been approved. So, we've given your customer the option to reapply with our 2nd line lender. We'll ask the customer to check if they are eligible and if they are then they can apply in one click."
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
          "text": "How does the 2nd line option work?",
          "subtext": "Kanda's 2nd line lender offers the same rate of 18.9% APR to all customers who have been rejected. A second line option is only available on some installations due to the lender's restrictions."
        }
      ]
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "You can check if this job is eligible for a 2nd line option, and if the customer has chosen to apply for it, by viewing the offered finance section of your job. Click below to check now. The second line application takes a little longer to process but you'll be updated in the usual ways within 1-2 hours."
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
	"DBV4_TP_JOB_DECLINED": `{
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
	"DBV4_TP_JOB_PAID_OUT": `{
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
	"DBV4_TP_JOB_SENT": `{
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
	"DBV4_TP_LEAD_DETAILS_PROVIDED": `{
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
	"DBV4_TP_LEAD_REQUESTED": `{
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
	"DBV4_TP_SAT_NOTE_APPROVED": `{
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
          "text": "{{sender.contact_name}} has signed the satisfaction note and Kanda has approved it@ We'll rpocess your payment within 48 hours."
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
	"DBV4_TP_SAT_NOTE_DELAYED": `{
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
	"DBV4_TP_SAT_NOTE_SIGNED": `{
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
	"DBV4_TP_SAT_NOTE_VIEWED": `{
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
	"DBV4_TP_SIGN_DOCUMENTS": `{
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
	"DBV4_USER_CLAIM_ACCOUNT": `{
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
	"DBV4_USER_REFEREE_INVITE": `{
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
	"DBV4_USER_RESET_PASSWORD": `{
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
	"DBV4_USER_SIGNUP": `{
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
	"DBV4_USER_VERIFY_EMAIL": `{
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
