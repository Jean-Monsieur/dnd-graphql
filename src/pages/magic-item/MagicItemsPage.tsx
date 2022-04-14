import MagicItemsRouter from './MagicItemsRouter';
import { FunctionComponent } from 'react';
import { PageContainer } from '../../components/page';

const MagicItemsPage: FunctionComponent = () => {
  return (
    <PageContainer>
      <MagicItemsRouter />
    </PageContainer>
  );
};

export default MagicItemsPage;
