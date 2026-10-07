import TeachKit

STATIC_URL = "static/"
STATICFILES_DIRS = [TeachKit/ "static"]   # tells Django about your top-level static folder

TEMPLATES = [
    {
        "DIRS": [TeachKit / "templates"],   # change to "template" if you keep that name
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]