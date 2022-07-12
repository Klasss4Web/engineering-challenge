import dayjs from "dayjs";

export const generateData = (data) => {
  return [
    {
      transactionData: data?.map((datum, i) =>
        dayjs(datum?.date?.date).format("YYYY-MM-DD")
      ),
      dataToFilter: data,
      placeholder: "Filter by date",
      filteredData: (params) =>
        data?.filter(
          (datum) => dayjs(datum?.date?.date).format("YYYY-MM-DD") === params
        ),
    },
    {
      transactionData: data?.map((datum, i) =>
        parseInt(datum?.total).toFixed(0)
      ),
      placeholder: "Filter by total token",
      filteredData: (params) =>
        data?.filter(
          (datum) =>
            parseInt(datum?.total).toFixed(0) === parseInt(params).toFixed(0)
        ),
    },
   
    {
      transactionData: data?.map((datum, i) =>
        dayjs(datum?.block?.timestamp?.time).format("hh:mm a")
      ),
      placeholder: "Filter by tx time",
      filteredData: (params) =>
        data?.filter(
          (datum) =>
            dayjs(datum?.block?.timestamp?.time).format("hh:mm a") === params
        ),
    },
    {
      transactionData: data?.map((datum, i) => datum?.sender?.address),
      placeholder: "Filter by sender address",
      filteredData: (params) =>
        data?.filter((datum) => datum?.sender?.address === params),
    },
    {
      transactionData: data?.map((datum, i) => datum?.receiver?.address),
      placeholder: "Filter by receiver address",
      filteredData: (params) =>
        data?.filter((datum) => datum?.receiver?.address === params),
    },

    {
      transactionData: data?.map((datum, i) => datum?.success ? "Success" : "Failed"),
      placeholder: "Filter by status",
      filteredData: (params) =>
        data?.filter((datum) => datum?.success === params),
    },
  ];
};
