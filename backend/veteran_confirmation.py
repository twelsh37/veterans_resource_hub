# Veteran Confirmation

import urllib3
from dotenv import load_dotenv
import requests
import os
import json

load_dotenv() 

# Load our sandbox API key
KEY = os.getenv('VA_VETERAN_CONFIRMATION_API_KEY')
print(f'API_KEY: {KEY}')

# Update URL for veteran confirmation endpoint
url = 'https://sandbox-api.va.gov/services/veteran-confirmation/v1/status'
headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'apikey': KEY
}

# Veteran data payload
payload = {
    "firstName": "Alfredo",
    "lastName": "Armstrong",
    "birthDate": "1993-06-08",
    "middleName": "M",
    "gender": "M",
    "streetAddressLine1": "17020 Tortoise St",
    "city": "Round Rock",
    "zipCode": "78664",
    "state": "TX",
    "country": "USA",
    "homePhoneNumber": "555-555-5555",
    "mothersMaidenName": "Smith",
    "birthPlaceCity": "Johnson City",
    "birthPlaceState": "MA",
    "birthPlaceCountry": "USA"
}

# Disables SSL Verification
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
# POST request with veteran data payload
response = requests.post(url, headers=headers, json=payload, verify=False)
data = response.json()

# Print the response data
print(json.dumps(data, indent=2))
