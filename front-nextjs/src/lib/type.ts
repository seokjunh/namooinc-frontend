export interface post {
  id: string;
  title: string;
  content: string;
  image?: file[];
  files?: file[];
  createdAt: string;
  updatedAt?: string;
}

export interface file {
  id: number;
  saveName: string;
}
