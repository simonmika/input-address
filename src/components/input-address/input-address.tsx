import { Component } from "@stencil/core"

@Component({
	tag: "input-address",
	styleUrl: "input-address.css",
	shadow: true,
})
export class InputAddress {
	render() {
		return [
			<label htmlFor="address">Adress</label>,
			<input name="address" type="text"/>,
			<label htmlFor="postCode">Post code</label>,
			<input name="postCode" type="text"/>,
			<label htmlFor="city">City</label>,
			<input name="city" type="text"/>,
		]
	}
}
