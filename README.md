# utagData-tealium-to-gtm-datalayer
Google Tag Manager Javascript to convert all the Tealium JSON to a datalayer push for GTM

# how to use
Simply copy the script as a new HTML tag with an initialisation trigger

Example of an existing Tealium json in the page:

<script type="application/json" id="utagData">
	{
	"sample_day_of_week" : "Monday",
	"sample_logged_in" : "N",
	"sample_channel" : "website",
	"sample_language_code" : "fr-CH",
	"sample_timestamp" : "20230206",
	"sample_pagename" : "Page XYZ",
	"sample_page_type" : "Breaking News",
	"sample_site_section" : "News" 
        }
</script>

(Where id="utagData" is the identificator mentioned in the script)

# Google Tag Manager data layer output

dataLayer.push({
  sample_day_of_week: "Monday",
  sample_logged_in: "N",
  sample_channel: "website",
  sample_language_code: "fr-CH",
  sample_timestamp: "20230206",
  sample_pagename: "Page XYZ",
  sample_page_type: "Breaking News",
  sample_site_section: "News"
})
