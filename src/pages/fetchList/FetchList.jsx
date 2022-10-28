import React, { useEffect } from "react";
import { Grid, Paper, Box, Stack, Typography, CardMedia, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowBackIos, NavigateNext } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";

const FetchList = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(appActions.setPageTitle("LISTAS"));
	}, []);
	return (
		<>
			<Box m={2}>
				<Breadcrumbs aria-label="breadcrumb" separator={<NavigateNext fontSize="small" />}>
					<Link to="/">Home</Link>

					<Typography color="text.primary">FechList</Typography>
				</Breadcrumbs>
			</Box>
			<Grid container spacing={3}>
				<Grid item md={12} xs={12}>
					<Paper sx={{ p: 2 }}>
						<Box>FetchList</Box>
						<CardMedia
							sx={{ maxHeight: 800, maxWidth: 600, margin: "auto", marginBottom: 3 }}
							component="img"
							image="https://images.pexels.com/photos/243698/pexels-photo-243698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="img 2"
						/>

						<Link to="/">
							<Stack direction="row" spacing={1} sx={{ justifyContent: "center", marginTop: 5 }}>
								<ArrowBackIos />
								<Typography>Volver</Typography>
							</Stack>
						</Link>
					</Paper>
				</Grid>
			</Grid>
		</>
	);
};
export default FetchList;
