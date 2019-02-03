import { Component, Prop } from "@stencil/core"

@Component({
	tag: "input-address",
	styleUrl: "input-address.css",
	shadow: false,
})
export class InputAddress {
	@Prop()
	name: string
	render() {
		const prefix = this.name ? this.name + "_" : ""
		return [
			<label htmlFor={prefix + "street"}>Street Address</label>,
			<input name={prefix + "street"} placeholder="Street 42" type="text"/>,
			<label htmlFor={prefix + "postalCode"}>Post code</label>,
			<input name={prefix + "postalCode"} placeholder="133 70" type="text"/>,
			<label htmlFor={prefix + "postalTown"}>Postal Town</label>,
			<input name={prefix + "postalTown"} placeholder="Postal Town" type="text"/>,
		]
	}
}
