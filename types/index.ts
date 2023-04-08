export  interface Project {
  id: number,
  name?: string,
  company?: string,
  tools?: string,
  description?: string,
  url?: string,
  photo?: string,
  me?: number, 
}
export  interface Me {
  id?: number,
  name?: string,
  occupation?: string,
  intro?: string,
  photo?: string,
  content: string,
}

export interface Post {
  id?: number,
  title?: string,
  subtitle?: string,
  content?: string,
  photo?: string, 
  me?: number,
}
