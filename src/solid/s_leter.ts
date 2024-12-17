interface BadRegisterUser {
	validData(): boolean; //bad
	validateEmail(): boolean; //bad
	addUserToDb(): void;
	sendVerificationEmail(): void;
	sendWelcomeEmail(): void; //bad
}

interface ValidateData {
	validData(): boolean;
	validateEmail(): boolean;
}

interface UserAddedToDB {
	sendWelcomeEmail(): void;
}