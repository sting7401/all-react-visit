import React from 'react';
import DIalog2 from './DIalog';

export default function ThankyouDialog() {
	return (
		<DIalog2
			title={<p style={{ color: 'red' }}></p>}
			text="팝업"
			close="닫기"
		></DIalog2>
	);
}
