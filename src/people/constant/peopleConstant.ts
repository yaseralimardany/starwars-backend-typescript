export type getOnePeopleParams = {
  id: string,
}

export type GetPeopleListParams = {
  page: number,
  search: string,
}

export type PeopleList = {
  list: People[],
  page: Page,
}

export type Page = {
  nextPage: number | null,
  previousPage: number | null,
  currentPage: number,
  totalCount: number,
}

export type CachedPeopleListPagination = {
  list: [],
  nextPage: number | null,
  previousPage: number | null,
  currentPage: number,
  totalCount: number,
}

export type People = {
  name?: string,
  height?: number,
  mass?: number,
  hair_color?: string,
  skin_color?: string,
  eye_color?: string,
  birth_year?: string,
  gender?: string,
  homeworld?: string,
  films?: [],
  species?: [],
  vehicles?: [],
  starships?: [],
  created?: Date,
  edited?: Date,
  url?: string
}