import styles from './Loader.module.scss'
import LoaderImg from '../../assets/images/loader.gif'

const Loader = (props: { loaderMessage?: string }) => {
    return (
        <figure className={styles.container}>
            <img src={LoaderImg} alt='loader' className={styles.img} width={200} height={200} />
            <h3 className={styles.loaderMessage} >{props.loaderMessage ? props.loaderMessage : 'Loading...'}</h3>
        </figure>
    )
}

export default Loader;