import { fetchByUrl, FetchResponse } from "../../utils/api";
import { GetPeopleListParams } from "../constant/peopleConstant";

export async function findPeopleById(id: string): Promise<FetchResponse> {
  return await fetchByUrl(`people/${id}`);
}

export async function findPeopleByPagination(params: GetPeopleListParams): Promise<FetchResponse> {
  let { page, search } = params;
  return await fetchByUrl(`people?page=${page}&search=${search}`);
}
