document.addEventListener('DOMContentLoaded', () => {
    // .application-form sınıfı içeren elementler üzerinde işlem yap
    for (let i = 1; i <= 40; i++) {
        const downloadLink = document.getElementById(`downloadLink${i}`);
        const applicationStatus = document.getElementById('application-status');

        if (downloadLink) {
            const button = downloadLink.querySelector('.application-form');

            if (button && !downloadLink.getAttribute('href')) {
                button.classList.add('disabled');
                downloadLink.classList.add('cursor-default');

                if (applicationStatus) {
                    applicationStatus.innerHTML = `
                        <h4><i class="bi bi-envelope-x" style="color: red; font-size:24px"></i> EKİP ALIMLARI KAPALI</h4>
                        <p>Üzgünüz, şu an Ekip alımlarımız kapalı; sizi aramızda görmek için sabırsızlanıyoruz, bizi takipte kalın!</p>
                        <footer>Ekip Games™</footer>
                    `;
                }
            } else if (button) {
                button.classList.remove('disabled');
                downloadLink.classList.remove('cursor-default');

                if (applicationStatus) {
                    applicationStatus.innerHTML = `
                        <h4><i class="bi bi-envelope-paper" style="color: green; font-size:24px"></i> EKİP ALIMLARI AÇIK</h4>
                        <p>Başvurunuzu sabırsızlıkla bekliyoruz ve umarız yakında Ekip Games™ ailesinin bir parçası olursunuz!</p>
                        <footer>Ekip Games™</footer>
                    `;
                }
            }

            // href yoksa tıklamayı engelle
            downloadLink.addEventListener('click', (event) => {
                if (!downloadLink.getAttribute('href')) {
                    event.preventDefault();
                }
            });
        }
    }
});
