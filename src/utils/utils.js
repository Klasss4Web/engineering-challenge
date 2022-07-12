export const filterByKeyword = (setSearchedData, filtered, params) => {
  setSearchedData(filtered(params));
};

export const handleSearch = (event, data, setSearchedData) => {
  let value = event.target.value.toLowerCase();
  let result = [];
  result = data?.filter((datum) => {
    return (
      datum?.date?.date.includes(value) ||
      datum?.block?.timestamp?.time.toLowerCase().includes(value) ||
      String(datum?.total).includes(value)
    );
  });
  return setSearchedData(result);
};
