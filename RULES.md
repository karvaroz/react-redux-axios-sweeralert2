# Frontend Developer Coding Challenge


## Situation description

As we saw on the challenge stack section, for each of our customers, we keep a
configuration object stored in the customer data micro-service.

An example of the object we store and access for each customer is:

```
{
    "SUBSCRIPTION": "basic",
    "CREATION_DATE": "2013-03-10T02:00:00Z",
    "LAST_PAYMENT_DATE": "2020-01-10T09:25:00Z",
    "theme_name": "Tropical Island",
    "ENABLED_FEATURES": {
        "CERTIFICATES_INSTRUCTOR_GENERATION": true,
        "INSTRUCTOR_BACKGROUND_TASKS": true,
        "ENABLE_COURSEWARE_SEARCH": true,
        "ENABLE_COURSE_DISCOVERY": true,
        "ENABLE_DASHBOARD_SEARCH": true,
        "ENABLE_EDXNOTES": true
    },
    "language_code": "en",
    "banner_message": "<p><span>Welcome</span> to Mr X's website</p>",
    "displayed_timezone": "America/Bogota",
    "user_profile_image": "https://i.imgur.com/LMhM8nn.jpg",
    "user_email": "barack@aol.com"
}
```

This object is very flexible and it can change by other services and tools. When
you modify this object, you should only change the fields you need.


## Challenge

The challenge for you is to create a nice front end application where a
particular customer can interact with his or her own data. This application
should have good usability patterns, be nice to eye, look good in different
screen sizes and also prevent the user from damaging the information we keep
stored.

For the technology, we use react and since it is arguably the biggest framework 
out there we would prefer that you use it too. Please don't just use a placeholder (create-react-app)
with hundreds of files if you don't need them. Remember that a key aspect of the
solution is the quality of the code.

Look at each field, its name and value and you will see we have different data
types. Some may require a different type of input field, a selector or a complex
widget to be correctly modified. Some fields are read only and some are even
private fields.

You can imagine this application will eventually be the settings page for the
user account page. Make your users love it.

Now let's talk about each of the fields.

### SUBSCRIPTION

The tier of service the user is in. It might be one of: "free", "basic",
"premium". Stored as a string. The user should not be able to modify it, but he
needs to see it.

### CREATION_DATE

A datetime in ISO format. Stored as a string, the user might see it, but the
format is not very user friendly. The user must not be able to modify it.

### LAST_PAYMENT_DATE

A datetime in ISO format. Stored as a string, the user needs to see it, but the
format is not very user friendly. The user must not be able to modify it.

### theme_name

This is one of the variables the user needs to choose. He or she can pick it
from a list:

- "Simply Fabulous",
- "Tropical Island",
- "Safari",
- "Tranquility",
- "Mustache Bash",
- "Candy Crush",
- "Garden Party"


### ENABLED_FEATURES

This is a nested field, the user must be able to select which feature he or she wants
to turn on or off. The ability to change a specific feature also depends on the
SUBSCRIPTION level. Users in the free tier can only turn on one of the features.
Users in the Basic tier can choose to change up to 3 features, and Users in the
premium tier can choose to change any of them.


### language_code

The ISO_639 language for the user. Stored as a string. The user can choose from:

- Chinese | zh
- Italian | it
- English | en
- Spanish | es
- French  | fr
- German  | de

Only the 2 letter code is stored.

### banner_message

A string storing an html field where the user display a welcome message.
It needs to be escaped.


### displayed_timezone

A string representing any valid time zone in the `"America/Bogota"` format.
(https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

### user_profile_image

A string field containing the user's profile image URL. The user must see the
photo, but to keep this challenge simple, there is no need for him or her to change it.

### user_email

A string representing the users email. The user can change it, but it would be
safer to validate that the input is a real email.
