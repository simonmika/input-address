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
			<input name="address" placeholder="Street 42" type="text"/>,
			<label htmlFor="postCode">Post code</label>,
			<input name="postCode" placeholder="133 70" type="text"/>,
			<label htmlFor="city">City</label>,
			<input name="city" placeholder="City" type="text"/>,
		]
	}
}
