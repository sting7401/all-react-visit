import React from 'react';
import hocLoding from './hocLoading';

function Input() {
	return <input defaultValue='input' />;
}

export default hocLoding(Input);
