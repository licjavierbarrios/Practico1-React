import React from "react";
import { Grid, Paper, Box, Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, CardActions, Checkbox, Typography } from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
const Dashboard = () => {
	return (
		<Grid container spacing={3}>
			<Grid item md={12} xs={12}>
				<Paper sx={{ p: 2 }}>
					<Box>Dashboard</Box>

					<Box>
						<Card sx={{ margin: 5 }}>
							<CardHeader
								avatar={
									<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
										P
									</Avatar>
								}
								action={
									<IconButton aria-label="settings">
										<MoreVert />
									</IconButton>
								}
								title="Pilar Tecno"
								subheader="October 21, 2022"
							/>
							<CardMedia
								component="img"
								height="20%"
								image="https://images.pexels.com/photos/4305836/pexels-photo-4305836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="Paella dish"
							/>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									This impressive paella is a perfect party dish and a fun meal to cook together
									with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton aria-label="add to favorites">
									<Checkbox
										icon={<FavoriteBorder />}
										checkedIcon={<Favorite sx={{ color: "red" }} />}
									/>
								</IconButton>
								<IconButton aria-label="share">
									<Share />
								</IconButton>
							</CardActions>
						</Card>
					</Box>
				</Paper>
			</Grid>
		</Grid>
	);
};
export default Dashboard;
