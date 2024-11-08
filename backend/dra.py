# Decision reviews and appeals 
# This file lists out all the forms related to decision reviews and appeals

import urllib3
from dotenv import load_dotenv
import requests
import os
import json

load_dotenv() 

# Load our sandbox API key
KEY = os.getenv('VA_FORMS_API_KEY')

# URL to use the sandbox endpoint
url = 'https://sandbox-api.va.gov/services/va_forms/v0/forms'
headers = {
    'accept': 'application/json',
    'apikey': KEY
}

# Disables SSL Verification
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
response = requests.get(url, headers=headers, verify=False)
data = response.json()

# Print table header
print("\n{:<15} | {:<30} | {:<50}".format("Form Name", "Benefit Category", "Title"))
print("-" * 97)  # Separator line

# Filter and print forms with "Decision reviews and appeals" category
for form in data['data']:
    benefit_cats = form['attributes']['benefit_categories']
    # Check if "Decision reviews and appeals" is in the form's benefit categories
    if any(cat['name'] == "Decision reviews and appeals" for cat in benefit_cats):
        form_name = form['attributes']['form_name']
        title = form['attributes']['title']
        # Truncate title if too long
        title_truncated = title[:47] + "..." if len(title) > 90 else title
        
        print("{:<15} | {:<30} | {:<50}".format(
            form_name,
            "Decision reviews and appeals",
            title_truncated
        ))
