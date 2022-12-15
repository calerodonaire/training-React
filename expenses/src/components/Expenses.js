import ItemIcon from "./items/ItemIcon";
import ItemInfo from "./items/ItemInfo";
import ItemCost from "./items/ItemCost";
import { itemsList } from "../itemDB/items";
import ItemContainer from "./wrappers/ItemContainer";
import Wrapper from "./wrappers/Wrapper";

function Expenses() {
  return (
    <Wrapper>
      {itemsList.map((item) => {
        return (
          <ItemContainer>
            <ItemIcon icons={item.icons} classes={item.classes} />
            <ItemInfo data={item.data} />
            <ItemCost money={item.money} />
          </ItemContainer>
        );
      })}
    </Wrapper>
  );
}

export default Expenses;
