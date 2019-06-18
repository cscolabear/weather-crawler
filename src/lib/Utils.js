export const IdGenerator = en_county_name => en_county_name
  .toLowerCase()
  .replace(/\//gi, '')
  .replace(/\s+/gi, '-');


export const GetCityProp = (data, current) => {
  const city = data;
  city.id = IdGenerator(data.en_county_name);
  city.checked = data.id === current;

  return city;
};
