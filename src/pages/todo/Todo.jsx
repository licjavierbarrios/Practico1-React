import React, { useEffect, useState } from "react";
import {
	Grid,
	Box,
	Stack,
	Typography,
	Card,
	CardHeader,
	CardContent,
	TextField,
	Button,
	Checkbox,
	Breadcrumbs,
} from "@mui/material";
import { ArrowBackIos, NavigateNext } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";

const Todo = () => {
	const dispatch = useDispatch();
	const todo = useSelector(appSelector.todo);
	const [text, setText] = useState("");

	useEffect(() => {
		dispatch(appActions.setPageTitle("TAREAS"));
	}, []);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleChecked = (e, id) => {
		dispatch(appActions.setCompletedTodo({ id, completed: e.target.checked }));
	};

	const delTask = (id) => {
		dispatch(appActions.deleteTodo(id));
	};

	const addTask = () => {
		dispatch(
			appActions.addTodo({
				text,

				id: Math.floor(Math.random() * 1000),
			})
		);
		setText("");
	};

	return (
		<>
			<Box m={2}>
				<Breadcrumbs aria-label="breadcrumb" separator={<NavigateNext fontSize="small" />}>
					<Link to="/">Home</Link>

					<Typography color="text.primary">Tareas</Typography>
				</Breadcrumbs>
			</Box>
			<Grid container spacing={3}>
				<Grid item md={12} xs={12}>
					<Card
						
					>
						<CardHeader title="Agrega una tarea" />
						<CardContent>
							<Stack
								sx={{ justifyContent: "space-around", alignItems: "center" }}
								direction="row"
								gap={4}
							>
								<Grid item md={9}>
									<TextField
										value={text}
										label="Ingrese la tarea"
										variant="outlined"
										onChange={handleChange}
										fullWidth
									/>
								</Grid>
								<Grid item md={3} sx={{ textAlign: "center" }}>
									<Button disabled={!text} variant="contained" onClick={() => addTask()}>
										Agregar
									</Button>
								</Grid>
							</Stack>
						</CardContent>
					</Card>
				</Grid>
			</Grid>

			<Grid container spacing={3}>
				<Grid item md={12} xs={12}>
					<Card>
						<CardHeader title="Tareas" />

						<CardContent>
							{todo.map((t, index) => (
								<Grid
									container
									key={t.id}
									direction="row"
									sx={{ alignItems: "center", justifyContent: "center" }}
								>
									<Grid item xs={2}>
										<Checkbox 
											checked={t.completed}

											onChange={(e) => handleChecked(e, t.id)}
										/>
									</Grid>
									<Grid item xs={8} sx={{ pt: 1 }}>
										<Typography sx={{ fontSize: 18, fontWeight: 700 }}>{t.text}</Typography>
									</Grid>
									<Grid item xs={2}>
										<Button variant="contained" onClick={() => delTask(t.id)}>
											Eliminar
										</Button>
									</Grid>
								</Grid>
							))}
						</CardContent>
					</Card>
				</Grid>
			</Grid>

			<Box sx={{ width: "100%", textAlign: "center", marginTop: 5 }}>
				<Link to="/">
					<Stack direction="row" spacing={1} sx={{ justifyContent: "center", marginTop: 5 }}>
						{/* Crear un botón de volver */}

						<ArrowBackIos />
						<Typography>Volver</Typography>
					</Stack>
				</Link>
			</Box>
		</>
	);
};
export default Todo;
