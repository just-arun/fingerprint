# Web Biometric Authentication

## Installation
```sh
yarn add web-biometric
```

login with device fingerprint


## Usage

```js
import { StringToUint8Array, Challenge } from "web-biometric";

const options = {
	publicKey:{
		rp: {
			name: "Web App Name",
			id: "my-website.com",
		},

		user: {
			id: StringToUint8Array("user-uuid-with-16-char-length"),
			name: "userEmailAddress@example.com",
			displayName: "User Display Name"
		},

		pubKeyCredParams: [{
			type: "public-key",
			alg: -7
		}],

		attestation: "none",

		timeout: 60000,

		# these option should be provided from server
		challenge: Challenge("this-is-challenge-text-and-should-be-long"),

		authenticatorSelection: {
			authenticatorAttachment: "platform",
			userVerification: "required",
		}
	}
}

const registerBiometricFunction = () => {
	try {
		const { credential } = await Register(options);

		const base64EncodedId = credential.id;

		console.log(base64EncodedId)
	} catch (err) {
		console.error(err);
	}
}

```


