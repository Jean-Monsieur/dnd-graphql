import MonsterTableContainer from '../../components/monster';
import { FunctionComponent } from 'react';
import { PageContainer } from '../../components/page';

const MonsterPage: FunctionComponent = () => {
  return (
    <PageContainer>
      <MonsterTableContainer />
    </PageContainer>
  );
};

export default MonsterPage;
