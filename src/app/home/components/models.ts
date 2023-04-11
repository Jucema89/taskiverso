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
    subtask?: Task[]
}

export interface User {
    id: string
    name: string
    image: string
    role: 'SALES' | 'MARKETING' | 'OPERATION'
    mail: string
}