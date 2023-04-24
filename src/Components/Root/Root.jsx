/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
	Button,
	Tabs,
	Tab,
	Card,
	CardHeader,
	CardContent,
	CardActions,
} from '@mui/material';
import { Code, PersonalVideo, Build } from '@mui/icons-material';
import TabPanel from '../TabPanel/TabPanel';
import a11yProps from '../../utils/a11yProps';

function Root() {
	const [value, setValue] = useState(0);
	const [active, setActive] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClick = (activeButton) => {
		setActive(activeButton);
	};
	return (
		<>
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
					onClick={() => setActive(0)}
				/>
				<Tab
					icon={<PersonalVideo />}
					iconPosition="start"
					label="Module 2"
					{...a11yProps(1)}
					onClick={() => setActive(0)}
				/>
				<Tab
					icon={<Build />}
					iconPosition="start"
					label="Module 3"
					{...a11yProps(2)}
					onClick={() => setActive(0)}
				/>
			</Tabs>
			<TabPanel value={value} index={0}>
				<Card elevation="0">
					<CardHeader title="JavaScript basics" />
					<CardActions>
						<Button
							variant={active === 1 ? 'contained' : 'outlined'}
							onClick={() => handleClick(1)}
						>
							Caesar cipher
						</Button>
						<Button
							variant={active === 2 ? 'contained' : 'outlined'}
							onClick={() => handleClick(2)}
						>
							Card validaion
						</Button>
						<Button
							variant={active === 3 ? 'contained' : 'outlined'}
							onClick={() => handleClick(3)}
						>
							Abstract syntax
						</Button>
					</CardActions>
					<CardContent>
						First projects based on JS basics - Caesar cipher (ROT 13), credit
						card validator and abstract syntax tree. Click the right button to
						see the selected application.
					</CardContent>
				</Card>
			</TabPanel>

			<TabPanel value={value} index={1}>
				<Card elevation="0">
					<CardHeader title="Browser without secrets" />
					<CardActions>
						<Button
							variant={active === 1 ? 'contained' : 'outlined'}
							onClick={() => handleClick(0)}
						>
							Sticky hamburger menu
						</Button>
						<Button
							variant={active === 2 ? 'contained' : 'outlined'}
							onClick={() => handleClick(2)}
						>
							Form validation
						</Button>
						<Button
							variant={active === 3 ? 'contained' : 'outlined'}
							onClick={() => handleClick(3)}
						>
							#3
						</Button>
					</CardActions>
					<CardContent>
						Second module project shows the capabilities of JavaScript in a
						browser environment.
					</CardContent>
				</Card>
			</TabPanel>

			<TabPanel value={value} index={2}>
				<Card elevation="0">
					<CardHeader title="In the world of frameworks" />
					<CardActions>
						<Button
							variant={active === 1 ? 'contained' : 'outlined'}
							onClick={() => handleClick(1)}
						>
							#1
						</Button>
						<Button
							variant={active === 2 ? 'contained' : 'outlined'}
							onClick={() => handleClick(2)}
						>
							#2
						</Button>
						<Button
							variant={active === 3 ? 'contained' : 'outlined'}
							onClick={() => handleClick(3)}
						>
							#3
						</Button>
					</CardActions>
					<CardContent>Last but not least - frameworks.</CardContent>
				</Card>
			</TabPanel>
		</>
	);
}

export default Root;
