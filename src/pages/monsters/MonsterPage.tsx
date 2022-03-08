import { FunctionComponent } from "react";
import MonsterTableContainer from "../../components/monster";
import { PageContainer } from "../../components/page";

const MonsterPage: FunctionComponent = () => {
  return (
    <PageContainer>
      <MonsterTableContainer />
    </PageContainer>
  );
};

export default MonsterPage;
