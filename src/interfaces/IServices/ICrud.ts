export interface ICRUD {
//   getAll: (limit: number, page_number: number) => Promise<any>
  create: (resourse: any) => Promise<any>
  getUserByEmail: (resource: String) => Promise<any>
//   putById: (resource: any) => Promise<String>
}
