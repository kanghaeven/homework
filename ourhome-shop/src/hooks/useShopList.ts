import { useEffect, useState } from "react";
import axios from "axios";
import { TShopItem } from "~/types/list";

const useShopList = () => {
  const [shopLists, setShopLists] = useState<TShopItem[]>([]);

  // 상품 리스트를 가져옴
  const fetchShopList = async () => {
    try {
      const response = await axios.get("api/shoplist");
      setShopLists(response.data.shoppingLists);
    } catch (error) {
      throw new Error("Failed to fetch shoplist data");
    }
  };

  useEffect(() => {
    fetchShopList();
  }, []);

  return shopLists;
};

export default useShopList;
