export interface ITask {
  id: string | undefined;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string;
}
