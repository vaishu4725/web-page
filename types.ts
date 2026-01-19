
export interface Message {
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export enum Subject {
  Mathematics = 'Mathematics',
  Physics = 'Physics',
  Biology = 'Biology',
  Chemistry = 'Chemistry',
  History = 'History',
  Programming = 'Programming'
}
