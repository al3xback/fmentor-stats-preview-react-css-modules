import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<p>
					Challenge by&nbsp;
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						className="btn btn--link"
						rel="noopener noreferrer"
						target="_blank">
						Frontend Mentor
					</a>
					. Coded by&nbsp;
					<a
						href="https://github.com/al3xback"
						className="btn btn--link"
						rel="noopener noreferrer"
						target="_blank">
						al3xback
					</a>
					.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
