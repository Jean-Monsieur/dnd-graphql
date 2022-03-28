import { FunctionComponent } from "react";
import { PageContainer } from "../../components/page";
import MagicItemsRouter from "./MagicItemsRouter";

const MagicItemsPage: FunctionComponent = () => {
  return (
    <PageContainer>
      <MagicItemsRouter />
    </PageContainer>
  );
};

export default MagicItemsPage;
