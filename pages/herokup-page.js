import { Selector } from 'testcafe';

class HerokuPage {
	constructor() {
		this.pageTitle = Selector('.example h3');
		this.dropDownSelector = Selector('#dropdown');
		this.dropDownOptionSelector = Selector('option');
		this.dropDownOptionSelectedItem = Selector("[selected='selected']");
	}

	async getHeaderText() {
		return this.pageTitle.innerText;
	}

	async selectDropDownItem(page, selection) {
		const dropDown = await this.dropDownSelector;
		await page.click(dropDown);
		const itemToSelect = await this.dropDownOptionSelector.withText(selection);
		await page.click(itemToSelect);
		const selectedItem = await this.dropDownOptionSelectedItem.withText(selection);
		return selectedItem.innerText;
	}
}

module.exports = new HerokuPage();
