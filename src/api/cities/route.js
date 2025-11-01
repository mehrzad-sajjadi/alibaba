// app/api/cities/route.js
export async function GET(request) {
    const cities = [
        { code: 'THR', fa: 'تهران', en: 'Tehran' },
        { code: 'MHD', fa: 'مشهد', en: 'Mashhad' },
        { code: 'IFN', fa: 'اصفهان', en: 'Isfahan' },
        { code: 'SYZ', fa: 'شیراز', en: 'Shiraz' },
        { code: 'TBZ', fa: 'تبریز', en: 'Tabriz' },
        { code: 'AWZ', fa: 'اهواز', en: 'Ahvaz' },
        { code: 'KIH', fa: 'کیش', en: 'Kish' },
        { code: 'GSM', fa: 'قشم', en: 'Qeshm' },
        { code: 'AZD', fa: 'یزد', en: 'Yazd' },
        { code: 'BND', fa: 'بندرعباس', en: 'Bandar Abbas' },
        { code: 'RAS', fa: 'رشت', en: 'Rasht' },
        { code: 'OMH', fa: 'ارومیه', en: 'Urmia' },
        { code: 'SRY', fa: 'ساری', en: 'Sari' },
        { code: 'GBT', fa: 'گرگان', en: 'Gorgan' },
        { code: 'BUZ', fa: 'بوشهر', en: 'Bushehr' },
        { code: 'ZAH', fa: 'زاهدان', en: 'Zahedan' }
    ];

    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    let filtered = cities;

    if (q) {
        const s = q.toLowerCase();
        filtered = cities.filter(
        (c) =>
            c.code.toLowerCase().includes(s) ||
            c.en.toLowerCase().includes(s) ||
            c.fa.includes(q)
        );
    }

    return Response.json({ success: true, count: filtered.length, data: filtered });
}
