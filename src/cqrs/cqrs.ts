interface Command {
	execute(): void
}

interface Query<T> {
	query(): T
}

class CommandBuss {
	execute(command: Command) {

	}
}

class QueryBuss {
	query(query: Query<unknown>) {}
}

class UserListQuery implements Query<unknown> {
	constructor(public readonly userId: string) {
	}

	query(): unknown {
      throw new Error("Method not implemented.");
  }
}

class AddUserCommand implements Command {
	constructor(public readonly userId: string, public readonly name: string) {
	}

	execute(): void {
    throw new Error("Method not implemented.");
  }
}

class UserController {
	constructor(private readonly commandBuss: CommandBuss, private readonly queryBuss: QueryBuss) {
	}

	getList() {
		return this.queryBuss.query(new UserListQuery('1'));
	}

	addUser(name: string) {
		this.commandBuss.execute(new AddUserCommand('1', name));
	}
}


interface EmployeeDBModel {
	name: string
	role: string
	timestamp?: Date
}

const userEvents: Required<EmployeeDBModel>[] = [
	{ name: 'John', role: 'admin', timestamp: new Date() },
	{ name: 'John', role: 'super_admin', timestamp: new Date() },
	{ name: 'John', role: 'intern', timestamp: new Date() },
	{ name: 'John', role: 'dev', timestamp: new Date() },
	{ name: 'John', role: 'finance', timestamp: new Date() },
]

const userSnapshot: EmployeeDBModel = {
	name: "John",
	role: 'dev'
}