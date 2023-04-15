export interface Project {
    id: string
    name: string
    description: string
    steps: Step[]
}

export interface Step {
    id: string
    name: string
    description: string
    icon?: string
    color: string
    tasks: Task[]
}

export interface Task {
    id: string
    name: string
    description: string
    priority: number
    finish: boolean
    date_limit: string
    subtask?: Substask[]
    assign?: User[]
}

export interface Substask {
    id: string
    idTask: string
    name: string
    description: string
    priority: number
    finish: boolean
    date_limit: string
    assign?: User[]
}


export interface ActionTask {
    taskId: string,
    stepId: string
    action: 'completed' | 'remove' | 'edit'
}


export interface User {
    id: string
    name: string
    image: string
    role: 'SALES' | 'MARKETING' | 'OPERATION'
    mail: string
}