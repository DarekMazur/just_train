/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	Paper,
	Box,
	Container,
	Button,
	Tabs,
	Tab,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Typography,
} from '@mui/material';
import { Code, PersonalVideo } from '@mui/icons-material';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	// eslint-disable-next-line react/require-default-props
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `tab-${index}`,
		'aria-controls': `tabpanel-${index}`,
	};
}

function App() {
	const [state, setState] = useState(false);
	const [value, setValue] = useState(0);
	const [active, setActive] = useState(false);

	const currentYear = `© ${new Date().getFullYear()}, Darek Mazur`;

	const handleChange = (event, newValue) => {
		setValue(newValue);
		setState(false);
	};

	const handleClick = () => {
		setState(!state);
	};

	return (
		<div className="App">
			<Paper>
				<Container>
					<Box m={2}>
						<Typography variant="h2">TESTING</Typography>
					</Box>
					<Tabs
						variant="fullWidth"
						value={value}
						onChange={handleChange}
						aria-label="icon position tabs"
					>
						<Tab
							icon={<Code />}
							iconPosition="start"
							label="Module 1"
							{...a11yProps(0)}
						/>
						<Tab
							icon={<PersonalVideo />}
							iconPosition="start"
							label="Module 2"
							{...a11yProps(1)}
						/>
						<Tab
							icon={<PersonalVideo />}
							iconPosition="start"
							label="Module 3"
							{...a11yProps(2)}
						/>
					</Tabs>
					<TabPanel value={value} index={0}>
						<Card elevation="0">
							<CardHeader title="Module 1 Title" />
							<CardActions>
								<Button variant={active ? "contained" : "outlined"} onClick={handleClick}>
									#1
								</Button>
								<Button variant={active ? "contained" : "outlined"} onClick={handleClick}>
									#2
								</Button>
								<Button variant={active ? "contained" : "outlined"} onClick={handleClick}>
									#3
								</Button>
							</CardActions>
							<CardContent>Lorem Ipsum</CardContent>
						</Card>
					</TabPanel>

					<TabPanel value={value} index={1}>
						<Card elevation="0">
							<CardHeader title="Module 2 Title" />
							<CardActions>
								<Button variant={active ? "contained" : "outlined"} onClick={handleClick}>
									#1
								</Button>
								<Button variant={active ? "contained" : "outlined"} onClick={handleClick}>
									#2
								</Button>
								<Button variant={active ? "contained" : "outlined"} onClick={handleClick}>
									#3
								</Button>
							</CardActions>
							<CardContent>Lorem Ipsum</CardContent>
						</Card>
					</TabPanel>

					<TabPanel value={value} index={2}>
						<Card elevation="0">
							<CardHeader title="Module 3 Title" />
							<CardActions>
								<Button variant={active ? "contained" : "outlined"} onClick={handleClick}>
									#1
								</Button>
								<Button variant={active ? "contained" : "outlined"} onClick={handleClick}>
									#2
								</Button>
								<Button variant={active ? "contained" : "outlined"} onClick={handleClick}>
									#3
								</Button>
							</CardActions>
							<CardContent>Lorem Ipsum</CardContent>
						</Card>
					</TabPanel>
				</Container>
			</Paper>
			<footer>
				<h3>{currentYear}</h3>
			</footer>
		</div>
	);
}

export default App;
