
export type speciesType = "Mammal" | "Bird" | "Fish" | "Reptile" | "Amphibian"

export interface Animal {
  id:number,
  name:string,
  image:string,
  age:number,
  species: string
}
