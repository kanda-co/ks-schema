package schema

const DBV4_HO_INITIAL = `{
  "subject": "{{sender.contact_name}} has sent you a quote on Kanda",
  "flow_type": "example",
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

const DBV4_TP_JOB_SENT = `{
  "subject": "You've just sent a job to {{receiver.contact_name}}",
  "flow_type": "example",
  "body": [
    {
      "type": "heading",
      "text": "Hi {{sender.contact_name}},"
    },
    {
      "type": "text",
      "rows": [
        {
          "text": "Your job has now been sent to {{receiver.contact_name}}. We will let you know if they apply for finance and what the outcome of their application is. We'll also send them a follow up email if they don't view the job or apply over the next few days."
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
