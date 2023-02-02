

export interface SubTask {
  description: string;
  task: string;
  SOP: string;
  title: string;
}

export interface Task {
  description: string;
  title: string;
  deadline: string;
  SOP: string;
  subTasks: SubTask[]
}

export interface UnderlineNavs {
  name: string;
}
