interface Observer {
	update(message: string): void;
}

class Channel {
	private observers: Observer[] = [];

	public addObserver(observer: Observer): void {
		this.observers.push(observer);
	}

	public removeObserver(observer: Observer): void {
		const index = this.observers.indexOf(observer);
		if (index !== -1) {
			this.observers.splice(index, 1);
		}
	}

	public notifyObservers(message: string): void {
		for (const observer of this.observers) {
			observer.update(message);
		}
	}
}

class ChannelObserver implements Observer {
	constructor(private readonly name: string) {
		this.name = name;
	}

	update(message: string): void {
		console.log(`Observer: ${this.name} recived a message: ${message}`)
	}
}

const channel = new Channel();
const observer1 = new ChannelObserver("Obserwator 1");
const observer2 = new ChannelObserver("Obserwator 2");

channel.addObserver(observer1);
channel.addObserver(observer2);

channel.notifyObservers('Some message');