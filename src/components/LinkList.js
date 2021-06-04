import React from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

// template literal gQL query string
const FEED_QUERY = gql`
	{
		feed {
			id
			links {
				id
				createdAt
				url
				description
			}
		}
	}
`;

const LinkList = () => {
	// useQuery returns 3 items: loading, error, data
	// data is destructured out of useQuery hook
	const { data } = useQuery(FEED_QUERY);

	return (
		<div>
			{data && (
				<>
					{data.feed.links.map((link) => (
						<Link key={link.id} link={link} />
					))}
				</>
			)}
		</div>
	);
};

export default LinkList;
