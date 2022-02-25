import "../../Styles/_styles.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SpinnerLoading } from "../../Helpers/Loader/Loader";
import { ItemList } from "../ItemList/ItemList";
import { db } from "../../Firebase/Config";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { catId } = useParams();

  console.log(catId);

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const q = catId
      ? query(productosRef, where("categoria", "==", catId))
      : productosRef;

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
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
        <div className="list-container">
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};
