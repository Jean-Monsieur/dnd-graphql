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
  Skeleton,
} from "@mui/material";
import { convertgQLCurrency } from "../../utils/convertGqlCurrency";
import { DistanceUnitDisplay } from "../../components/converted-units";
import {
  mdiDiceD20,
  mdiDiceD10,
  mdiDiceD12,
  mdiDiceD6,
  mdiDiceD4,
  mdiDiceD8,
} from "@mdi/js";
import MoneyIcon from "@mui/icons-material/Money";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import Icon from "@mdi/react";
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
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="rectangular" width={"100%"} sx={{ my: "1rem" }} />
        <Skeleton variant="rectangular" width={"100%"} sx={{ my: "1rem" }} />
        <Skeleton
          variant="rectangular"
          height={"50%"}
          width={"100%"}
          sx={{ my: "1rem" }}
        />
      </div>
    );
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  const getDamageDieIcon = (die: string) => {
    const x = die.toUpperCase();

    if (x.includes("D100")) {
      return <MoneyIcon />;
    } else if (x.includes("D12")) {
      return (
        <Icon path={mdiDiceD12} size={1} horizontal vertical rotate={180} />
      );
    } else if (x.includes("D10")) {
      return (
        <Icon path={mdiDiceD10} size={1} horizontal vertical rotate={180} />
      );
    } else if (x.includes("D1")) {
      return <LooksOneIcon />;
    } else if (x.includes("D20")) {
      return (
        <Icon path={mdiDiceD20} size={1} horizontal vertical rotate={180} />
      );
    } else if (x.includes("D2")) {
      return <LooksTwoIcon />;
    } else if (x.includes("D8")) {
      return (
        <Icon path={mdiDiceD8} size={1} horizontal vertical rotate={180} />
      );
    } else if (x.includes("D6")) {
      return (
        <Icon path={mdiDiceD6} size={1} horizontal vertical rotate={180} />
      );
    } else if (x.includes("D4")) {
      return (
        <Icon path={mdiDiceD4} size={1} horizontal vertical rotate={180} />
      );
    } else if (x.includes("D3")) {
      return <Looks3Icon />;
    }
  };
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
              Cost: {data.equipment?.cost?.quantity}{" "}
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
              Weight: {data.equipment?.weight} lbs
            </Typography>
          )}
          {data.equipment?.range && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <div>
                Range: (Normal){" "}
                <DistanceUnitDisplay
                  initialValue={
                    data.equipment?.range?.normal?.toString() ?? "NA"
                  }
                />
              </div>
              <div>
                Long:{" "}
                <DistanceUnitDisplay
                  initialValue={data.equipment?.range?.long?.toString() ?? "NA"}
                />
              </div>
            </Typography>
          )}
          {data.equipment?.armor_class?.base && (
            <Typography
              sx={{ fontSize: 14, mb: ["1em", "4em"] }}
              color="text.secondary"
              gutterBottom
            >
              Armor: {data.equipment?.armor_class?.base}
              {", "}
              {data.equipment?.armor_category}
            </Typography>
          )}

          {data.equipment?.damage && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Damage:{" "}
              {getDamageDieIcon(data.equipment?.damage?.damage_dice ?? "12d3")}{" "}
              {data.equipment?.damage?.damage_dice}{" "}
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
              Contents{" "}
              {data.equipment?.contents.map((c, index) => (
                <div key={index}>
                  {c?.item?.name} {c?.quantity}
                </div>
              ))}
            </Typography>
          )}
          <Typography
            variant="body2"
            sx={{ mb: 1.5, textJustify: "left", marginTop: "4em" }}
          >
            {data.equipment?.desc?.map((d, index) => (
              <div key={index}>{d}</div>
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
