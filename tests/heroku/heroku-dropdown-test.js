import heroku from '../../pages/herokup-page';

fixture(`Drop Down Tests`).page(`https://the-internet.herokuapp.com/dropdown`);

test('Is Drop Down Testing page', async (page) => {
	const result = await heroku.getHeaderText();
	await page.expect(result).eql('Dropdown List');
});

test('Select Option 1 from dropdown', async (page) => {
	const result = await heroku.selectDropDownItem(page, 'Option 1');
	await page.expect(result).eql('Option 1');
});

test('Select Option 2 from dropdown', async (page) => {
	const result = await heroku.selectDropDownItem(page, 'Option 2');
	await page.expect(result).eql('Option 2');
});
