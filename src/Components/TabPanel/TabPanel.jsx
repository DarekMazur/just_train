import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

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

export default TabPanel;
