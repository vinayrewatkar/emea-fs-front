export interface Item {
  _id: string;
  title: string;
  description: string;
  pdfUrl: string;
  type: string;  // Added the type field
  createdAt: string;
  updatedAt: string;
  __v?: number;  // MongoDB version key (optional)
}