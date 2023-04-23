/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Paper, Box, Container, Typography } from '@mui/material';
import Root from './Components/Root/Root';

function App() {
	const currentYear = `© ${new Date().getFullYear()}, Darek Mazur`;

	return (
		<div className="App">
			<Paper>
				<Container>
					<Box m={2}>
						<Typography variant="h2">
							Projects for przeprogramowani.pl JavaScript trainig
						</Typography>
					</Box>
					<Root />
				</Container>
			</Paper>
			<footer>
				<h3>{currentYear}</h3>
			</footer>
		</div>
	);
}

export default App;
