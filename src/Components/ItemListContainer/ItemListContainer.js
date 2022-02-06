import "../../Styles/_styles.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../Helpers/PedirDatos";
import { SpinnerLoading } from "../../Helpers/Loader/Loader";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { catId } = useParams();

  console.log(catId);

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((res) => {
        if (catId) {
          setProductos(res.filter((el) => el.categoria === catId));
        } else {
          setProductos(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return (
    <>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <div className="bg">
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};
