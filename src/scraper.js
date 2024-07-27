import { CheerioCrawler, log, Dataset } from "crawlee";

const crawler = new CheerioCrawler({
    requestHandler: async ({request, parseWithCheerio, pushData}) => {
        log.info(`Processing: ${request.url}`);

        const docQuery = await parseWithCheerio();

        const data = docQuery('[data-uia="collections-row"]')
        .map((i, el) => {
            const genre = docQuery(el)
            .find('[data-uia="collections-row-title"]')
            .text()
            .trim();

            const items = docQuery(el)
            .find('[data-uia="collections-title"]')
            .map((i, _el) => docQuery(_el).text().trim())
            .get();
            return { genre, items }
        })
        .get();

        const genres = data.map(d => d.genre);
        const shows = data.map(d => d.items);
        await pushData({
            genres,
            shows
        });
    },
    maxRequestsPerCrawl: 20
});

await crawler.run(["https://www.netflix.com/ma-fr/browse/genre/839338"]);
await Dataset.exportToJSON('results');
