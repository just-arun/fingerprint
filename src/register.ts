
export const Register = async (options: CredentialCreationOptions) => {
	try {
		if (!!window) {
			let localOptions: CredentialCreationOptions = {
				...options,
			}
			const cred = await window.navigator
				.credentials.create(localOptions)
			// const credentials
			return {
				cred,
				options: localOptions,
			}
		}
		return Promise.reject("window not defined")
	} catch (err) {
		return Promise.reject(err)
	}
}