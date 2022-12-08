import React from 'react';
import Dialog from './Dialog';

export default function CustomDIalog(props) {
	return (
		<Dialog>
			<h1>{props.title}</h1>

			<p>{props.text}</p>
		</Dialog>
	);
}
