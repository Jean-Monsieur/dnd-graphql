import ErrorPage from '../../components/error-page/ErrorPage';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { DistanceUnitDisplay } from '../../components/converted-units';
import { FunctionComponent } from 'react';
import { PageContainer } from '../../components/page';
import { useHistory, useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Skeleton,
} from "@mui/material";



const SpellPage: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const x = {
    index: id,
  };
  // const { data, error, loading } = useGetSpellQuery({
  //   variables: { filter: x },
  // });

  const loading = !true;
  const error =false;
  const data: never[] = []
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

  // if (error || !data || data.spell == null) {
  //   return <ErrorPage errorCode={500} />;
  // }

  return (
    <PageContainer>
      <div style={{ display: "flex" }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              bruh
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              bruh
              {/* {data.spell?.school?.name} Lvl {data.spell?.level}
               */}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              bruh
              {/* {data.spell?.components} - ({data.spell?.material}) */}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Range:{" "}
              {/* <DistanceUnitDisplay initialValue={data.spell?.range ?? ""} /> */}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {/* Area of Effect : {data.spell?.area_of_effect?.type}{" "} */}
              {/* <DistanceUnitDisplay
                initialValue={data.spell?.area_of_effect?.size.toString() ?? ""}
              /> */}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              Classes:{" "}
              {/* {data.spell?.classes?.map((c, index) => (
                <>
                  {c?.name}
                  {index + 1 !== data.spell?.classes?.length ? ", " : ""}
                </>
              ))} */}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              {/* {data.spell?.desc !== null ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {data.spell?.desc
                    ?.toString()
                    .replaceAll("|,|", " |\n|")
                    .replaceAll("|,", " | \n")
                    .replaceAll(",|", "\n|")
                    .replaceAll(",#", " \n#")
                    .replaceAll(",", " \n") ?? ""}
                </ReactMarkdown>
              ) : null} */}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              {/* {data.spell?.higher_level} */}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => history.goBack()} size="small">
              Go Back
            </Button>
          </CardActions>
        </Card>
      </div>
    </PageContainer>
  );
};

export default SpellPage;
