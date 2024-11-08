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

# Get unique benefit categories
benefit_categories = set()
for form in data['data']:
    for category in form['attributes']['benefit_categories']:
        benefit_categories.add(category['name'])

# Sort the categories alphabetically
benefit_categories = sorted(benefit_categories)

# For each category, print the forms
for category in benefit_categories:
    # Print category header
    print(f"\n\n=== {category} ===")
    print("{:<30} | {:<21} | {:<120}".format("Form Name", "Benefit Category", "Title"))
    print("-" * 112)  # Adjusted separator line length
    
    # Find and print all forms for this category
    for form in data['data']:
        if any(cat['name'] == category for cat in form['attributes']['benefit_categories']):
            form_name = form['attributes']['form_name']
            title = form['attributes']['title']
            # Truncate title if too long
            title_truncated = title[:47] + "..." if len(title) > 100 else title
            
            print("{:<30} | {:<21} | {:<120}".format(
                category,
                form_name,
                title_truncated
            ))
