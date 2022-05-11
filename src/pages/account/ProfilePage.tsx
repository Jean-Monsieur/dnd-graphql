import React from "react";
import { PageContainer } from "../../components/page";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useAuth0 } from "@auth0/auth0-react";
import Grid from "@mui/material/Grid";

import { Avatar } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

const ProfilePage = () => {
  const { user } = useAuth0<{
    name: string;
    picture: string;
    given_name: string;
    family_name: string;
    middle_name: string;
    nickname: string;
    preferred_username: string;
    profile: string;
    website: string;
    email: string;
    gender: string;
    birthdate: string;
    zoneinfo: string;
    locale: string;
    phone_number: string;
    address: string;
  }>();

  return (
    <PageContainer>
      <Container sx={{ height: "100%", width: "100%" }} fixed>
        <Paper sx={{ height: "100%", width: "100%", p: "4rem" }} elevation={3}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ width: 100, height: 100 }} src={user?.picture} />{" "}
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Full Name"
                size="small"
                id="outlined-start-adornment"
                value={user?.name}
                fullWidth
                sx={{ m: 1 }}
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Middle Name"
                size="small"
                id="outlined-start-adornment"
                value={user?.middle_name ?? " N/A"}
                sx={{ m: 1 }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="First Name"
                size="small"
                id="outlined-start-adornment"
                value={user?.given_name}
                sx={{ m: 1 }}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Family Name"
                size="small"
                id="outlined-start-adornment"
                fullWidth
                value={user?.family_name}
                sx={{ m: 1 }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Nickname"
                size="small"
                id="outlined-start-adornment"
                fullWidth
                value={user?.nickname}
                sx={{ m: 1 }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Prefered Username"
                size="small"
                id="outlined-start-adornment"
                fullWidth
                value={user?.preferred_username ?? "NA"}
                sx={{ m: 1 }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>{" "}
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Profile"
                size="small"
                id="outlined-start-adornment"
                fullWidth
                value={user?.profile ?? "NA"}
                sx={{ m: 1 }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>{" "}
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Gender"
                size="small"
                id="outlined-start-adornment"
                fullWidth
                value={user?.gender ?? "NA"}
                sx={{ m: 1 }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>{" "}
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Address"
                size="small"
                id="outlined-start-adornment"
                fullWidth
                value={user?.address ?? "NA"}
                sx={{ m: 1 }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>{" "}
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Birth Date"
                size="small"
                id="outlined-start-adornment"
                fullWidth
                value={user?.birthdate ?? "NA"}
                sx={{ m: 1 }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>{" "}
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Website"
                size="small"
                id="outlined-start-adornment"
                fullWidth
                value={user?.website ?? "NA"}
                sx={{ m: 1 }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>{" "}
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Email"
                size="small"
                id="outlined-start-adornment"
                fullWidth
                value={user?.email ?? "NA"}
                sx={{ m: 1 }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>{" "}
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                label="Locale"
                size="small"
                id="outlined-start-adornment"
                fullWidth
                value={user?.locale ?? "NA"}
                sx={{ m: 1 }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </PageContainer>
  );
};

export default ProfilePage;
