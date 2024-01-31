import React, { useState } from "react";
import "../../styles/style.scss";
import { PIXELBIN_CONSOLE_SETTINGS } from "../../../config";
import { EVENTS, localFormOptionsOptions } from "../../../constants";
import { Util } from "../../../util";

type FormOption = {
	name: string;
	type: string;
	default: boolean | string;
	identifier: string;
	title: string;
	tooltip?: string;
	maxLength?: number;
	enum?: string[]; // Make enum property optional
};
interface formProps {
	setFormValues: any;
	formValues: FormOption;
}

function DynamicForm({ setFormValues, formValues }: formProps) {
	const [isAccordionOpen, setIsAccordionOpen] = useState(false);
	const [isInfoHovered, setIsInfoHovered] = useState(false);
	return (
		<div className="form-main-container">
			{localFormOptionsOptions
				.filter((obj) => obj.type !== "string")
				.map((obj, index) => {
					switch (obj.type) {
						case "boolean":
							return (
								<div className="checkbox">
									<input
										id={Util.camelCase(obj.name)}
										type="checkbox"
										checked={formValues[Util.camelCase(obj.name)]}
										onChange={(e) => {
											setFormValues({
												...formValues,
												[Util.camelCase(obj.name)]: e.target.checked,
											});
										}}
									/>
									<div className="generic-text">{obj.title}</div>
								</div>
							);
						case "string":
							return (
								<div className="text-box-container">
									<div className="generic-text dropdown-label">{obj.title}</div>
									<input
										className="text-input-box"
										id={Util.camelCase(obj.name)}
										type="text"
										value={formValues[Util.camelCase(obj.name)]}
										onChange={(e) => {
											setFormValues({
												...formValues,
												[Util.camelCase(obj.name)]: e.target.value,
											});
										}}
									/>
								</div>
							);
						case "enum":
							return (
								<div>
									<div className="generic-text dropdown-label">{obj.title}</div>
									<div className="select-wrapper">
										<select
											onChange={(e) => {
												setFormValues({
													...formValues,
													[Util.camelCase(obj.name)]: e.target.value,
												});
											}}
											id={Util.camelCase(obj.name)}
											value={formValues[Util.camelCase(obj.name)]}
										>
											{obj?.enum?.map((option, index) => (
												<option key={index} value={option}>
													{option}
												</option>
											))}
										</select>
									</div>
								</div>
							);
						default:
							return null;
					}
				})}

			{
				<div className="accordion-container">
					{isInfoHovered && (
						<div className="info box-avlues-details">
							{`(Box values are : (x-axis_y-axis_width_height))`}
							<br />
							{`only 0 to 100 values are allowed`}
							<br />
							{`if not applying use: 0_0_0_0 & on full image use: 0_0_100_100`}
						</div>
					)}
					<div
						className="acc-handler"
						onClick={() => {
							setIsAccordionOpen(!isAccordionOpen);
						}}
					>
						<div className="icon-container">
							<div>Advanced Settings</div>
							<div
								className="info-icon"
								onMouseEnter={() => setIsInfoHovered(true)}
								onMouseLeave={() => setIsInfoHovered(false)}
							>
								ⓘ
							</div>
						</div>

						<div className="theme-icon">{isAccordionOpen ? `▲` : `▼`}</div>
					</div>
					<div className={`acc-data ${isAccordionOpen ? "open" : ""}`}>
						{isAccordionOpen &&
							localFormOptionsOptions
								.filter((obj) => obj.type === "string")
								.map((obj, index) => {
									switch (obj.type) {
										case "string":
											return (
												<div className="text-box-container">
													<div className="generic-text dropdown-label">
														{obj.title}
													</div>
													<input
														className="text-input-box"
														id={Util.camelCase(obj.name)}
														type="text"
														value={formValues[Util.camelCase(obj.name)]}
														onChange={(e) => {
															setFormValues({
																...formValues,
																[Util.camelCase(obj.name)]: e.target.value,
															});
														}}
													/>
												</div>
											);
										default:
											return null;
									}
								})}
					</div>
				</div>
			}
		</div>
	);
}

export default DynamicForm;
