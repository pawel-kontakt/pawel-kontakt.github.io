export class EnvSettings {
    name;
    computeUrl;
    appsUrl;
    devicesUrl;
    apiKey;
    constructor(name, computeUrl, appsUrl, devicesUrl) {
        this.name = name;
        this.computeUrl = computeUrl;
        this.appsUrl = appsUrl;
        this.devicesUrl = devicesUrl;
        this.apiKey = null;
    }

    set apiKey(apiKey) {
        this.apiKey = apiKey;
    }
}

export const test = new EnvSettings(
    'Test',
    'https://apps-api.test.kontakt.io',
    'https://api.test.kontakt.io',
    'https://testapi.kontakt.io'
);

export const accept0 = new EnvSettings(
    'Accept-0',
    'https://apps.accept-0.kontakt.io',
    'https://api.accept-0.kontakt.io',
    'https://acceptapi.kontakt.io'
);

export const prodUs = new EnvSettings(
    'Prod-0 US',
    'https://apps.cloud.us.kontakt.io',
    'https://api.cloud.us.kontakt.io',
    'https://api.kontakt.io'
);

export const prodUk = new EnvSettings(
    'Prod-0 UK',
    'https://apps.cloud.uk.kontakt.io',
    'https://api.cloud.uk.kontakt.io',
    'https://api.kontakt.io'
);

export const envs = [
    test,
    accept0,
    prodUs,
    prodUk
]
