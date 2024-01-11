class Food {
  category: string
  description: string
  image: string
  infos: string[]
  title: string
  id: number

  constructor(
    category: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    id: number
  ) {
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.id = id
  }
}

export default Food
