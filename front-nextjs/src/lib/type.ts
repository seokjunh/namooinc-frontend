export interface post {
  id: string;
  title: string;
  content: string;
  image?: file[];
  file?: file[];
  createdAt: string;
  updatedAt?: string;
}

export interface file {
  id: string;
  name: string;
}
