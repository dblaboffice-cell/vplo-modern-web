const RECRUITMENT_ENDPOINT =
    'https://stara.vp-lo.krakow.pl/api/rekrutacja.php';

export async function sendRecruitmentForm(formData) {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15_000);

    try {
        const response = await fetch(RECRUITMENT_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            signal: controller.signal,
        });

        const result = await response.json().catch(() => ({}));

        if (!response.ok || !result.success) {
            throw new Error(result.message || 'Nie udało się przekazać formularza.');
        }

        return result;
    } finally {
        window.clearTimeout(timeoutId);
    }
}
