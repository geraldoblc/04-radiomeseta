document.addEventListener('DOMContentLoaded', () => {
    const channelItems = document.querySelectorAll('.qt-channel a');
    channelItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const bgImage = item.getAttribute('data-background');
            const playerImage = document.getElementById('playerimage');
            const imgElement = playerImage.querySelector('img');
            
            // Update the background image
            playerImage.setAttribute('data-bgimage', bgImage);
            imgElement.setAttribute('src', bgImage);
            imgElement.setAttribute('alt', item.getAttribute('data-title'));

            // Update the player title and subtitle
            document.getElementById('qtradiotitle').innerText = item.getAttribute('data-title');
            document.getElementById('qtradiosubtitle').innerText = item.getAttribute('data-subtitle');

            // Update the player link
            document.getElementById('playerlink').setAttribute('href', item.getAttribute('data-playtrack'));
        });
    });
});