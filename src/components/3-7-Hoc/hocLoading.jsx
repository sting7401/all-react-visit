import React, { useState, useEffect } from 'react';

export default function hocLoading(Component) {
	const HocLoading = (props) => {
		const [loading, setLoading] = useState(true);

		useEffect(() => {
			const loadingTimer = setTimeout(() => setLoading(false), 3000);

			return () => clearTimeout(loadingTimer);
		}, []);

		return loading ? <p>loading</p> : <Component {...props} />;
	};

	return HocLoading;
}
