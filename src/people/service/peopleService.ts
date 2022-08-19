import { GetPeopleListParams, People, PeopleList } from "../constant/peopleConstant";
import { findPeopleById, findPeopleByPagination } from "../repository/peopleRepository";
import { getConfig } from "../../config/config";

const CachedPeopleList = new Map<string, PeopleList>();

export async function getPeopleById(id: string): Promise<People> {
  const peopleData: any = await findPeopleById(id);
  if (!peopleData || !peopleData.data || !peopleData.data.name) {
    return { name: undefined };
  }
  return mapDataToPeople(peopleData.data);
}

export async function getPeopleByPagination(params: GetPeopleListParams): Promise<PeopleList> {
  const { page, search } = params;
  const keyCachedSearch = page + '-' + search;
  if (getConfig().cachePeopleList && CachedPeopleList.has(keyCachedSearch)) {
    const cachedData = CachedPeopleList.get(keyCachedSearch);
    if (cachedData) {
      return cachedData;
    }
  }

  const peopleData: any = await findPeopleByPagination(params);
  if (!peopleData || !peopleData.data || !peopleData.data.results) {
    return {
      list: [],
      page: {
        nextPage: null,
        previousPage: null,
        currentPage: page,
        totalCount: 0,
      }
    };
  }

  const result = {
    list: peopleData.data.results.map(mapDataToPeople),
    page: {
      nextPage: peopleData.data.next ? page + 1 : null,
      previousPage: peopleData.data.previous ? page - 1 : null,
      currentPage: page,
      totalCount: peopleData.data.count,
    }
  };

  if (getConfig().cachePeopleList) {
    CachedPeopleList.set(keyCachedSearch, result);
  }

  return result;
}

function mapDataToPeople(peopleRawData: any): People {
  return {
    name: peopleRawData.name,
    height: peopleRawData.height && parseInt(peopleRawData.height),
    mass: peopleRawData.mass && parseInt(peopleRawData.mass),
    hair_color: peopleRawData.hair_color,
    skin_color: peopleRawData.skin_color,
    eye_color: peopleRawData.eye_color,
    birth_year: peopleRawData.birth_year,
    gender: peopleRawData.gender,
    homeworld: peopleRawData.homeworld,
    films: peopleRawData.films,
    species: peopleRawData.species,
    vehicles: peopleRawData.vehicles,
    starships: peopleRawData.starships,
    created: peopleRawData.created && new Date(peopleRawData.created),
    edited: peopleRawData.edited && new Date(peopleRawData.edited),
    url: peopleRawData.url
  };
}
