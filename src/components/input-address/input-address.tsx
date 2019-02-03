import { Component, Prop } from "@stencil/core"
import { format } from "../../utils/utils"

@Component({
	tag: "input-address",
	styleUrl: "input-address.css",
	shadow: true,
})
export class InputAddress {
	@Prop() first: string
	@Prop() middle: string
	@Prop() last: string
	private getText(): string {
		return format(this.first, this.middle, this.last)
	}
	render() {
		return <div>Hello, World! I'm {this.getText()}</div>
	}
}
