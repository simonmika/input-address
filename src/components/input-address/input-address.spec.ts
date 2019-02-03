// tslint:disable-next-line: no-submodule-imports
import { newE2EPage } from "@stencil/core/testing"

describe("input-address", () => {
	it("renders", async () => {
		const page = await newE2EPage()

		await page.setContent("<input-address></input-address>")
		const element = await page.find("input-address")
		expect(element).toHaveClass("hydrated")
	})
})
