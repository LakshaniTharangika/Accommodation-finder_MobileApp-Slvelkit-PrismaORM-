// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Locals {
			user: {
				id: string;
				username: string;
				password: string;
				role: string;
				contactInformation: string;
				avatar: string;
			};
		}
	}
}

export {};
