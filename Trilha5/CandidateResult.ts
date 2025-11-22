type CandidateResult = { candidate: string; votes: number };

abstract class VoteSystem {
    protected votes: Record<string, number> = {};

    abstract voteFor(candidate: string): void;
    abstract getResults(): Record<string, number> | CandidateResult[];
}

class Election extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`[Eleição] Voto computado para ${candidate}.`);
    }

    getResults(): Record<string, number> {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`[Pesquisa] Voto computado para ${candidate}.`);
    }

    getResults(): CandidateResult[] {
        const results: CandidateResult[] = Object.entries(this.votes).map(([candidate, votes]) => ({
            candidate,
            votes
        }));

        return results.sort((a, b) => b.votes - a.votes);
    }
}