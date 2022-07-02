
/**
 * register user biometric credentials using publickey and challenge from application server
 * @param options options contains public key and challenge for getting biometric credential
 * @returns 
 */
export const Register = async (options: CredentialCreationOptions) => {
	try {
		if (!!window) {
			let localOptions: CredentialCreationOptions = {
				...options,
			}
			const credential = await window.navigator
				.credentials.create(localOptions)
			// const credentials
			return {
				credential,
				options: localOptions,
			}
		}
		return Promise.reject("window not defined")
	} catch (err) {
		return Promise.reject(err)
	}
}