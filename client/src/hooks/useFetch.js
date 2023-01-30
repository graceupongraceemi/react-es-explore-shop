const useFetch = async (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await makeRequest.get(
          process.env.REACT_APP_API_URL +
            `/products?populate=*&[filters][type][$eq]=${type}`,
          {
            headers: {
              Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN
            }
          }
        );

        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
};
