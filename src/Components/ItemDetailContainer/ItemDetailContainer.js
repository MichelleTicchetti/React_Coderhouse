import { useEffect, useState } from "react";
import { SpinnerLoading } from "../../Helpers/Loader/Loader";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../Firebase/Config";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "productos", itemId);
    getDoc(docRef)
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() });
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
