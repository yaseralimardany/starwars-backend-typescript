import { getPeopleById, getPeopleByPagination } from "../../src/people/service/peopleService";
import { People, PeopleList } from "../../src/people/constant/peopleConstant";

describe('Testing people', () => {
  test('get one people test', async () => {
    const people: People = await getPeopleById("1");
    expect(people).toBeDefined();
    expect(people.name).toBeDefined();
    expect(people.name).toBe("Luke Skywalker");
    expect(people.height).toBe(172);
  });

  test('get people by page 1 test', async () => {
    const peopleListData: PeopleList = await getPeopleByPagination({page: 1, search: ''});
    expect(peopleListData).toBeDefined();
    expect(peopleListData.page.currentPage).toBeDefined();
    expect(peopleListData.page.totalCount).toBeDefined();
    expect(peopleListData.page.currentPage).toBe(1);
    expect(peopleListData.page.previousPage).toBe(null);
    expect(peopleListData.page.nextPage).toBe(2);
  });

  test('get people by page 2 test', async () => {
    const peopleListData: PeopleList = await getPeopleByPagination({page: 2, search: ''});
    expect(peopleListData).toBeDefined();
    expect(peopleListData.page.currentPage).toBeDefined();
    expect(peopleListData.page.totalCount).toBeDefined();
    expect(peopleListData.page.currentPage).toBe(2);
    expect(peopleListData.page.previousPage).toBe(1);
    expect(peopleListData.page.nextPage).toBe(3);
  });

  test('get people by page 1 and search test', async () => {
    const peopleListData: PeopleList = await getPeopleByPagination({page: 1, search: 'Skywalker'});
    expect(peopleListData).toBeDefined();
    expect(peopleListData.page.currentPage).toBeDefined();
    expect(peopleListData.list).toBeDefined();
    expect(peopleListData.list[0].name).toBe("Luke Skywalker");
    expect(peopleListData.page.totalCount).toBeDefined();
    expect(peopleListData.page.currentPage).toBe(1);
    expect(peopleListData.page.previousPage).toBe(null);
    expect(peopleListData.page.nextPage).toBe(null);
  });

  test('get people by page 2 and search test', async () => {
    const peopleListData: PeopleList = await getPeopleByPagination({page: 2, search: 'Skywalker'});
    expect(peopleListData).toBeDefined();
    expect(peopleListData.page.currentPage).toBeDefined();
    expect(peopleListData.list).toBeDefined();
    expect(peopleListData.page.totalCount).toBeDefined();
    expect(peopleListData.page.currentPage).toBe(2);
    expect(peopleListData.page.previousPage).toBe(null);
    expect(peopleListData.page.nextPage).toBe(null);
  });
});
