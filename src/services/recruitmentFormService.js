export async function sendRecruitmentForm(formData) {
    console.log('Dane formularza w trybie testowym:', formData);

    await new Promise((resolve) => {
        setTimeout(resolve, 800);
    });

    return {
        success: true,
        message: 'Formularz został poprawnie sprawdzony w trybie testowym.',
    };
}