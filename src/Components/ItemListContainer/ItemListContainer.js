import "../../Styles/_styles.scss";
import { useEffect, useState } from "react";
import { queryData } from "../../Helpers/queryData";
import { SpinnerLoading } from "../../Helpers/Loader/Loader";
import { ItemList } from "../ItemList/ItemList.js";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    queryData()
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>{loading ? <SpinnerLoading /> : <ItemList productos={productos} />}</>
  );
};
