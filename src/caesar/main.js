import Header from './src/components/Header/Header';
import MainContent from './src/components/MainContent/MainContent';
import Footer from './src/components/Footer/Footer';
import Encrypt from './src/components/Encrypt/Encrypt';
import './src/styles/styles.css';

const caesarComponent = () => {
	const caesar = document.querySelector('.caesar');
	const promise = new Promise((resolve) => {
		resolve(
			(caesar.innerHTML = `
                ${Header}
                ${MainContent}
                ${Footer}
                `)
		);
	});

	promise
		// eslint-disable-next-line no-unused-vars
		.then((_result) => {
			const input = document.querySelector('.stringToEncrypt');
			const encryptedContent = document.querySelector('.encrypted');
			const sendButton = document.querySelector('.sendButton');
			const resetButton = document.querySelector('.resetButton');

			const encryptContent = () => {
				encryptedContent.classList.remove('isError');
				encryptedContent.innerHTML = Encrypt(input.value);
				if (
					encryptedContent.innerHTML === 'Sorry, your message must be a text' ||
					encryptedContent.innerHTML === `Sorry, your message can't be empty`
				) {
					encryptedContent.classList.add('isError');
				}
			};

			const resetForm = () => {
				encryptedContent.classList.remove('isError');
				input.value = '';
				encryptedContent.innerHTML = '';
			};

			sendButton.onclick = encryptContent;
			resetButton.onclick = resetForm;
		});
};

export default caesarComponent;
