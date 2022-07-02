export const ChallengeFromString = (str: string) => window
	.crypto
	.getRandomValues(StringToUint8Array(str)).buffer;

export const StringToUint8Array = (str?: string) =>
new TextEncoder().encode(!!str ? str : "user-uuid-with-16-char-length")

/**
 * `GetExampleCredentialCreationOptions` is meant for quick demo and not meant for production please use our other keys to create credentials
 * @returns {CredentialCreationOptions} example create credential option
 */
export const GetExampleCredentialCreationOptions = (): CredentialCreationOptions => ({
	publicKey: {
		rp: {
			name: "Web App Name",
		},

		user: {
			id: StringToUint8Array(),
			name: "john.doe@example.com",
			displayName: "John Doe"
		},

		pubKeyCredParams: [{
			type: "public-key",
			alg: -7
		}],

		attestation: "none",

		timeout: 60000,

		challenge: ChallengeFromString("this-is-challenge-text-and-should-be-long"),
		authenticatorSelection: {
			authenticatorAttachment: "platform",
			userVerification: "required",
		}
	},
})


export const StringToArrayBuffer = (str: string) => {
	let buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
	let bufView = new Uint16Array(buf);
	for (let i = 0, strLen = str.length; i < strLen; i++) {
		bufView[i] = str.charCodeAt(i);
	}
	return buf;
}

