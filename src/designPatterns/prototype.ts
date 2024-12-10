class Survey {
	public id: string;
	public questions: string[];
	public answers: string[];

	constructor(id: string, questions: string[], answers: string[]) {
		this.id = id;
		this.questions = questions;
		this.answers = answers;
	}

	public clone(): Survey {
		const surveyClone = new Survey(this.id, this.questions, this.answers);
		return surveyClone;
	}
}

const originalSurvey = new Survey("1", ["Pytanie 1", "Pytanie 2"], ["Odpowiedź 1", "Odpowiedź 2"]);

const clonedSurvey = originalSurvey.clone();
clonedSurvey.id = "2";
clonedSurvey.questions.push("Pytanie 3");
clonedSurvey.answers.push("Odpowiedź 3");

console.log(originalSurvey);
console.log(clonedSurvey);