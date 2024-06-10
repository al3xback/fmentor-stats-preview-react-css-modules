import meetingImage from '../../assets/images/meeting.jpg';
import styles from './Card.module.scss';

const Card = () => {
	return (
		<article className={styles.card}>
			<div className={styles['card-image']}>
				<div className={styles['card-image-inner']}>
					<img src={meetingImage} alt="People at a meeting" />
				</div>
			</div>
			<div className={styles['card-content']}>
				<h2 className={styles['card-title']}>
					Get <mark>insights</mark> that help your business grow.
				</h2>
				<p className={styles['card-desc']}>
					Discover the benefits of data analytics and make better
					decisions regarding revenue, customer experience, and
					overall efficiency.
				</p>
				<ul className={styles['card-stats-list']}>
					<li className={styles['card-stats-list-item']}>
						<span className={styles.num}>10K+</span>
						<span className={styles.label}>Companies</span>
					</li>
					<li className={styles['card-stats-list-item']}>
						<span className={styles.num}>314</span>
						<span className={styles.label}>Templates</span>
					</li>
					<li className={styles['card-stats-list-item']}>
						<span className={styles.num}>12M+</span>
						<span className={styles.label}>Queries</span>
					</li>
				</ul>
			</div>
		</article>
	);
};

export default Card;
