export abstract class BaseTask {
  protected id: string;
  protected title: string;
  protected completed: boolean;

  constructor(id: string, title: string, completed: boolean = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  abstract getStatus(): string;

  getDetails(): { id: string; title: string; completed: boolean } {
    return {
      id: this.id,
      title: this.title,
      completed: this.completed,
    };
  }
}

export class RegularTask extends BaseTask {
  getStatus(): string {
    return this.completed ? "Completed" : "Pending";
  }
}

export class PriorityTask extends BaseTask {
  private priority: "Low" | "Medium" | "High";
  constructor(
    id: string,
    title: string,
    completed: boolean,
    priority: "Low" | "Medium" | "High"
  ) {
    super(id, title, completed);
    this.priority = priority;
  }
  getStatus(): string {
    return `${this.completed ? "Completed" : "Pending"}(${
      this.priority
    }priority)`;
  }
}