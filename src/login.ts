



export const Login = async (challenge: BufferSource, id: BufferSource) => {
	try {
		if (window.navigator) {
			if (window.navigator.credentials) {
				const isAvailable = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
				if (!isAvailable) {
					return Promise.reject("user verifying platform authenticator not available")
				}
				const credential = await window.navigator.credentials.get({
					publicKey: {
						timeout: 60000,
						allowCredentials: [{
							id,
							transports: ["usb", "nfc", "ble", "internal"],
							type: "public-key"
						}],
						challenge
					}
				})
				return { credential }
			}
			return Promise.reject("credentials not defined")
		}
		return Promise.reject("navigator not defined")
	} catch (err) {
		return Promise.reject(err)
	}
}

