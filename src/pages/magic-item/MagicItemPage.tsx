import { FunctionComponent } from 'react';
import { PageContainer } from '../../components/page';
import { useHistory, useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import {
  FilterFindOneMagicItemInput,
  useGetMagicalItemQuery,
} from "../../generated/graphql";

const MagicItemPage: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const x: FilterFindOneMagicItemInput = {
    index: id,
  };
  const { data, error, loading } = useGetMagicalItemQuery({
    variables: { filter: x },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <PageContainer>
      <div style={{ display: "flex" }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {data.magicItem?.name}
            </Typography>
            <Typography
              sx={{ fontSize: 13 }}
              color="text.secondary"
              gutterBottom
            >
              {data.magicItem?.equipment_category?.name}
            </Typography>
            <Typography
              sx={{ fontSize: 13, mb: [0, 5] }}
              color="text.secondary"
              gutterBottom
            >
              {data.magicItem?.desc?.[0] ?? ""}
            </Typography>
            {data.magicItem?.desc?.map(
              (d, index) =>
                index !== 0 && (
                  <Typography sx={{ fontSize: 14, mb: 3 }} gutterBottom>
                    {d}
                  </Typography>
                )
            )}
          </CardContent>
          <CardActions>
            <Button onClick={() => history.goBack()} size="small">
              Go Back
            </Button>
          </CardActions>
        </Card>

        <div style={{ flexGrow: 1 }}></div>
      </div>
    </PageContainer>
  );
};

export default MagicItemPage;
