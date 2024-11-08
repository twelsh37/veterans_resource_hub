# Benefit Categories
# This file lists out the unique benifit categories across all VA forms
#  along with its description

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

# Create a set to store unique benefit categories
unique_categories = set()

# Collect unique benefit categories from all forms
for form in data['data']:
    for category in form['attributes']['benefit_categories']:
        # Create a tuple of name and description to store in set
        unique_categories.add((category['name'], category['description']))

# Print table header
print("\n{:<30} | {:<50}".format("Name", "Description"))
print("-" * 82)  # Separator line

# Print each unique category
for name, description in sorted(unique_categories):
    # Truncate description if too long
    desc_truncated = description[:47] + "..." if len(description) > 70 else description
    print("{:<30} | {:<50}".format(name, desc_truncated))
