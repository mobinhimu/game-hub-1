export interface GameVideo {
  count: number;
  results: {
    data: { max: string; ["480"]: string };
    id: string;
    name: string;
    preview: string;
  }[];
}
