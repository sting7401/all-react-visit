import React, { useState } from 'react';

export default function DIalog2(props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button type="button" onClick={() => setIsOpen(true)}>
				open
			</button>

			{isOpen && (
				<div
					style={{
						position: 'absolute',
						zIndex: 10,
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						border: '1px solid red',
						padding: '10rem',
						backgroundColor: '#fff',
					}}
				>
					{typeof props.title === 'string' ? (
						<p>{props.title}</p>
					) : (
						props.title
					)}

					{typeof props.text === 'string' ? (
						<p>{props.text}</p>
					) : (
						props.text
					)}

					{typeof props.close === 'string' ? (
						<button
							type="button"
							style={{ backgroundColor: 'red' }}
							onClick={() => setIsOpen(false)}
						>
							{typeof props.close === 'string' ? (
								<p>{props.close}</p>
							) : (
								props.close
							)}
						</button>
					) : (
						<div onClick={() => setIsOpen(false)}>
							{props.close}
						</div>
					)}
				</div>
			)}
		</>
	);
}
