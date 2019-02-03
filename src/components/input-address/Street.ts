export interface Street {
	street: string
	town?: string
	country?: string
}
export async function getStreets(street: string, town?: string, country?: string): Promise<Street[]> {
	let url = "https://address-autocomplete.azurewebsites.net/api/address/" + street
	if (town && country)
		url += `?town=${town};country=${country}`
	else if (town)
		url += `?town=${town}`
	else if (town)
		url += `?country=${country}`
	const response = await fetch(url)
	let result: Street[] = []
	if (response.ok)
		result = await response.json()
	return result
}
