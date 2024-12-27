
export interface CreateTaskDto {
    id: string;
    title: string;
    description: string;
    status: number;
    createdAt: Date;
    dueDate: Date;
    isOverDue: boolean;
}