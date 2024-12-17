import * as path from "node:path";

interface UserListParams {
	isValid(): boolean;
	getParams(): string[];
}

class UserController {
	/**
	 * filter user by id, email, role
	 * sort by id, email
	 */
	getBadUsers(filer_emila: string, filter_id: string) {

	}

	getUsers(params: UserListParams) {
		if (params.isValid()) {
			console.log(params.getParams());
		}
	}
}