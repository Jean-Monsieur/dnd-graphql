import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { PageContainer } from "../../components/page";
import {
  FilterFindOneSpellInput,
  useGetSpellQuery,
} from "../../generated/graphql";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

const SpellPage: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const x: FilterFindOneSpellInput = {
    index: id,
  };
  const { data, error, loading } = useGetSpellQuery({
    variables: { filter: x },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  // console.log(
  //   data.spell?.desc
  //     ?.toString()
  //     .replaceAll("|,|", " |\n|")
  //     .replaceAll("|,", " | \n")
  //     .replaceAll(",|", "\n|")
  //     .replaceAll(",#", " \n#")
  //     .replaceAll(",", " \n") ?? ""
  // );
  return (
    <PageContainer>
      <div style={{ display: "flex" }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {data.spell?.name}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {data.spell?.school?.name} Lvl {data.spell?.level}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {data.spell?.components} - ({data.spell?.material})
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Range: {data.spell?.range}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Area of Effect :{data.spell?.area_of_effect?.type}{" "}
              {data.spell?.area_of_effect?.size}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Range: {data.spell?.range}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              Classes:{" "}
              {data.spell?.classes?.map((c, index) => (
                <>
                  {c?.name}
                  {index + 1 !== data.spell?.classes?.length ? ", " : ""}
                </>
              ))}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              {data.spell?.desc !== null ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {data.spell?.desc
                    ?.toString()
                    .replaceAll("|,|", " |\n|")
                    .replaceAll("|,", " | \n")
                    .replaceAll(",|", "\n|")
                    .replaceAll(",#", " \n#")
                    .replaceAll(",", " \n") ?? ""}
                </ReactMarkdown>
              ) : null}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              {data.spell?.higher_level}
            </Typography>
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

export default SpellPage;
