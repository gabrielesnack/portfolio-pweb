import React from 'react';
import { propsDefaultLayout } from "./types";

export default ({ children }: propsDefaultLayout) => (
	<>
		<header />
		<main style={{ backgroundColor: "#E7E7E7"}}>
			{children}
		</main>
	</>
)