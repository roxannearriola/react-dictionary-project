import React from "react";

import "./Photos.css";

export default function Photos(props) {
	if (props.photos && !props.error) {
		return (
			<div className="Photos d-none d-sm-block">
				<div className="row">
					{props.photos.map(function (photo, index) {
						return (
							<div className="col-4" key={index}>
								<a href={photo.src.original} target="_blank" rel="noreferrer">
									<img
										src={photo.src.tiny}
										alt={photo.photographer}
										className="img-fluid"
									/>
								</a>
							</div>
						);
					})}
				</div>
			</div>
		);
	} else {
		return null;
	}
}
