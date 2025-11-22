interface Task {
    name: string;
    type: 'project' | 'daily';
}

abstract class TaskManager {
    protected tasks: Task[] = [];

    abstract addTask(taskName: string): void;
    abstract listTasks(): string[];

    protected isDuplicate(taskName: string): boolean {
        return this.tasks.some(task => task.name.toLowerCase() === taskName.toLowerCase());
    }
}

class Project extends TaskManager {
    addTask(taskName: string): void {
        if (this.isDuplicate(taskName)) {
            console.log(`Tarefa de Projeto "${taskName}" já existe. Ignorada.`);
            return;
        }
        this.tasks.push({ name: taskName, type: 'project' });
        console.log(`Tarefa de Projeto "${taskName}" adicionada.`);
    }

    listTasks(): string[] {
        return this.tasks.map(task => `[Projeto] ${task.name}`);
    }
}

class DailyTasks extends TaskManager {
    addTask(taskName: string): void {
        if (this.isDuplicate(taskName)) {
            console.log(`Tarefa Diária "${taskName}" já existe. Ignorada.`);
            return;
        }
        this.tasks.push({ name: taskName, type: 'daily' });
        console.log(`Tarefa Diária "${taskName}" adicionada.`);
    }

    listTasks(): string[] {
        return this.tasks.map(task => `[Diária] ${task.name}`);
    }
}