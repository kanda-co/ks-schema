package schema

const DBV4_HO_APPLICATION_APPROVED = `{
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
}`

const DBV4_HO_APPLICATION_PAY_DEPOSIT = ``

const DBV4_HO_APPLICATION_REFERRED = `{
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
          "subtext": "We’re here for you all the way. If you have any questions about the loan, or the job itself, please reach out to us by emailing <a href=\"mailto:help@kanda.co.uk\">help@kanda.co.uk.</a>"
        }
      ]
    },
    {
      "type": "button",
      "text": "View on Kanda",
      "url": "{{cta_url}}"
    }
  ]
}`

const DBV4_HO_APPLICATION_REJECTED = `{
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
}`

const DBV4_HO_APPLICATION_SAT_NOTE_SENT = `{
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
}`

const DBV4_HO_APPLICATION_SAT_NOTE_SENT_REMINDER = `{
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
}`

const DBV4_HO_APPLICATION_SAT_NOTE_SIGNED = `{
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
}`

const DBV4_HO_APPLICATION_SIGN_DOCUMENTS = `{
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
}`

const DBV4_HO_INITIAL = `{
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
          "text": " We help you get trusted tradespeople in to do the job on finance. With our flexible finance options you can choose the plan that’s right for you, apply, and get approved in minutes."
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
}`

const DBV4_HO_SUBMIT_APPLICATION = `{
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
          "subtext": "If you have any questions about your finance application don’t hesitate to let us know. We’re here to help."
        }
      ]
    }
  ]
}`

const DBV4_TP_2ND_LINE_REJECTED = `{
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
}`

const DBV4_TP_APPLICATION_ACCEPTED = `{
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
}`

const DBV4_TP_APPLICATION_ACCEPTED_DEPOSIT_CHANGED = `{
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
}`

const DBV4_TP_APPLICATION_CANCELLED = `{
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
}`

const DBV4_TP_CUSTOMER_REFERRED = `{
  "subject": "{{sender.contact_name}} needs to provide supporting information",
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
          "text": "The lender has requested some more information from {{sender.contact_name}}. This usually happens when the lender wishes to verify some information on the customers finance application."
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
}`

const DBV4_TP_CUSTOMER_REJECTED = `{
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
}`

const DBV4_TP_JOB_PAID_OUT = `{
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
}`

const DBV4_TP_JOB_SENT = `{
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
}`

const DBV4_TP_SAT_NOTE_APPROVED = `{
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
}`

const DBV4_TP_SAT_NOTE_DELAYED = `{
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
}`

const DBV4_TP_SAT_NOTE_SIGNED = `{
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
}`

const DBV4_TP_SAT_NOTE_VIEWED = `{
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
}`

const DBV4_TP_SIGN_DOCUMENTS = `{
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
}`
