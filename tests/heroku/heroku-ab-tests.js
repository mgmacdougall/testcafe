import heroku from '../../pages/herokup-page';

fixture(`A/B Testing`).page(`https://the-internet.herokuapp.com/abtest`);

test('Test of AB Testing page', async (page) => {
	const result = await heroku.getHeaderText();
	await page.expect(result).eql('No A/B Test');
});
