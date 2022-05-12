import { useState, useEffect } from "react";
import _ from "lodash";
import { fetchItems, fetchItemTypes } from "../../services/apiConnection";
import { Item } from "../../models/item";
import { orderByPrice } from "../../helpers/sorts";
import Filters from "../../components/Filters";
import Table from "../../components/Table";
import { ItemsList as S } from "./styles";

export default function ItemsList() {
  //type options
  const [loadingTypeOpt, setLoadingTypeOpt] = useState<boolean>(false);
  const [typeOptions, setTypeOptions] = useState<string[]>([]);
  //items
  const [loadingItems, setLoadingItems] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);
  //filters
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [descOrder, setDescOrder] = useState<boolean>(false);

  const onChangeDescOrder = () => {
    setDescOrder(!descOrder);
    setItems(items.reverse());
  };

  useEffect(() => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => orderByPrice(descOrder, a, b));
    !_.isEqual(sortedItems, items) && setItems(sortedItems);
  }, [descOrder, items]);

  useEffect(() => {
    fetchItems(setLoadingItems, setItems, typeFilter, searchFilter);
  }, [typeFilter, searchFilter]);

  useEffect(() => {
    fetchItems(setLoadingItems, setItems);
    fetchItemTypes(setLoadingTypeOpt, setTypeOptions);
  }, []);

  return (
    <S.PageWrapper>
      <h2>Items List</h2>
      <Filters
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        loadingTypeOpt={loadingTypeOpt}
        typeOptions={typeOptions}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        descOrder={descOrder}
        onChangeDescOrder={onChangeDescOrder}
      />
      <Table loading={loadingItems} items={items} />
    </S.PageWrapper>
  );
}
