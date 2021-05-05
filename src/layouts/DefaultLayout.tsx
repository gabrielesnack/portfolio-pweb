import React from 'react';
import { propsDefaultLayout } from "./types";

export default ({ children }: propsDefaultLayout) => (
	<body>
		<main style={{ backgroundColor: "#E7E7E7"}}>
			{children}
		</main>
	</body>
)