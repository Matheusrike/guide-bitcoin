import { windowsWallets, macWallets, linuxWallets, hardwareWallets, androidWallets, iosWallets } from './walletsData.js';

function displayWallets(wallets, container) {
    container.innerHTML = ''; // Limpar o conteúdo existente

    if (wallets.length === 0) {
        // Mostrar a seção "none-wallet" se não houver carteiras
        document.getElementById('none-section').style.display = 'block';
    } else {
        // Esconder a seção "none-wallet" se houver carteiras
        document.getElementById('none-section').style.display = 'none';

        // Adicionar o divider com um ID
        const divider = document.createElement('div');
        divider.className = 'divider';
        divider.id = 'wallet-divider';
        divider.innerHTML = `
            <hr>
            <p>Carteiras disponíveis</p>
            <hr>
        `;
        container.appendChild(divider);

        // Adicionar os cards das carteiras
        wallets.forEach(wallet => {
            const walletCard = document.createElement('div');
            walletCard.className = 'wallet-card';

            const freeClass = wallet.additionalInfo.free ? 'free' : 'paid';

            walletCard.innerHTML = `
                <img class="wallet-logo" src="${wallet.logo.src}" alt="${wallet.logo.alt}" height="${wallet.logo.height}">
                <div class="geral-infos">
                    <div class="infos">
                        <h3>${wallet.name}</h3>
                        <div class="info-container">
                            <h4>Descrição</h4>
                            <p>${wallet.description}</p>
                        </div>
                        <div class="info-container">
                            <h4>Características</h4>
                            <ul>
                                ${wallet.characteristics.map(char => `<li>${char}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <hr>
                    <div class="adc-infos">
                        <a href="${wallet.additionalInfo.siteLink}" target="_blank">
                            <button class="wallet-site-button" id="site-button">
                                <p>Visite o Site</p>
                                <img class="icon" src="/assets/img/external-link-icon.svg" height="25px">
                            </button>
                        </a>
                        ${wallet.additionalInfo.documentationLink ? `
                        <a href="${wallet.additionalInfo.documentationLink}" target="_blank">
                            <button class="documentation-button">
                                <p>Documentação</p>
                                <img class="icon" src="/assets/img/Folder-info-icon.svg" height="25px">
                            </button>
                        </a>` : ''}
                        <div class="${freeClass}">
                            <p>${wallet.additionalInfo.free ? 'Gratuita' : 'Pago'}</p>
                            <img src="/assets/img/dollar-icon.svg" height="25px">
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(walletCard);
        });

        const dividerElement = document.getElementById('wallet-divider');
        if (dividerElement) {
            window.scrollTo({
                top: dividerElement.offsetTop - window.innerHeight / 4, // Deslocamento para rolar mais abaixo
                behavior: 'smooth'
            });
        }
    }
}

document.querySelectorAll('.banner .link-button').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão do link

        const platform = event.currentTarget.getAttribute('data-platform');
        let wallets;

        switch (platform) {
            case 'windows':
                wallets = windowsWallets;
                break;
            case 'mac':
                wallets = macWallets;
                break;
            case 'linux':
                wallets = linuxWallets;
                break;
            case 'hardware':
                wallets = hardwareWallets;
                break;
            case 'android':
                wallets = androidWallets;
                break;
            case 'ios':
                wallets = iosWallets;
                break;
            default:
                wallets = [];
        }

        const container = document.querySelector('.wallets-container');
        displayWallets(wallets, container);
    });
});
