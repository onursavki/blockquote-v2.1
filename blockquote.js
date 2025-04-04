document.addEventListener('DOMContentLoaded', () => {
    // .application-form sınıfı içeren elementler üzerinde işlem yap
    for (let i = 1; i <= 40; i++) { // 1'den 40'a kadar
        const downloadLink = document.getElementById(`downloadLink${i}`);
        const applicationStatus = document.getElementById('application-status'); // Blockquote alanı

        if (downloadLink) {
            const button = downloadLink.querySelector('.application-form'); // .application-form sınıfını kontrol et

            // Eğer href yoksa, butonu devre dışı bırak ve mesajı güncelle
            if (button && !downloadLink.getAttribute('href')) {
                button.classList.add('disabled');
                downloadLink.classList.add('cursor-default'); // cursor-default sınıfını ekle

                if (applicationStatus) {
                    applicationStatus.innerHTML = `
                        <h4>🔴 EKİP ALIMLARI KAPALI</h4>
                        <p>Üzgünüz, şu an Ekip alımlarımız kapalı; sizi aramızda görmek için sabırsızlanıyoruz, bizi takipte kalın!</p>
                        <footer>Ekip Games™</footer>
                    `;
                }
            } else if (button) {
                button.classList.remove('disabled');
                downloadLink.classList.remove('cursor-default'); // cursor-default sınıfını kaldır

                if (applicationStatus) {
                    applicationStatus.innerHTML = `
                        <h4>🟢 EKİP ALIMLARI AÇIK</h4>
                        <p>Başvurunuzu sabırsızlıkla bekliyoruz ve umarız yakında Ekip Games™ ailesinin bir parçası olursunuz!</p>
                        <footer>Ekip Games™</footer>
                    `;
                }
            }

            // Opsiyonel: href yoksa tıklamayı engelle
            downloadLink.addEventListener('click', (event) => {
                if (!downloadLink.getAttribute('href')) {
                    event.preventDefault();
                }
            });
        }
    }
});