import { useEffect, useState } from "react";
import { pedirDatos } from "../../Helpers/PedirDatos";
import { SpinnerLoading } from "../../Helpers/Loader/Loader";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  console.log(itemId);
  console.log(item);

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((res) => {
        setItem(res.find((el) => el.id === Number(itemId)));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      {loading ? <SpinnerLoading /> : <ItemDetail {...item} />}
    </div>
  );
};
