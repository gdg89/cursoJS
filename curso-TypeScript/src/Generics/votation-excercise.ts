//Votation Exercise
/**
 * What´s your favorite language?:
 *  Phyton 0
 *  JavaScript 1
 *  TypeScript 3
 * #############
 *
 *
 * What´s your favourite color?
 *  Red 3
 *  Green 5
 *  Blue  2
 */

export class NewVotation {
  constructor(
    public votingTopic: string,
    public votingOptions: string[],
  ) {}

  initVotation(): void {
    this.showOptions();
    console.log('Initiating a vote...');
  }

  showOptions(): void {
    const options = this.votingOptions.join(', ');
    const topic = this.votingTopic;
    console.log(`What is your favorite ${topic}?: \n ${options}`);
  }
}

export class VoteProcess {
  votes: { [key: string]: number };

  constructor(public votingOptions: string[]) {
    this.votes = {};
    this.votingOptions.forEach((option) => {
      this.votes[option] = 0;
    });
  }

  showResult(): void {
    for (const result in this.votes) {
      console.log(result + ' ' + this.votes[result]);
    }
  }

  newVote(userInput: string): void {
    if (this.votingOptions.includes(userInput)) {
      this.addVote(userInput);
      //console.log('Successful vote');
    } else {
      console.log('Invalid Option');
    }
  }

  addVote(voteOption: string): void {
    this.votes[voteOption] += 1;
  }
}

const options = ['Phyton', 'JavaScript', 'TypeScript'];
const topic = 'Language Programation';

const votation = new NewVotation(topic, options);
const votes = new VoteProcess(votation.votingOptions);
votation.showOptions();
votes.newVote('JavaScript');
votes.newVote('JavaScript');
votes.newVote('JavaScript');
votes.newVote('Phyton');
votes.newVote('Phyton');
votes.showResult();
