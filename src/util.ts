export const NewChallenge = () => window
    .crypto
    .getRandomValues(new Uint8Array(40)).buffer;

export const NewUint8Array = (size?: number) =>
    new Uint8Array(!!size ? size : 16);

export const GetExampleCredentialCreationOptions = () => ({
    publicKey: {
        rp: {
            name: "Web App Name",
        },

        user: {
            id: NewUint8Array(),
            name: "john.doe@example.com",
            displayName: "John Doe"
        },

        pubKeyCredParams: [{
            type: "public-key",
            alg: -7
        }],

        attestation: "none",

        timeout: 60000,

        challenge: NewChallenge(),
        authenticatorSelection: {
            authenticatorAttachment: "platform",
            userVerification: "required",
        }
    },

})