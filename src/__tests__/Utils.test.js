import * as Utils from '../lib/Utils';
import { data as Data, updated_at as updatedAt } from '../data/data.json';


describe('Test Utils.js', () => {
  it('IdGenerator "[Name] City" to "[name]-city"', () => {
    const cityName = 'Taipei City';
    const afterProcessing = 'taipei-city';

    expect(Utils.IdGenerator(cityName)).toEqual(afterProcessing);
  });

  it('GetCityProp', () => {
    const cityId = 'taipei-city';
    const prop = Utils.GetCityProp(Data[cityId], cityId);
    const expectProp = Data[cityId];
    expectProp.id = cityId;
    expectProp.checked = true;

    expect(
      typeof prop === 'object',
    ).toBeTruthy();

    expect(prop).toEqual(expectProp);
  });
});
