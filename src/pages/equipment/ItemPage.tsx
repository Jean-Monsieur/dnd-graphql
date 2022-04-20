import { CurrencyIcon } from "../../components/currency-icon";
import { GqlCurrencies } from "../../types";
import { FunctionComponent } from "react";
import { useGetEquipmentQuery } from "../../generated/graphql";
import { useHistory, useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { convertgQLCurrency } from "../../utils/convertGqlCurrency";
const ItemPage: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const { data, error, loading } = useGetEquipmentQuery({
    variables: {
      filter: {
        index: id,
      },
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {data.equipment?.name}
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.equipment?.equipment_category?.name}
          </Typography>
          {data.equipment?.cost && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Cost {data.equipment?.cost?.quantity}{" "}
              <CurrencyIcon
                currency={convertgQLCurrency(
                  data.equipment?.cost?.unit as GqlCurrencies
                )}
              />
            </Typography>
          )}
          {data.equipment?.weight && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Weight {data.equipment?.weight} lbs
            </Typography>
          )}
          {data.equipment?.range && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <div>Range: Normal:{data.equipment?.range?.normal ?? "NA"}ft</div>
              <div>Long:{data.equipment?.range?.long ?? "NA"}</div>
            </Typography>
          )}
          {data.equipment?.armor_class?.base && (
            <Typography
              sx={{ fontSize: 14, mb: ["1em", "4em"] }}
              color="text.secondary"
              gutterBottom
            >
              Armor {data.equipment?.armor_class?.base}{" "}
              {data.equipment?.armor_category}
            </Typography>
          )}

          {data.equipment?.damage && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Damage {data.equipment?.damage?.damage_dice}{" "}
              {data.equipment?.damage?.damage_type?.name}
            </Typography>
          )}
          {data.equipment?.capacity && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Capacity {data.equipment?.capacity}
            </Typography>
          )}
          {data.equipment?.category_range && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Catgory Range {data.equipment?.category_range}
            </Typography>
          )}
          {data.equipment?.contents && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Catgory Range{" "}
              {data.equipment?.contents.map((c) => (
                <div>
                  {c?.item?.name} {c?.quantity}
                </div>
              ))}
            </Typography>
          )}
          <Typography
            variant="body2"
            sx={{ mb: 1.5, textJustify: "left", marginTop: "4em" }}
          >
            {data.equipment?.desc?.map((d) => (
              <>{d}</>
            ))}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => history.goBack()} size="small">
            Go Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemPage;
