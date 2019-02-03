import { Component, Prop, State } from "@stencil/core"
import { Street, getStreets } from "./Street"

@Component({
	tag: "input-address",
	styleUrl: "input-address.css",
	shadow: false,
})
export class InputAddress {
	@Prop()
	name: string
	@Prop({ mutable: true })
	street: string | undefined
	@Prop({ mutable: true })
	postalCode: string | undefined
	@Prop({ mutable: true })
	postalTown: string | undefined
	@Prop({ mutable: true })
	country: string | undefined
	@State()
	streetList: Street[] = []
	async onStreetInput(value: string | undefined): Promise<string | undefined> {
		if (value) {
			const splitted = value.split(",")
			if (splitted.length == 3) {
				this.street = splitted[0]
				this.postalTown = splitted[1].trim()
				this.country = splitted[2].trim()
				console.log(splitted)
			} else
				this.street = value
		} else
			this.street = value
		this.streetList = this.street && this.street.length > 3 ? await getStreets(this.street || "", this.postalTown, this.country) : []
		console.log(this.streetList)
		return this.street
	}
	getValue(e: Event): string | undefined {
		return e.target ? (e.target as EventTarget & { value: string }).value : undefined
	}
	render() {
		const prefix = this.name ? this.name + "_" : ""
		return [
			<label htmlFor={prefix + "street"}>Street Address</label>,
			<input name={prefix + "street"} value={this.street} placeholder="Street 42" list="street-list" onInput={async e => this.onStreetInput(this.getValue(e)) } type="text" />,
			<datalist id="street-list">
				{ this.streetList.map(prediction => <option>{ [prediction.street, prediction.town, prediction.country].filter(v => v != undefined).join(", ") }</option>) }
			</datalist>,
			<label htmlFor={prefix + "postalCode"}>Postal code</label>,
			<input name={prefix + "postalCode"} value={this.postalCode} placeholder="133 70" onInput={e => this.postalCode = this.getValue(e) } type="text" />,
			<label htmlFor={prefix + "postalTown"}>Postal Town</label>,
			<input name={prefix + "postalTown"} value={this.postalTown} placeholder="Postal Town" onInput={e => this.postalTown = this.getValue(e) } type="text" />,
			<label htmlFor={prefix + "country"}>Country</label>,
			<input name={prefix + "country"} value={this.country} placeholder="Country" onInput={e => this.country = this.getValue(e) } type="text" />,
		]
	}
}
