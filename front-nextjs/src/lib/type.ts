export interface post {
  id: string;
  title: string;
  content: string;
  image?: NoticeFile[];
  files?: NoticeFile[];
  createdAt: string;
  updatedAt?: string;
}

export interface NoticeFile {
  id: number;
  originalName: string;
  saveName: string;
}
